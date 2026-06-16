Unsaved changes are lost when a user cancels the appointment edit form. To prevent data loss, you can save the current form state to `localStorage` when the form closes without saving, and restore the draft the next time the user opens the same appointment.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.html, /Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.js, /Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.css" style="border: none !important;"></div>

### Save a Draft on Cancel

The Scheduler does not expose a dedicated cancel event. To detect cancellation, listen to the Popup's [hiding](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#onHiding) event inside [onAppointmentFormOpening](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentFormOpening). Guard with an `isSaved` flag so that the handler fires only when the user closes the form without saving:

---
##### jQuery

    <!-- tab: index.js -->
    let isSaved = false;
    let hidingHandler = null;

    function onCanceled(form, originalData) {
        const formData = form.option('formData');
        const appointmentId = originalData && originalData.id != null
            ? originalData.id
            : null;

        const serialized = {};
        Object.keys(formData).forEach(function (key) {
            const val = formData[key];
            serialized[key] = val instanceof Date ? val.toISOString() : val;
        });
        localStorage.setItem('dx-scheduler-draft-' + (appointmentId ?? 'new'), JSON.stringify(serialized));
    }

    $('#scheduler').dxScheduler({
        // ...
        onAppointmentFormOpening: function (e) {
            const form = e.form;
            const popup = e.popup;
            const appointmentData = e.appointmentData || {};

            isSaved = false;

            if (hidingHandler) {
                popup.off('hiding', hidingHandler);
            }
            hidingHandler = function () {
                if (!isSaved) {
                    onCanceled(form, appointmentData);
                }
            };
            popup.on('hiding', hidingHandler);
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentFormOpening)="handleAppointmentFormOpening($event)"
    ></dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxSchedulerModule, type DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        standalone: true,
        imports: [DxSchedulerModule],
    })
    export class AppComponent {
        private isSaved = false;
        private hidingHandler: (() => void) | null = null;

        private onCanceled(
            form: DxSchedulerTypes.AppointmentFormOpeningEvent['form'],
            originalData: Record<string, unknown>,
        ): void {
            const formData = form.option('formData') as Record<string, unknown>;
            const appointmentId = originalData?.['id'] != null ? originalData['id'] : null;

            const serialized: Record<string, unknown> = {};
            Object.keys(formData).forEach((key) => {
                const val = formData[key];
                serialized[key] = val instanceof Date ? val.toISOString() : val;
            });
            localStorage.setItem(
                `dx-scheduler-draft-${appointmentId ?? 'new'}`,
                JSON.stringify(serialized),
            );
        }

        handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
            const { form, popup } = e;
            const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;

            this.isSaved = false;

            if (this.hidingHandler) {
                popup.off('hiding', this.hidingHandler);
            }
            this.hidingHandler = () => {
                if (!this.isSaved) {
                    this.onCanceled(form, appointmentData);
                }
            };
            popup.on('hiding', this.hidingHandler);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            @appointment-form-opening="handleAppointmentFormOpening"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler';

    const isSaved = ref(false);
    let hidingHandler: (() => void) | null = null;

    function onCanceled(
        form: DxSchedulerTypes.AppointmentFormOpeningEvent['form'],
        originalData: Record<string, unknown>,
    ): void {
        const formData = form.option('formData') as Record<string, unknown>;
        const appointmentId = originalData?.['id'] != null ? originalData['id'] : null;

        const serialized: Record<string, unknown> = {};
        Object.keys(formData).forEach((key) => {
            const val = formData[key];
            serialized[key] = val instanceof Date ? val.toISOString() : val;
        });
        localStorage.setItem(
            `dx-scheduler-draft-${appointmentId ?? 'new'}`,
            JSON.stringify(serialized),
        );
    }

    function handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
        const { form, popup } = e;
        const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;

        isSaved.value = false;

        if (hidingHandler) {
            popup.off('hiding', hidingHandler);
        }
        hidingHandler = () => {
            if (!isSaved.value) {
                onCanceled(form, appointmentData);
            }
        };
        popup.on('hiding', hidingHandler);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useRef, useCallback } from 'react';
    import { Scheduler, type SchedulerTypes } from 'devextreme-react/scheduler';

    function onCanceled(
        form: SchedulerTypes.AppointmentFormOpeningEvent['form'],
        originalData: Record<string, unknown>,
        isSaved: React.MutableRefObject<boolean>,
    ): void {
        if (isSaved.current) return;

        const formData = form.option('formData') as Record<string, unknown>;
        const appointmentId = originalData?.['id'] != null ? originalData['id'] : null;

        const draft = {
            text: formData['text'],
            description: formData['description'],
            startDate: formData['startDate'] instanceof Date
                ? (formData['startDate'] as Date).toISOString()
                : formData['startDate'],
            endDate: formData['endDate'] instanceof Date
                ? (formData['endDate'] as Date).toISOString()
                : formData['endDate'],
            allDay: formData['allDay'] ?? false,
        };
        localStorage.setItem(
            `dx-scheduler-draft-${appointmentId ?? 'new'}`,
            JSON.stringify(draft),
        );
    }

    function App() {
        const isSaved = useRef(false);
        const hidingHandlerRef = useRef<(() => void) | null>(null);

        const handleAppointmentFormOpening = useCallback(
            (e: SchedulerTypes.AppointmentFormOpeningEvent) => {
                const { form, popup } = e;
                const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;

                isSaved.current = false;

                if (hidingHandlerRef.current) {
                    popup.off('hiding', hidingHandlerRef.current);
                }
                hidingHandlerRef.current = () => {
                    onCanceled(form, appointmentData, isSaved);
                };
                popup.on('hiding', hidingHandlerRef.current);
            },
            [],
        );

        return (
            <Scheduler ...
                onAppointmentFormOpening={handleAppointmentFormOpening}
            />
        );
    }

    export default App;

