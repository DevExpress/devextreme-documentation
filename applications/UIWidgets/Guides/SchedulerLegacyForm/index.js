$(function () {
    const assignees = [
        { text: 'Samantha Bright', id: 1, color: '#727bd2' },
        { text: 'John Heart',      id: 2, color: '#32c9ed' },
        { text: 'Todd Hoffman',    id: 3, color: '#2a7ee4' },
        { text: 'Sandra Johnson',  id: 4, color: '#7b49d3' },
    ];

    const rooms = [
        { text: 'Room 1', id: 1, color: '#00af2c' },
        { text: 'Room 2', id: 2, color: '#56ca85' },
        { text: 'Room 3', id: 3, color: '#8ecd3c' },
    ];

    const priorities = [
        { text: 'High', id: 1, color: '#cc5c53' },
        { text: 'Low',  id: 2, color: '#ff9747' },
    ];

    const resources = [
        { fieldExpr: 'roomId',     dataSource: rooms,      label: 'Room' },
        { fieldExpr: 'priorityId', dataSource: priorities, label: 'Priority' },
        { fieldExpr: 'assigneeId', allowMultiple: true, dataSource: assignees, label: 'Assignee' },
    ];

    const schedulerData = [
        {
            text: 'Watercolor Landscape',
            assigneeId: [4], roomId: 1, priorityId: 2,
            startDate: new Date('2026-04-27T17:30:00.000Z'),
            endDate:   new Date('2026-04-27T19:00:00.000Z'),
            recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
        },
        {
            text: 'Website Re-Design Plan',
            assigneeId: [4], roomId: 1, priorityId: 2,
            startDate: new Date('2026-04-27T16:30:00.000Z'),
            endDate:   new Date('2026-04-27T18:30:00.000Z'),
        },
        {
            text: 'Book Flights to San Fran for Sales Trip',
            assigneeId: [2], roomId: 2, priorityId: 1,
            startDate: new Date('2026-04-27T19:00:00.000Z'),
            endDate:   new Date('2026-04-27T20:00:00.000Z'),
            allDay: true,
        },
        {
            text: 'Install New Router in Dev Room',
            assigneeId: [1], roomId: 1, priorityId: 2,
            startDate: new Date('2026-04-27T21:30:00.000Z'),
            endDate:   new Date('2026-04-27T22:30:00.000Z'),
        },
        {
            text: 'Approve Personal Computer Upgrade Plan',
            assigneeId: [3], roomId: 2, priorityId: 2,
            startDate: new Date('2026-04-28T17:00:00.000Z'),
            endDate:   new Date('2026-04-28T18:00:00.000Z'),
        },
        {
            text: 'Final Budget Review',
            assigneeId: [1], roomId: 1, priorityId: 1,
            startDate: new Date('2026-04-28T19:00:00.000Z'),
            endDate:   new Date('2026-04-28T20:35:00.000Z'),
        },
        {
            text: 'New Brochures',
            assigneeId: [4], roomId: 3, priorityId: 2,
            startDate: new Date('2026-04-28T21:30:00.000Z'),
            endDate:   new Date('2026-04-28T22:45:00.000Z'),
        },
        {
            text: 'Install New Database',
            assigneeId: [2], roomId: 3, priorityId: 1,
            startDate: new Date('2026-04-29T16:45:00.000Z'),
            endDate:   new Date('2026-04-29T18:15:00.000Z'),
        },
        {
            text: 'Approve New Online Marketing Strategy',
            assigneeId: [4], roomId: 2, priorityId: 1,
            startDate: new Date('2026-04-29T19:00:00.000Z'),
            endDate:   new Date('2026-04-29T21:00:00.000Z'),
        },
        {
            text: 'Upgrade Personal Computers',
            assigneeId: [2], roomId: 2, priorityId: 2,
            startDate: new Date('2026-04-29T22:15:00.000Z'),
            endDate:   new Date('2026-04-29T23:30:00.000Z'),
        },
        {
            text: 'Customer Workshop',
            assigneeId: [3], roomId: 3, priorityId: 1,
            startDate: new Date('2026-04-30T18:00:00.000Z'),
            endDate:   new Date('2026-04-30T19:00:00.000Z'),
            allDay: true,
        },
        {
            text: 'Prepare 2026 Marketing Plan',
            assigneeId: [1], roomId: 1, priorityId: 2,
            startDate: new Date('2026-04-30T18:00:00.000Z'),
            endDate:   new Date('2026-04-30T20:30:00.000Z'),
        },
        {
            text: 'Brochure Design Review',
            assigneeId: [4], roomId: 1, priorityId: 1,
            startDate: new Date('2026-04-30T21:00:00.000Z'),
            endDate:   new Date('2026-04-30T22:30:00.000Z'),
        },
        {
            text: 'Create Icons for Website',
            assigneeId: [3], roomId: 3, priorityId: 1,
            startDate: new Date('2026-05-01T17:00:00.000Z'),
            endDate:   new Date('2026-05-01T18:30:00.000Z'),
        },
        {
            text: 'Upgrade Server Hardware',
            assigneeId: [4], roomId: 2, priorityId: 2,
            startDate: new Date('2026-05-01T21:30:00.000Z'),
            endDate:   new Date('2026-05-01T23:00:00.000Z'),
        },
        {
            text: 'Submit New Website Design',
            assigneeId: [1], roomId: 1, priorityId: 2,
            startDate: new Date('2026-05-01T23:30:00.000Z'),
            endDate:   new Date('2026-05-02T01:00:00.000Z'),
        },
        {
            text: 'Launch New Website',
            assigneeId: [2], roomId: 3, priorityId: 1,
            startDate: new Date('2026-05-01T19:20:00.000Z'),
            endDate:   new Date('2026-05-01T21:00:00.000Z'),
        },
    ];

    const legacyFormItems = [
        {
            name: 'mainGroup',
            cssClass: '',
            items: [
                'subjectGroup',
                'dateGroup',
                {
                    name: 'repeatGroup',
                    items: [
                        'repeatIcon',
                        {
                            name: 'customRepeatEditor',
                            editorType: 'dxSwitch',
                            dataField: 'repeat',
                            label: { text: 'Repeat' },
                            editorOptions: {},
                        },
                    ],
                },
                'resourcesGroup',
                'descriptionGroup',
            ],
        },
        {
            name: 'recurrenceGroup',
            itemType: 'group',
            cssClass: '',
            visible: false,
            items: [
                'recurrenceRuleGroup',
                'recurrenceEndGroup',
            ],
        },
    ];

    function applyRepeatState(form, isRepeat) {
        if (isRepeat) {
            const recurrenceRule = form.option('formData') && form.option('formData').recurrenceRule;
            form.option('colCount', 2);
            form.option('formData.recurrenceRule', recurrenceRule || 'FREQ=DAILY');
            form.itemOption('recurrenceGroup', 'visible', true);
        } else {
            form.option('colCount', 1);
            form.option('formData.recurrenceRule', '');
            form.itemOption('recurrenceGroup', 'visible', false);
        }
    }

    $('#scheduler').dxScheduler({
        dataSource: schedulerData,
        resources: resources,
        height: 600,
        views: ['day', 'week', 'workWeek', 'month'],
        currentView: 'workWeek',
        currentDate: new Date(2026, 3, 29),

        onAppointmentAdding: function (e) {
            delete e.appointmentData.repeat;
        },
        onAppointmentUpdating: function (e) {
            delete e.newData.repeat;
        },

        onAppointmentFormOpening: function (e) {
            const form = e.form;

            form.on('fieldDataChanged', function (fe) {
                if (fe.dataField === 'recurrenceRule') {
                    form.option('formData.repeat', !!fe.value);
                }
            });

            const hasRecurrence = !!(e.appointmentData && e.appointmentData.recurrenceRule);
            form.option('formData.repeat', hasRecurrence);
            applyRepeatState(form, hasRecurrence);

            form.itemOption('mainGroup.repeatGroup.customRepeatEditor', 'editorOptions', {
                onValueChanged: function (ve) {
                    applyRepeatState(form, ve.value);
                },
            });
        },

        editing: {
            allowAdding:          true,
            allowUpdating:        true,
            allowDeleting:        true,
            allowDragging:        true,
            allowResizing:        true,
            allowTimeZoneEditing: false,
            popup: {
                maxWidth: 800,
                toolbarItems: [
                    {
                        toolbar: 'top',
                        location: 'before',
                        text: 'Edit Appointment',
                        cssClass: 'dx-toolbar-label',
                    },
                    {
                        toolbar: 'top',
                        location: 'after',
                        shortcut: 'done',
                        options: {
                            stylingMode: 'contained',
                            type: 'default',
                            text: 'Save',
                        },
                    },
                    {
                        toolbar: 'top',
                        location: 'after',
                        shortcut: 'cancel',
                    },
                ],
            },
            form: {
                iconsShowMode: 'none',
                items: legacyFormItems,
            },
        },
    });
});
