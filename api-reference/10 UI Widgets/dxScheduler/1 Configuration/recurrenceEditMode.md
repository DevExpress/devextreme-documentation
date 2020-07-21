---
id: dxScheduler.Options.recurrenceEditMode
acceptValues: 'dialog' | 'occurrence' | 'series'
type: String
default: 'dialog'
---
---
##### shortDescription
Specifies the edit mode for recurring appointments.

---
This option accepts the following values.

- "dialog"  
 Displays a dialog that suggests to a user to choose between editing the entire series or only the current appointment.

- "series"  
 Enables an end-user to edit only the entire appointment series.

- "occurrence"  
 Enables an end-user to edit only the current appointment.

If a user edits the current appointment, two actions are performed on the data objects:

- The series' data object is updated.         
The **Scheduler** updates the field specified by [recurrenceExceptionExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceExceptionExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceExceptionExpr'), thus adding the edited instance to exceptions. The [onAppointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdating') and [onAppointmentUpdated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdated') event handlers are executed.

- A new data object is created.       
This object contains the edited instance's data. The [onAppointmentAdding](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdding') and [onAppointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdded') event handlers are executed.

If a user edits the whole series, only the series data object is updated.

When a single appointment from a series is deleted, the **Scheduler** adds it to exceptions by updating the field that **recurrenceExceptionExpr** specifies. Because this is an update, the **onAppointmentUpdating** and **onAppointmentUpdated** event handlers are executed instead of [onAppointmentDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleting') and [onAppointmentDeleted](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleted.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleted').

When a whole series is deleted, the corresponding object is removed.

#include common-ref-enum with {
    enum: "`SchedulerRecurrenceEditMode`",
    values: "`Dialog`, `Series`, and `Occurrence`"
}