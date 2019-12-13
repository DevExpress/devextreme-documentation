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

#include common-ref-enum with {
    enum: "`SchedulerRecurrenceEditMode`",
    values: "`Dialog`, `Series`, and `Occurrence`"
}