---

### Restore a Draft and Add a Discard Changes Button

When the edit form opens, check `localStorage` for a saved draft. If a draft exists, restore its values into the form with `form.option('formData', …)` and add a **Discard Changes** button so the user can revert to the appointment's last saved state:

---
##### jQuery

    <!-- tab: index.js -->
    onAppointmentFormOpening: function (e) {
        const form = e.form;
        const appointmentData = e.appointmentData || {};
        const appointmentId = appointmentData.id != null ? appointmentData.id : null;
        // Restore draft
        const raw = localStorage.getItem('dx-scheduler-draft-' + (appointmentId ?? 'new'));
        if (raw) {
            const draft = JSON.parse(raw);
            if (draft.startDate) draft.startDate = new Date(draft.startDate);
            if (draft.endDate)   draft.endDate   = new Date(draft.endDate);

            form.option('formData', Object.assign({}, form.option('formData'), draft));

            // Add Discard Changes button
            const originalData = Object.assign({}, appointmentData);
            const items = form.option('items');
            const alreadyAdded = items.some(function (item) {
                return item.name === 'discardChangesButton';
            });

            if (!alreadyAdded) {
                items.push({
                    itemType: 'button',
                    name: 'discardChangesButton',
                    horizontalAlignment: 'left',
                    buttonOptions: {
                        text: 'Discard Changes',
                        type: 'danger',
                        stylingMode: 'outlined',
                        icon: 'undo',
                        onClick: function () {
                            isSaved = true;
                            localStorage.removeItem('dx-scheduler-draft-' + (appointmentId ?? 'new'));

                            form.option('formData', Object.assign({}, form.option('formData'), {
                                text: originalData.text,
                                description: originalData.description,
                                startDate: originalData.startDate,
                                endDate: originalData.endDate,
                                allDay: originalData.allDay || false,
                            }));

                            form.option('items', form.option('items').filter(function (item) {
                                return item.name !== 'discardChangesButton';
                            }));
                        },
                    },
                });
                form.option('items', items);
            }
        }

        // Wire up cancel detection
        // ...
    },

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentFormOpening)="handleAppointmentFormOpening($event)"
    ></dx-scheduler>

    <!-- tab: app.component.ts -->
    import { type DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';
    // ...
    export class AppComponent {
        // ...
        handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
            const { form } = e;
            const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;
            const appointmentId = appointmentData['id'] != null ? appointmentData['id'] : null;

            // Restore draft
            const raw = localStorage.getItem(`dx-scheduler-draft-${appointmentId ?? 'new'}`);
            if (raw) {
                const draft = JSON.parse(raw) as Record<string, unknown>;
                if (draft['startDate']) draft['startDate'] = new Date(draft['startDate'] as string);
                if (draft['endDate'])   draft['endDate']   = new Date(draft['endDate'] as string);

                form.option('formData', { ...form.option('formData') as object, ...draft });

                // Add Discard Changes button
                const originalData = { ...appointmentData };
                const items = form.option('items') as object[];
                const alreadyAdded = items.some((item) => (item as { name?: string })['name'] === 'discardChangesButton');

                if (!alreadyAdded) {
                    items.push({
                        itemType: 'button',
                        name: 'discardChangesButton',
                        horizontalAlignment: 'left',
                        buttonOptions: {
                            text: 'Discard Changes',
                            type: 'danger',
                            stylingMode: 'outlined',
                            icon: 'undo',
                            onClick: () => {                                this.isSaved = true;                                this.isSaved = true;
                                localStorage.removeItem(`dx-scheduler-draft-${appointmentId ?? 'new'}`);

                                form.option('formData', {
                                    ...form.option('formData') as object,
                                    text: originalData['text'],
                                    description: originalData['description'],
                                    startDate: originalData['startDate'],
                                    endDate: originalData['endDate'],
                                    allDay: originalData['allDay'] ?? false,
                                });

                                form.option(
                                    'items',
                                    (form.option('items') as object[]).filter(
                                        (item) => (item as { name?: string })['name'] !== 'discardChangesButton',
                                    ),
                                );
                            },
                        },
                    });
                    form.option('items', items);
                }
            }

            // Wire up cancel detection
            // ...
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            @appointment-form-opening="handleAppointmentFormOpening"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler';

    const isSaved = ref(false);

    function handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
        const { form } = e;
        const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;
        const appointmentId = appointmentData['id'] != null ? appointmentData['id'] : null;

        // Restore draft
        const raw = localStorage.getItem(`dx-scheduler-draft-${appointmentId ?? 'new'}`);
        if (raw) {
            const draft = JSON.parse(raw) as Record<string, unknown>;
            if (draft['startDate']) draft['startDate'] = new Date(draft['startDate'] as string);
            if (draft['endDate'])   draft['endDate']   = new Date(draft['endDate'] as string);

            form.option('formData', { ...form.option('formData') as object, ...draft });

            // Add Discard Changes button
            const originalData = { ...appointmentData };
            const items = form.option('items') as object[];
            const alreadyAdded = items.some(
                (item) => (item as { name?: string })['name'] === 'discardChangesButton',
            );

            if (!alreadyAdded) {
                items.push({
                    itemType: 'button',
                    name: 'discardChangesButton',
                    horizontalAlignment: 'left',
                    buttonOptions: {
                        text: 'Discard Changes',
                        type: 'danger',
                        stylingMode: 'outlined',
                        icon: 'undo',
                        onClick: () => {
                            isSaved.value = true;
                            localStorage.removeItem(`dx-scheduler-draft-${appointmentId ?? 'new'}`);

                            form.option('formData', {

##### React

    <!-- tab: App.tsx -->
    import { useRef, useCallback } from 'react';
    import { Scheduler, type SchedulerTypes } from 'devextreme-react/scheduler';

    function App() {
        const isSaved = useRef(false);

        const handleAppointmentFormOpening = useCallback(
            (e: SchedulerTypes.AppointmentFormOpeningEvent) => {
                const { form } = e;
                const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;
                const appointmentId = appointmentData['id'] != null ? appointmentData['id'] : null;

                // Restore draft
                const raw = localStorage.getItem(`dx-scheduler-draft-${appointmentId ?? 'new'}`);
                if (raw) {
                    const draft = JSON.parse(raw) as Record<string, unknown>;
                    if (draft['startDate']) draft['startDate'] = new Date(draft['startDate'] as string);
                    if (draft['endDate'])   draft['endDate']   = new Date(draft['endDate'] as string);

                    form.option('formData', { ...form.option('formData') as object, ...draft });

                    // Add Discard Changes button
                    const originalData = { ...appointmentData };
                    const items = form.option('items') as object[];
                    const alreadyAdded = items.some(
                        (item) => (item as { name?: string })['name'] === 'discardChangesButton',
                    );

                    if (!alreadyAdded) {
                        items.push({
                            itemType: 'button',
                            name: 'discardChangesButton',
                            horizontalAlignment: 'left',
                            buttonOptions: {
                                text: 'Discard Changes',
                                type: 'danger',
                                stylingMode: 'outlined',
                                icon: 'undo',
                                onClick: () => {
                                    isSaved.current = true;
                                    localStorage.removeItem(`dx-scheduler-draft-${appointmentId ?? 'new'}`);

                                    form.option('formData', {

                                    form.option('formData', {
                                        ...form.option('formData') as object,
                                        text: originalData['text'],
                                        description: originalData['description'],
                                        startDate: originalData['startDate'],
                                        endDate: originalData['endDate'],
                                        allDay: originalData['allDay'] ?? false,
                                    });

                                    form.option(
                                        'items',
                                        (form.option('items') as object[]).filter(
                                            (item) => (item as { name?: string })['name'] !== 'discardChangesButton',
                                        ),
                                    );
                                },
                            },
                        });
                        form.option('items', items);
                    }
                }

                // Wire up cancel detection
                // ...
            },
            [],
        );

        return (
            <Scheduler ...
                onAppointmentFormOpening={handleAppointmentFormOpening}
            />
        );
    }
    export default App;

---

### Clear the Draft After a Successful Save

Clear the draft from `localStorage` after the user saves the appointment to avoid restoring stale data on subsequent opens:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        // ...
        onAppointmentAdded: function () {
            isSaved = true;
            localStorage.removeItem('dx-scheduler-draft-new');
        },
        onAppointmentUpdated: function (e) {
            isSaved = true;
            const appointmentId = e.appointmentData && e.appointmentData.id != null ? e.appointmentData.id : 'new';
            localStorage.removeItem('dx-scheduler-draft-' + appointmentId);
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentAdded)="handleAppointmentAdded()"
        (onAppointmentUpdated)="handleAppointmentUpdated($event)"
    ></dx-scheduler>

    <!-- tab: app.component.ts -->
    import { type DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';
    // ...
    export class AppComponent {
        // ...
        handleAppointmentAdded(): void {
            this.isSaved = true;
            localStorage.removeItem('dx-scheduler-draft-new');
        }

        handleAppointmentUpdated(e: DxSchedulerTypes.AppointmentUpdatedEvent): void {
            this.isSaved = true;
            const appointmentId = e.appointmentData?.['id'] != null ? e.appointmentData['id'] : 'new';
            localStorage.removeItem(`dx-scheduler-draft-${appointmentId}`);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            @appointment-added="handleAppointmentAdded"
            @appointment-updated="handleAppointmentUpdated"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler';

    const isSaved = ref(false);

    function handleAppointmentAdded(): void {
        isSaved.value = true;
        localStorage.removeItem('dx-scheduler-draft-new');
    }

    function handleAppointmentUpdated(e: DxSchedulerTypes.AppointmentUpdatedEvent): void {
        isSaved.value = true;
        const appointmentId = e.appointmentData?.['id'] != null ? e.appointmentData['id'] : 'new';
        localStorage.removeItem(`dx-scheduler-draft-${appointmentId}`);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useRef, useCallback } from 'react';
    import { Scheduler, type SchedulerTypes } from 'devextreme-react/scheduler';

    function App() {
        const isSaved = useRef(false);

        const handleAppointmentAdded = useCallback(() => {
            isSaved.current = true;
            localStorage.removeItem('dx-scheduler-draft-new');
        }, []);

        const handleAppointmentUpdated = useCallback(
            (e: SchedulerTypes.AppointmentUpdatedEvent) => {
                isSaved.current = true;
                const appointmentId = e.appointmentData?.['id'] != null ? e.appointmentData['id'] : 'new';
                localStorage.removeItem(`dx-scheduler-draft-${appointmentId}`);
            },
            [],
        );

        return (
            <Scheduler ...
                onAppointmentAdded={handleAppointmentAdded}
                onAppointmentUpdated={handleAppointmentUpdated}
            />
        );
    }

    export default App;

---
