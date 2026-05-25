An **Occurrence** is an [appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/015%20Appointment%20Types '/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Types/') instance that falls within a specified time interval. A non-recurring appointment maps to one occurrence. A recurring appointment can generate multiple occurrences.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ResolveTimeConflicts/"
}

To obtain an occurrence list, call the [getOccurrences(startDate, endDate, appointments)](/api-reference/10%20UI%20Components/dxScheduler/3%20Methods/getOccurrences(startDate_endDate_appointments).md '/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#getOccurrencesstartDate_endDate_appointments') method. Pass `startDate`, `endDate`, and the appointment array.

You may need this method in the following scenarios:

### Detect Overlapping Appointments

Use the following function to prevent appointment time conflicts when users create or edit appointments. The function checks if a candidate interval intersects with any occurrence in the selected day.

    function hasOverlap(scheduler, candidate) {
        const dayStart = new Date(candidate.startDate);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(dayStart);
        dayEnd.setDate(dayEnd.getDate() + 1);

        const allAppointments = scheduler.getDataSource().items();

        const occurrences = scheduler.getOccurrences(dayStart, dayEnd, allAppointments);
        return occurrences.some((item) =>
            item.startDate < candidate.endDate && candidate.startDate < item.endDate
        );
    }

### Export Appointment Occurrences within the Specified Date Interval

Use the following code snippet when you need to export events that fall within the specified date/time interval. The mapped array converts occurrences to a flat structure suitable for CSV, Excel, or API payloads.

    const visibleStart = new Date(2026, 3, 1);
    const visibleEnd = new Date(2026, 3, 2);
    const appointments = scheduler.getDataSource().items();
    const occurrences = scheduler.getOccurrences(visibleStart, visibleEnd, appointments);

    const exportRows = occurrences.map((item) => ({
        Subject: item.appointmentData.text,
        Start: item.startDate.toISOString(),
        End: item.endDate.toISOString()
    }));

#####See Also#####

- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')
- [getOccurrences(startDate, endDate, appointments)](/api-reference/10%20UI%20Components/dxScheduler/3%20Methods/getOccurrences(startDate_endDate_appointments).md '/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#getOccurrencesstartDate_endDate_appointments')
- [Occurrence](/api-reference/10%20UI%20Components/dxScheduler/9%20Types/Occurrence '/Documentation/ApiReference/UI_Components/dxScheduler/Types/Occurrence/')
