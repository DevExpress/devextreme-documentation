---
id: dxScheduler.Options.onAppointmentFormOpening
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before Scheduler displays the appointment edit form.

##### param(e): ui/scheduler:AppointmentFormOpeningEvent
Information about the event.

##### field(e.appointmentData): dxSchedulerAppointment
Data of the appointment edit form's target appointment.

##### field(e.cancel): Boolean
Allows you to cancel opening the appointment edit form.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.form): dxForm
Instance of the appointment edit form's Form component.

##### field(e.popup): dxPopup
Instance of the appointment edit form's Popup component.

---

To customize individual appointment edit form items, implement this handler. The following code snippet uses **AppointmentFormOpeningEvent**.[form](/Documentation/ApiReference/UI_Components/dxScheduler/Types/AppointmentFormOpeningEvent/#form) to disable the `subjectEditor` input and enable [isRequired](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#isRequired) for the `descriptionEditor` item:

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

[note] Specify full item paths described in [Appointment Edit Form - Predefined Items](/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Edit_Form/#Predefined_Items) as the **id** parameter in [itemOption()](/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid).

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-create-custom-editing-form"
}
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Templates/"
}

#####See Also#####
- [Scheduler - Customize the Appointment Edit Form](/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Edit_Form/#Customize_the_Appointment_Edit_Form)
- [Form - Change Properties at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Properties%20at%20Runtime/05%20Form%20Properties.md '/Documentation/Guide/UI_Components/Form/Change_Properties_at_Runtime/Form_Properties/')
