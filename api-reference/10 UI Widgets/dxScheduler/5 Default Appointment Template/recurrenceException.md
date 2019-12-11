---
type: String
---
---
##### shortDescription
Specifies exceptions for the current recurring appointment.

---
To define an exception for a recurring appointment, specify the **recurrenceException** field in the appointment object. This field enables you to specify several appointments to exclude. Each appointment is specified by the start date and time. The start time of each excluded appointment should strictly match the start time of the initial appointment.

[note]This option makes sense only if the appointment [recurrenceRule](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template/recurrenceRule.md '{basewidgetpath}/Default_Appointment_Template/#recurrenceRule') is specified.

For details on recurring appointments, refer to the [Appointment Types](/concepts/10%20UI%20Widgets/72%20Scheduler/30%20Appointment%20Types/020%20All%20Day%20Appointments.md '/Documentation/Guide/UI_Widgets/Scheduler/Appointment_Types/#All_Day_Appointments') article.