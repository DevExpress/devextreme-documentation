---
id: dxScheduler.getOccurrences(startDate, endDate, appointments)
---
---
##### shortDescription
Gets an array of appointment occurrences that fall within a specified interval.

##### return: Array<Occurrence>
An array of appointment occurrences.

##### param(startDate): Date
The start date of the interval.

##### param(endDate): Date
The end date of the interval.

##### param(appointments): Array<dxSchedulerAppointment>
An array of appointments to filter.

---
An occurrence is an appointment instance that falls within the specified interval. Recurring appointments can generate multiple occurrences.

Use this method as follows:

    const appointments = [
        {
            text: 'Meeting',
            startDate: new Date(2026, 1, 1, 9, 0),
            endDate: new Date(2026, 1, 1, 10, 0),
            recurrenceRule: 'FREQ=DAILY;COUNT=5'
        },
        {
            text: 'Call',
            startDate: new Date(2026, 1, 3, 10, 30),
            endDate: new Date(2026, 1, 3, 11, 0),
        }
    ];

    // Returns occurrences of the "Meeting" appointment for February 2-4, 2026 and the "Call" appointment for February 3, 2026:
    const occurrences = scheduler.getOccurrences(new Date(2026, 1, 2), new Date(2026, 1, 5), appointments); 

Use the returned occurrences to implement custom logic for detecting overlapping appointments.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ResolveTimeConflicts/"
}
