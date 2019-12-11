---
default: 'dialog'
acceptValues: 'dialog' | 'occurrence' | 'series'
type: String
---
---
##### shortDescription
Specifies the edit mode for recurring appointments.

---
This option accepts the following values.

- 'dialog'  
 Displays a dialog that suggests to a user to choose between editing the entire series or only the current appointment.

- 'series'  
 Enables an end-user to edit only the entire appointment series.

- 'occurrence'  
 Enables an end-user to edit only the current appointment.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SchedulerRecurrenceEditMode` enum. This enum accepts the following values: `Dialog`, `Series` and `Occurrence`.