---
type: String
---
---
##### shortDescription
Specifies exceptions for a the current recurring appointment.

---
To define an exception for a recurring appointment, specify the **recurrenceException** field in the appointment object. This field should be set using the [iCalendar RFC 2445](https://tools.ietf.org/html/rfc2445#section-4.8.5.2) specification.

[note]This option makes sense only if the appointment [recurrenceRule](/api-reference/10%20UI%20Widgets/dxScheduler/6%20Default%20Tooltip%20Template/recurrenceRule.md '{basewidgetpath}/Default_Tooltip_Template/#recurrenceRule') is specified.

For details on recurring appointments, refer to the [Appointment Types](/concepts/10%20UI%20Widgets/72%20Scheduler/30%20Appointment%20Types/020%20All%20Day%20Appointments.md '/Documentation/Guide/UI_Widgets/Scheduler/Appointment_Types/#All_Day_Appointments') article.