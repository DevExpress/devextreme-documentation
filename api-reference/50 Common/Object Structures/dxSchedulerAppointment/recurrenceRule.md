---
id: dxSchedulerAppointment.recurrenceRule
type: String
---
---
##### shortDescription
Specifies a recurrence rule for generating recurring appointments in the scheduler.

---
To define a recurring appointment, specify the **recurrenceRule** field in the appointment object. This field should be set using the <a href="http://tools.ietf.org/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification.

For details on recurring appointments, refer to the [Appointment Types](/concepts/05%20Widgets/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments') article.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments/"
}