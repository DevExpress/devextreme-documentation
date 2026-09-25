$(function () {
    const appointments = [
        {
            id: 1,
            text: 'Team Stand-up',
            startDate: new Date(2026, 4, 8, 9, 0),
            endDate: new Date(2026, 4, 8, 9, 30),
            description: 'Daily morning sync with the full team.'
        },
        {
            id: 2,
            text: 'Design Review',
            startDate: new Date(2026, 4, 8, 11, 0),
            endDate: new Date(2026, 4, 8, 12, 0),
            description: 'Review latest UI mockups and prototypes.'
        },
        {
            id: 3,
            text: 'Sprint Planning',
            startDate: new Date(2026, 4, 11, 14, 0),
            endDate: new Date(2026, 4, 11, 16, 0),
            description: 'Plan tasks for the upcoming sprint.'
        },
        {
            id: 4,
            text: 'Client Demo',
            startDate: new Date(2026, 4, 12, 10, 0),
            endDate: new Date(2026, 4, 12, 11, 30),
            description: 'Showcase new features to the client.'
        },
        {
            id: 5,
            text: 'Retrospective',
            startDate: new Date(2026, 4, 13, 15, 0),
            endDate: new Date(2026, 4, 13, 16, 0),
            description: 'Sprint retrospective — what went well / what to improve.'
        }
    ];
    const DRAFT_PREFIX = 'dx-scheduler-draft-';

    function getDraftKey(appointmentId) {
        return DRAFT_PREFIX + (appointmentId != null ? appointmentId : 'new');
    }

    function saveDraft(appointmentId, formData) {
        const key = getDraftKey(appointmentId);
        const serialize = {};
        Object.keys(formData).forEach(function (k) {
            const val = formData[k];
            serialize[k] = val instanceof Date ? val.toISOString() : val;
        });
        localStorage.setItem(key, JSON.stringify(serialize));
    }

    function loadDraft(appointmentId) {
        const key = getDraftKey(appointmentId);
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (data.startDate) data.startDate = new Date(data.startDate);
        if (data.endDate)   data.endDate   = new Date(data.endDate);
        return data;
    }

    function clearDraft(appointmentId) {
        localStorage.removeItem(getDraftKey(appointmentId));
    }
    let isSaved = false;
    let suppressDraftSaveUntilChange = false;
    let currentAppointmentId = null;
    let popupHidingHandler = null;
    let currentPopup = null;

    
    function onCanceled(form, originalData) {
        if (isSaved) return;

        const formData = form.option('formData');
        const appointmentId = originalData && originalData.id != null
            ? originalData.id
            : null;

        saveDraft(appointmentId, formData);

        DevExpress.ui.notify({
            message: 'Draft saved. Your unsaved changes will be restored next time you open this appointment.',
            type: 'warning',
            displayTime: 4500,
            position: { my: 'bottom center', at: 'bottom center', of: window }
        });
    }
    $('#scheduler').dxScheduler({
        dataSource: appointments,
        currentDate: new Date(2026, 4, 8),
        currentView: 'week',
        views: ['day', 'week', 'month'],
        startDayHour: 8,
        endDayHour: 19,
        height: 600,
        editing: {
            form: {
                labelMode: 'floating',
                items: [
                    {
                        itemType: 'group',
                        name: 'mainGroup',
                        items: [
                            'subjectGroup',
                            'dateGroup',
                            'descriptionGroup',
                            'repeatGroup',
                            'resourcesGroup'
                        ]
                    },
                    {
                        itemType: 'group',
                        name: 'recurrenceGroup'
                    }
                ]
            }
        },
        onAppointmentFormOpening: function (e) {
            const form = e.form;
            const popup = e.popup;
            const appointmentData = e.appointmentData || {};

            isSaved = false;
            suppressDraftSaveUntilChange = false;
            currentAppointmentId = appointmentData.id != null ? appointmentData.id : null;
            const draft = loadDraft(currentAppointmentId);
            if (draft) {
                form.option('formData', $.extend({}, form.option('formData'), draft));

                const originalData = $.extend({}, appointmentData);
                const freshItems = form.option('items').filter(function (item) {
                    return item.name !== 'discardChangesButton';
                });

                freshItems.push({
                    itemType: 'button',
                    name: 'discardChangesButton',
                    horizontalAlignment: 'left',
                    cssClass: 'discard-btn-item',
                    buttonOptions: {
                        text: 'Discard Changes',
                        type: 'danger',
                        stylingMode: 'outlined',
                        icon: 'undo',
                        onClick: function () {
                            clearDraft(currentAppointmentId);
                            suppressDraftSaveUntilChange = true;

                            form.option('formData', $.extend({}, form.option('formData'), {
                                text: originalData.text,
                                description: originalData.description,
                                startDate: originalData.startDate,
                                endDate: originalData.endDate,
                                allDay: originalData.allDay || false
                            }));

                            form.option('items', form.option('items').filter(function (item) {
                                return item.name !== 'discardChangesButton';
                            }));

                            DevExpress.ui.notify({
                                message: 'Changes discarded. Form reset to the last saved state.',
                                type: 'success',
                                displayTime: 3000
                            });
                        }
                    }
                });

                form.option('items', freshItems);

                DevExpress.ui.notify({
                    message: 'Unsaved draft restored. Use "Discard Changes" to revert to the saved appointment.',
                    type: 'info',
                    displayTime: 4000,
                    position: { my: 'bottom center', at: 'bottom center', of: window }
                });
            }
            if (currentPopup && popupHidingHandler) {
                currentPopup.off('hiding', popupHidingHandler);
            }

            currentPopup = popup;
            popupHidingHandler = function () {
                if (!isSaved && !suppressDraftSaveUntilChange) {
                    onCanceled(form, appointmentData);
                }
            };

            popup.on('hiding', popupHidingHandler);

            form.off('fieldDataChanged.schedulerDraftTracking');
            form.on('fieldDataChanged.schedulerDraftTracking', function () {
                suppressDraftSaveUntilChange = false;
            });
        },

        onAppointmentAdded: function () {
            isSaved = true;
            clearDraft(null);
        },

        onAppointmentUpdated: function (e) {
            isSaved = true;
            const appointmentId = e && e.appointmentData && e.appointmentData.id != null ? e.appointmentData.id : null;
            clearDraft(appointmentId);
        }
    });
});
