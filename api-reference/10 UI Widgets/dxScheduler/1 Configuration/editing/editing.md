---
id: dxScheduler.Options.editing
type: Boolean | Object
default: true
---
---
##### shortDescription
Specifies which editing operations an end-user can perform on appointments.

---
Editing a recurring appointment series has specificities related to when a user [edits a recurring appointment instance](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceEditMode').

If a user updates the instance, two actions are performed on the data objects:

- The series' data object is updated.         
The **Scheduler** updates the field specified by [recurrenceExceptionExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceExceptionExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceExceptionExpr'), thus adding the edited instance to exceptions. The [onAppointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdating') and [onAppointmentUpdated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdated') event handlers are executed.

- A new data object is created.       
This object contains the edited instance's data. The [onAppointmentAdding](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdding') and [onAppointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdded') event handlers are executed.

If a user deletes the instance, the **Scheduler** adds it to exceptions by updating the field that **recurrenceExceptionExpr** specifies. Because this is an update, the **onAppointmentUpdating** and **onAppointmentUpdated** event handlers are executed instead of [onAppointmentDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleting') and [onAppointmentDeleted](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleted.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleted').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Editing/"
}
