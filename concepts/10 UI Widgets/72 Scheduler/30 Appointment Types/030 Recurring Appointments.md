A recurring appointment occurs many times in the same time interval. An object defining a recurring appointment sets the start date and time of the recurrence series and specifies a rule according to which a series is repeated.

    <!--JavaScript-->var appointments = [
        {
            text: "Meeting",
            startDate: new Date(2015, 2, 3, 8, 0),
            endDate: new Date(2015, 2, 3, 9, 0),
            recurrenceRule: "FREQ=DAILY;INTERVAL=2"
        },
        {
            text: "Report",
            startDate: new Date(2015, 2, 5, 10, 45),
            endDate: new Date(2015, 2, 5, 11, 15),
            recurrenceRule: "FREQ=WEEKLY;BYDAY=WE,SU"
        }
    ];

A recurring rule is set using the [iCalendar RFC 2445](https://tools.ietf.org/html/rfc2445#section-4.3.10) specification.

![Scheduler All Day Appointment](/images/UiWidgets/Scheduler_RecurrentAppointment.png)

In a UI, a recurring appointment is defined using a set of fields, all of which are saved to the **recurrenceRule** field of the appointment's data source object.

![Scheduler All Day Appointment Details](/images/UiWidgets/Scheduler_RecurrentAppointment_Details.png)

[note]A recurring appointment is displayed as a number of appointments in a timetable, while a single appointment object is saved to the data source.

If you are editing or deleting a recurring appointment using a UI, the Scheduler prompts you to edit or delete only the active appointment or the entire series.

If you want to exclude some appointments from a recurrence, specify exceptions to the current recurring appointment using the [recurrenceException](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template/recurrenceException.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#recurrenceException') option.

    <!--JavaScript-->var appointments = [
        {
            text: "Meeting",
            startDate: new Date(2015, 4, 25, 9, 0),
            endDate: new Date(2015, 4, 25, 11, 30),
            recurrenceRule: "FREQ=DAILY",
            recurrenceException: "20150526T090000, 20150528T090000"
        },
        {
            text: "Report",
            startDate: new Date(2015, 4, 5, 10, 45),
            endDate: new Date(2015, 4, 5, 11, 15),
            recurrenceRule: "FREQ=WEEKLY;BYDAY=WE,SU"
        }
    ];

[note]The [recurrenceException](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template/recurrenceException.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#recurrenceException') option enables you to specify an array of appointments to exclude. Each array item specifies an appointment by its start date and time. The start time of each excluded appointment should strictly match the start time of the initial appointment.
