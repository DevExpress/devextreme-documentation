---
default: 'dialog'
acceptValues: 'dialog' | 'series' | 'occurrence'
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

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SchedulerRecurrenceEditMode` enum. This enum accepts the following values: `Dialog`, `Series` and `Occurrence`.