When a user cancels the appointment edit form, unsaved changes are lost. To prevent data loss, you can save the current form state to `localStorage` when the form closes without saving, and restore the draft the next time the user opens the same appointment.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.html, /Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.js, /Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.css" style="border: none !important;"></div>

This topic demonstrates how to:

- Detect cancellation by listening to the Popup's `hiding` event inside [onAppointmentFormOpening](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentFormOpening.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentFormOpening').
- Restore a saved draft and add a **Discard Changes** button when the form opens.
- Clear the draft after a successful save using [onAppointmentAdding](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdding') and [onAppointmentUpdating](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdating').

## Save a Draft on Cancel

The Scheduler does not expose a dedicated cancel event. To detect cancellation, listen to the Popup's `hiding` event inside `onAppointmentFormOpening`. Guard with an `isSaved` flag so that the handler fires only when the user closes the form without saving:

---
##### jQuery

    <!-- tab: index.js -->
    let isSaved = false;

    function onCanceled(form, originalData) {
        const formData = form.option('formData');
        const appointmentId = originalData && originalData.id != null
            ? originalData.id
            : null;

        // Serialize dates as ISO strings for JSON compatibility
        const draft = {
            text: formData.text,
            description: formData.description,
            startDate: formData.startDate instanceof Date
                ? formData.startDate.toISOString()
                : formData.startDate,
            endDate: formData.endDate instanceof Date
                ? formData.endDate.toISOString()
                : formData.endDate,
            allDay: formData.allDay || false,
        };
        localStorage.setItem('dx-scheduler-draft-' + (appointmentId ?? 'new'), JSON.stringify(draft));
    }

    $('#scheduler').dxScheduler({
        // ...
        onAppointmentFormOpening: function (e) {
            const form = e.form;
            const popup = e.popup;
            const appointmentData = e.appointmentData || {};

            isSaved = false;

            popup.on('hiding', function () {
                if (!isSaved) {
                    onCanceled(form, appointmentData);
                }
            });
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

        private onCanceled(
            form: DxSchedulerTypes.AppointmentFormOpeningEvent['form'],
            originalData: Record<string, unknown>,
        ): void {
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

        handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
            const { form, popup } = e;
            const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;

            this.isSaved = false;

            popup.on('hiding', () => {
                if (!this.isSaved) {
                    this.onCanceled(form, appointmentData);
                }
            });
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

    function onCanceled(
        form: DxSchedulerTypes.AppointmentFormOpeningEvent['form'],
        originalData: Record<string, unknown>,
    ): void {
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

    function handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
        const { form, popup } = e;
        const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;

        isSaved.value = false;

        popup.on('hiding', () => {
            if (!isSaved.value) {
                onCanceled(form, appointmentData);
            }
        });
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

        const handleAppointmentFormOpening = useCallback(
            (e: SchedulerTypes.AppointmentFormOpeningEvent) => {
                const { form, popup } = e;
                const appointmentData = (e.appointmentData ?? {}) as Record<string, unknown>;

                isSaved.current = false;

                popup.on('hiding', () => {
                    onCanceled(form, appointmentData, isSaved);
                });
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

[note] Remove any previously registered `hiding` handler before registering a new one to prevent duplicate draft saves when the same appointment is opened multiple times.

## Restore a Draft and Add a Discard Changes Button

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
                            onClick: () => {
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
    </script>

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

    
## Clear the Draft After a Successful Save

Clear the draft from `localStorage` after the user saves the appointment to avoid restoring stale data on subsequent opens:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        // ...
        onAppointmentAdding: function () {
            isSaved = true;
            localStorage.removeItem('dx-scheduler-draft-new');
        },
        onAppointmentUpdating: function (e) {
            isSaved = true;
            const appointmentId = e.oldData && e.oldData.id != null ? e.oldData.id : null;
            localStorage.removeItem('dx-scheduler-draft-' + appointmentId);
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentAdding)="handleAppointmentAdding()"
        (onAppointmentUpdating)="handleAppointmentUpdating($event)"
    ></dx-scheduler>

    <!-- tab: app.component.ts -->
    import { type DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';
    // ...
    export class AppComponent {
        // ...
        handleAppointmentAdding(): void {
            this.isSaved = true;
            localStorage.removeItem('dx-scheduler-draft-new');
        }

        handleAppointmentUpdating(e: DxSchedulerTypes.AppointmentUpdatingEvent): void {
            this.isSaved = true;
            const appointmentId = e.oldData?.['id'] != null ? e.oldData['id'] : null;
            localStorage.removeItem(`dx-scheduler-draft-${appointmentId}`);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            @appointment-adding="handleAppointmentAdding"
            @appointment-updating="handleAppointmentUpdating"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler';

    const isSaved = ref(false);

    function handleAppointmentAdding(): void {
        isSaved.value = true;
        localStorage.removeItem('dx-scheduler-draft-new');
    }

    function handleAppointmentUpdating(e: DxSchedulerTypes.AppointmentUpdatingEvent): void {
        isSaved.value = true;
        const appointmentId = e.oldData?.['id'] != null ? e.oldData['id'] : null;
        localStorage.removeItem(`dx-scheduler-draft-${appointmentId}`);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useRef, useCallback } from 'react';
    import { Scheduler, type SchedulerTypes } from 'devextreme-react/scheduler';

    function App() {
        const isSaved = useRef(false);

        const handleAppointmentAdding = useCallback(() => {
            isSaved.current = true;
            localStorage.removeItem('dx-scheduler-draft-new');
        }, []);

        const handleAppointmentUpdating = useCallback(
            (e: SchedulerTypes.AppointmentUpdatingEvent) => {
                isSaved.current = true;
                const appointmentId = e.oldData?.['id'] != null ? e.oldData['id'] : null;
                localStorage.removeItem(`dx-scheduler-draft-${appointmentId}`);
            },
            [],
        );

        return (
            <Scheduler ...
                onAppointmentAdding={handleAppointmentAdding}
                onAppointmentUpdating={handleAppointmentUpdating}
            />
        );
    }

    export default App;

---
