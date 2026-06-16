In DevExtreme v25.2, the appointment edit form was updated with a new layout. If your application depends on the previous form layout, you can replicate it using [editing.form.items](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/form/items.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#items') and [onAppointmentFormOpening](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentFormOpening.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentFormOpening').

<div class="simulator-desktop-container" data-view="/Content/Applications/25_2/UIWidgets/Guides/SchedulerLegacyForm/index.html, /Content/Applications/25_2/UIWidgets/Guides/SchedulerLegacyForm/index.js, /Content/Applications/25_2/UIWidgets/Guides/SchedulerLegacyForm/index.css" style="border: none !important;"></div>

### Define the Legacy Form Layout

Use **editing**.**form**.[items[]](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/form/items.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#items') to rearrange predefined groups and inject a custom repeat toggle. Both `mainGroup` and `recurrenceGroup` must stay at the root level.

Two details are critical for the recurrence panel to work correctly:

- Set `cssClass: ''` on both `mainGroup` and `recurrenceGroup`. The Scheduler internally uses the `dx-scheduler-form-recurrence-group-hidden` CSS class to control `recurrenceGroup` visibility. Setting `cssClass: ''` prevents that class from being applied and lets you control visibility manually.
- Set `visible: false` on `recurrenceGroup` so the panel starts hidden. List its children explicitly so the Scheduler initializes the recurrence editors on form build:

---

##### jQuery

    <!-- tab: index.js -->
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

    $('#scheduler').dxScheduler({
        editing: {
            form: {
                iconsShowMode: 'none',
                items: legacyFormItems,
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...>
        <dxo-scheduler-editing>
            <dxo-editing-form iconsShowMode="none">
                <dxi-form-item
                    name="mainGroup"
                    cssClass=""
                >
                    <dxi-form-item name="subjectGroup"></dxi-form-item>
                    <dxi-form-item name="dateGroup"></dxi-form-item>
                    <dxi-form-item name="repeatGroup">
                        <dxi-form-item name="repeatIcon"></dxi-form-item>
                        <dxi-form-item
                            name="customRepeatEditor"
                            editorType="dxSwitch"
                            dataField="repeat"
                            [label]="{ text: 'Repeat' }"
                        ></dxi-form-item>
                    </dxi-form-item>
                    <dxi-form-item name="resourcesGroup"></dxi-form-item>
                    <dxi-form-item name="descriptionGroup"></dxi-form-item>
                </dxi-form-item>
                <dxi-form-item
                    name="recurrenceGroup"
                    itemType="group"
                    cssClass=""
                    [visible]="false"
                >
                    <dxi-form-item name="recurrenceRuleGroup"></dxi-form-item>
                    <dxi-form-item name="recurrenceEndGroup"></dxi-form-item>
                </dxi-form-item>
            </dxo-editing-form>
        </dxo-scheduler-editing>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...>
            <DxEditing>
                <DxForm icons-show-mode="none">
                    <DxItem
                        name="mainGroup"
                        css-class=""
                    >
                        <DxItem name="subjectGroup" />
                        <DxItem name="dateGroup" />
                        <DxItem name="repeatGroup">
                            <DxItem name="repeatIcon" />
                            <DxItem
                                name="customRepeatEditor"
                                editor-type="dxSwitch"
                                data-field="repeat"
                                :label="{ text: 'Repeat' }"
                            />
                        </DxItem>
                        <DxItem name="resourcesGroup" />
                        <DxItem name="descriptionGroup" />
                    </DxItem>
                    <DxItem
                        name="recurrenceGroup"
                        itemType="group"
                        css-class=""
                        :visible="false"
                    >
                        <DxItem name="recurrenceRuleGroup" />
                        <DxItem name="recurrenceEndGroup" />
                    </DxItem>
                </DxForm>
            </DxEditing>
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { DxScheduler, DxEditing, DxForm, DxItem } from 'devextreme-vue/scheduler';
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Editing, Form } from 'devextreme-react/scheduler';

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
            itemType: 'group' as const,
            cssClass: '',
            visible: false,
            items: [
                'recurrenceRuleGroup',
                'recurrenceEndGroup',
            ],
        },
    ];

    function App() {
        return (
            <Scheduler ...>
                <Editing>
                    <Form iconsShowMode="none" items={legacyFormItems} />
                </Editing>
            </Scheduler>
        );
    }

    export default App;

---

Set [iconsShowMode](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/form/iconsShowMode.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#iconsShowMode') to `'none'` to hide the group prefix icons that appear in the default v25.2 layout.

Refer to [Predefined Items](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/070%20Appointment%20Edit%20Form/15%20Predefined%20Items.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Edit_Form/#Predefined_Items') for the full list of available group and item names.

### Customize the Popup Toolbar

Use [editing.popup](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/popup.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#popup') to move the action buttons to the top toolbar and add a title label, matching the legacy popup appearance:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        editing: {
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
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...>
        <dxo-scheduler-editing>
            <dxo-editing-popup [maxWidth]="800" [toolbarItems]="popupToolbarItems" />
        </dxo-scheduler-editing>
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        standalone: true,
        imports: [DxSchedulerModule],
    })
    export class AppComponent {
        popupToolbarItems = [
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
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...>
            <DxEditing>
                <DxPopup :max-width="800" :toolbar-items="popupToolbarItems" />
            </DxEditing>
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { DxScheduler, DxEditing, DxPopup } from 'devextreme-vue/scheduler';

    const popupToolbarItems = [
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
    ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Editing, Popup } from 'devextreme-react/scheduler';

    const popupToolbarItems = [
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
    ];

    function App() {
        return (
            <Scheduler ...>
                <Editing>
                    <Popup maxWidth={800} toolbarItems={popupToolbarItems} />
                </Editing>
            </Scheduler>
        );
    }

    export default App;

---

### Wire Up the Repeat Toggle

The built-in recurrence panel switch fires when the user changes the **Repeat** drop-down in the default form. You must wire up the toggle logic manually in `onAppointmentFormOpening` because the legacy form replaces that drop-down with a custom `dxSwitch`.

The `applyRepeatState` helper toggles the layout between one and two columns, displays or hides `recurrenceGroup`, and sets or clears `formData.recurrenceRule`. All three operations must happen together.

`cssClass: ''` on `recurrenceGroup` (set in the previous section) is what makes this possible: it prevents the Scheduler from applying its internal `dx-scheduler-form-recurrence-group-hidden` class, so `form.itemOption('recurrenceGroup', 'visible', ...)` has full control over the panel.

The `fieldDataChanged` listener keeps the toggle in sync when the user edits the recurrence rule from inside the panel (which can also clear the rule):

---

##### jQuery

    <!-- tab: index.js -->
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

    let fieldDataChangedHandler = null;

    $('#scheduler').dxScheduler({
        onAppointmentFormOpening: function (e) {
            const form = e.form;

            if (fieldDataChangedHandler) {
                form.off('fieldDataChanged', fieldDataChangedHandler);
            }
            fieldDataChangedHandler = function (fe) {
                if (fe.dataField === 'recurrenceRule') {
                    form.option('formData.repeat', !!fe.value);
                }
            };
            form.on('fieldDataChanged', fieldDataChangedHandler);

            const hasRecurrence = !!(e.appointmentData && e.appointmentData.recurrenceRule);
            form.option('formData.repeat', hasRecurrence);
            applyRepeatState(form, hasRecurrence);

            form.itemOption('mainGroup.repeatGroup.customRepeatEditor', 'editorOptions', {
                onValueChanged: function (ve) {
                    applyRepeatState(form, ve.value);
                },
            });
        },

        onAppointmentAdding: function (e) {
            delete e.appointmentData.repeat;
        },
        onAppointmentUpdating: function (e) {
            delete e.newData.repeat;
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentFormOpening)="handleAppointmentFormOpening($event)"
        (onAppointmentAdding)="handleAppointmentAdding($event)"
        (onAppointmentUpdating)="handleAppointmentUpdating($event)"
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
        private fieldDataChangedHandler: ((fe: { dataField: string; value: unknown }) => void) | null = null;

        private applyRepeatState(
            form: DxSchedulerTypes.AppointmentFormOpeningEvent['form'],
            isRepeat: boolean,
        ): void {
            if (isRepeat) {
                const recurrenceRule = (form.option('formData') as Record<string, unknown>)?.['recurrenceRule'] as string;
                form.option('colCount', 2);
                form.option('formData.recurrenceRule', recurrenceRule || 'FREQ=DAILY');
                form.itemOption('recurrenceGroup', 'visible', true);
            } else {
                form.option('colCount', 1);
                form.option('formData.recurrenceRule', '');
                form.itemOption('recurrenceGroup', 'visible', false);
            }
        }

        handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
            const { form } = e;

            if (this.fieldDataChangedHandler) {
                form.off('fieldDataChanged', this.fieldDataChangedHandler);
            }
            this.fieldDataChangedHandler = (fe: { dataField: string; value: unknown }) => {
                if (fe.dataField === 'recurrenceRule') {
                    form.option('formData.repeat', !!fe.value);
                }
            };
            form.on('fieldDataChanged', this.fieldDataChangedHandler);

            const hasRecurrence = !!(e.appointmentData && e.appointmentData['recurrenceRule']);
            form.option('formData.repeat', hasRecurrence);
            this.applyRepeatState(form, hasRecurrence);

            form.itemOption('mainGroup.repeatGroup.customRepeatEditor', 'editorOptions', {
                onValueChanged: (ve: { value: boolean }) => {
                    this.applyRepeatState(form, ve.value);
                },
            });
        }

        handleAppointmentAdding(e: DxSchedulerTypes.AppointmentAddingEvent): void {
            delete (e.appointmentData as Record<string, unknown>)['repeat'];
        }

        handleAppointmentUpdating(e: DxSchedulerTypes.AppointmentUpdatingEvent): void {
            delete (e.newData as Record<string, unknown>)['repeat'];
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            @appointment-form-opening="handleAppointmentFormOpening"
            @appointment-adding="handleAppointmentAdding"
            @appointment-updating="handleAppointmentUpdating"
        />
    </template>

    <script setup lang="ts">
    import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler';

    let fieldDataChangedHandler: ((fe: { dataField: string; value: unknown }) => void) | null = null;

    function applyRepeatState(
        form: DxSchedulerTypes.AppointmentFormOpeningEvent['form'],
        isRepeat: boolean,
    ): void {
        if (isRepeat) {
            const recurrenceRule = (form.option('formData') as Record<string, unknown>)?.['recurrenceRule'] as string;
            form.option('colCount', 2);
            form.option('formData.recurrenceRule', recurrenceRule || 'FREQ=DAILY');
            form.itemOption('recurrenceGroup', 'visible', true);
        } else {
            form.option('colCount', 1);
            form.option('formData.recurrenceRule', '');
            form.itemOption('recurrenceGroup', 'visible', false);
        }
    }

    function handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent): void {
        const { form } = e;

        if (fieldDataChangedHandler) {
            form.off('fieldDataChanged', fieldDataChangedHandler);
        }
        fieldDataChangedHandler = (fe: { dataField: string; value: unknown }) => {
            if (fe.dataField === 'recurrenceRule') {
                form.option('formData.repeat', !!fe.value);
            }
        };
        form.on('fieldDataChanged', fieldDataChangedHandler);

        const hasRecurrence = !!(e.appointmentData && e.appointmentData['recurrenceRule']);
        form.option('formData.repeat', hasRecurrence);
        applyRepeatState(form, hasRecurrence);

        form.itemOption('mainGroup.repeatGroup.customRepeatEditor', 'editorOptions', {
            onValueChanged: (ve: { value: boolean }) => {
                applyRepeatState(form, ve.value);
            },
        });
    }

    function handleAppointmentAdding(e: DxSchedulerTypes.AppointmentAddingEvent): void {
        delete (e.appointmentData as Record<string, unknown>)['repeat'];
    }

    function handleAppointmentUpdating(e: DxSchedulerTypes.AppointmentUpdatingEvent): void {
        delete (e.newData as Record<string, unknown>)['repeat'];
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useRef, useCallback } from 'react';
    import { Scheduler, type SchedulerTypes } from 'devextreme-react/scheduler';

    function applyRepeatState(
        form: SchedulerTypes.AppointmentFormOpeningEvent['form'],
        isRepeat: boolean,
    ): void {
        if (isRepeat) {
            const recurrenceRule = (form.option('formData') as Record<string, unknown>)?.['recurrenceRule'] as string;
            form.option('colCount', 2);
            form.option('formData.recurrenceRule', recurrenceRule || 'FREQ=DAILY');
            form.itemOption('recurrenceGroup', 'visible', true);
        } else {
            form.option('colCount', 1);
            form.option('formData.recurrenceRule', '');
            form.itemOption('recurrenceGroup', 'visible', false);
        }
    }

    function App() {
        const fieldDataChangedHandlerRef = useRef<((fe: { dataField: string; value: unknown }) => void) | null>(null);

        const handleAppointmentFormOpening = useCallback(
            (e: SchedulerTypes.AppointmentFormOpeningEvent) => {
                const { form } = e;

                if (fieldDataChangedHandlerRef.current) {
                    form.off('fieldDataChanged', fieldDataChangedHandlerRef.current);
                }
                fieldDataChangedHandlerRef.current = (fe: { dataField: string; value: unknown }) => {
                    if (fe.dataField === 'recurrenceRule') {
                        form.option('formData.repeat', !!fe.value);
                    }
                };
                form.on('fieldDataChanged', fieldDataChangedHandlerRef.current);

                const hasRecurrence = !!(e.appointmentData && e.appointmentData['recurrenceRule']);
                form.option('formData.repeat', hasRecurrence);
                applyRepeatState(form, hasRecurrence);

                form.itemOption('mainGroup.repeatGroup.customRepeatEditor', 'editorOptions', {
                    onValueChanged: (ve: { value: boolean }) => {
                        applyRepeatState(form, ve.value);
                    },
                });
            },
            [],
        );

        const handleAppointmentAdding = useCallback(
            (e: SchedulerTypes.AppointmentAddingEvent) => {
                delete (e.appointmentData as Record<string, unknown>)['repeat'];
            },
            [],
        );

        const handleAppointmentUpdating = useCallback(
            (e: SchedulerTypes.AppointmentUpdatingEvent) => {
                delete (e.newData as Record<string, unknown>)['repeat'];
            },
            [],
        );

        return (
            <Scheduler ...
                onAppointmentFormOpening={handleAppointmentFormOpening}
                onAppointmentAdding={handleAppointmentAdding}
                onAppointmentUpdating={handleAppointmentUpdating}
            />
        );
    }

    export default App;

---

The `repeat` field is a transient UI-only value. Remove it from the appointment data in [onAppointmentAdding](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdding') and [onAppointmentUpdating](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdating') so it is never written to the data source.
