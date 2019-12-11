---
id: dxSchedulerAppointmentTooltipTemplate.recurrenceException
type: String
---
---
##### shortDescription
Specifies exceptions for a the current recurring appointment.

---
To define an exception for a recurring appointment, specify the **recurrenceException** field in the appointment object. This field should be set using the <a href="http://tools.ietf.org/html/rfc2445#section-4.8.5.2" target="_blank">iCalendar RFC 2445</a> specification.

[note]This option makes sense only if the appointment [recurrenceRule](/api-reference/10%20UI%20Widgets/dxScheduler/6%20Default%20Tooltip%20Template/recurrenceRule.md '{basewidgetpath}/Default_Tooltip_Template/#recurrenceRule') is specified.

For details on recurring appointments, refer to the [Appointment Types](/concepts/05%20Widgets/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments') article.