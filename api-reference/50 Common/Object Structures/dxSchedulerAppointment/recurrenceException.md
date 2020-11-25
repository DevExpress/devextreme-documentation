---
id: dxSchedulerAppointment.recurrenceException
type: String
---
---
##### shortDescription
Specifies the start date and time of one or more appointments to delete from a series. Requires [recurrenceRule](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceRule) to be set.

---

In the example below, the appointment takes place daily except Fabruary 22 and 23, 2021. Note that **recurrenceException** sets time in UTC as well as [startDate](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDate) and [endDate](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate):

    {
        text: 'Daily planning',
        startDate: new Date('2021-02-20T07:00:00.000Z'),
        endDate: new Date('2021-02-20T08:00:00.000Z'),
        recurrenceRule: 'FREQ=DIALY',
        recurrenceException: '20210222T070000Z,20210223T070000Z'
    }

For details on recurring appointments, refer to the [Appointment Types](/concepts/05%20Widgets/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments') article.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments/"
}