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
Allows you to cancel appointment edit form opening.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.form): dxForm
Instance of the appointment edit form's Form component.

##### field(e.popup): dxPopup
Instance of the appointment edit form's Popup component.

---



// TBD??
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-create-custom-editing-form"
}

#####See Also#####
- TBA
- [Form - Change Properties at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Properties%20at%20Runtime/05%20Form%20Properties.md '/Documentation/Guide/UI_Components/Form/Change_Properties_at_Runtime/Form_Properties/')
