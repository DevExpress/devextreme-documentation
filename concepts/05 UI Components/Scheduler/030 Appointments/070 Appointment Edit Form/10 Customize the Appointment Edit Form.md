To customize individual appointment edit form items, implement the [onAppointmentFormOpening](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentFormOpening.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentFormOpening') handler. The following code snippet uses **AppointmentFormOpeningEvent**.[form](/api-reference/10%20UI%20Components/dxScheduler/9%20Types/AppointmentFormOpeningEvent/form.md '/Documentation/ApiReference/UI_Components/dxScheduler/Types/AppointmentFormOpeningEvent/#form') to disable the `subjectEditor` input and enable [isRequired](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#isRequired') for the `descriptionEditor` item:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        onAppointmentFormOpening(e) {
            e.form.getEditor('subjectEditor').option('disabled', true);
            e.form.itemOption('mainGroup.descriptionGroup.descriptionEditor', 'isRequired', true);
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentFormOpening)="handleAppointmentFormOpening($event)"
    ></dx-scheduler>

    <!-- tab: app.component.ts -->
    import { type DxSchedulerTypes } from "devextreme-angular/ui/scheduler";
    // ...
    export class AppComponent {
        handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent) {
            e.form.getEditor('subjectEditor').option('disabled', true);
            e.form.itemOption('mainGroup.descriptionGroup.descriptionEditor', 'isRequired', true);
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
    import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler';

    function handleAppointmentFormOpening(e: DxSchedulerTypes.AppointmentFormOpeningEvent) {
        e.form.getEditor('subjectEditor').option('disabled', true);
        e.form.itemOption('mainGroup.descriptionGroup.descriptionEditor', 'isRequired', true);
    }

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, type SchedulerTypes } from 'devextreme-react/scheduler';

    function handleAppointmentFormOpening(e: SchedulerTypes.AppointmentFormOpeningEvent) {
        e.form.getEditor('subjectEditor').option('disabled', true);
        e.form.itemOption('mainGroup.descriptionGroup.descriptionEditor', 'isRequired', true);
    }

    function App() {
        return (
            <Scheduler ...
                onAppointmentFormOpening={handleAppointmentFormOpening}
            />
        );
    };

---

[note] Specify full item paths described in [Predefined Items](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/070%20Appointment%20Edit%20Form/15%20Predefined%20Items.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Edit_Form/#Predefined_Items') as the **id** parameter in [itemOption()](/api-reference/10%20UI%20Components/dxForm/3%20Methods/itemOption(id).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid').

To customize the appointment edit form further, specify the **editing**.[form](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/form '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/') and **editing**.[popup](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/popup.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#popup') configuration objects. These objects configure the appointment edit form's Popup and Form components. The following code snippet increases the width of the Popup and sets the "static" label mode for the Form:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        editing: {
            popup: {
                width: '50vw',
            },
            form: {
                labelMode: 'static',
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler>
        <dxo-scheduler-editing>
            <dxo-scheduler-popup
                width="50vw"
            ></dxo-scheduler-popup>
            <dxo-scheduler-form
                labelMode="static"
            ></dxo-scheduler-form>
        </dxo-scheduler-editing>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler>
            <DxEditing>
                <DxPopup width="50vw" />
                <DxForm labelMode="static" />
            </DxEditing>
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { DxScheduler, DxEditing, DxForm, DxPopup } from 'devextreme-vue/scheduler';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Editing, Form, Popup } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler>
                <Editing>
                    <Form width="50vw" />
                    <Popup labelMode="static" />
                </Editing>
            </Scheduler>
        );
    };

---
