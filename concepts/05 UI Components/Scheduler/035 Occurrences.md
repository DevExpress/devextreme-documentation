**Occurrence** is an [appointment](/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Types/) instance that falls within a specified time interval. A non-recurring appointment maps to one occurrence. A recurring appointment can generate multiple occurrences.

[note] Occurrences are produced for the requested interval only.

To get occurrences, use the [getOccurrences(startDate, endDate, appointments)](/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#getOccurrencesstartDate_endDate_appointments) method. Specify the interval boundaries with `startDate` and `endDate` and pass the appointments array as the third argument.

Apply occurrences in the following scenarios:

### Detect Overlapping Appointments

Use this to prevent appointment time conflicts when users create or edit appointments. The function checks if a candidate interval intersects with any occurrence in the selected day.

	function hasOverlap(scheduler, candidate, allAppointments) {
		const dayStart = new Date(candidate.startDate);
		dayStart.setHours(0, 0, 0, 0);
		const dayEnd = new Date(dayStart);
		dayEnd.setDate(dayEnd.getDate() + 1);

		const occurrences = scheduler.getOccurrences(dayStart, dayEnd, allAppointments);
		return occurrences.some((item) =>
			item.startDate < candidate.endDate && candidate.startDate < item.endDate
		);
	}

### Prepare Exports for a Visible Interval

Use this approach when you export only the visible appointments from the Scheduler. The mapped array converts occurrences to a flat structure suitable for CSV, Excel, or API payloads.

	const visibleStart = new Date(2026, 3, 1);
	const visibleEnd = new Date(2026, 3, 2);
	const appointments = scheduler.option("dataSource");
	const occurrences = scheduler.getOccurrences(visibleStart, visibleEnd, appointments);

	const exportRows = occurrences.map((item) => ({
		Subject: item.appointmentData.text,
		Start: item.startDate.toISOString(),
		End: item.endDate.toISOString()
	}));

##### See Also #####

- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')
- [getOccurrences(startDate, endDate, appointments)](/api-reference/10%20UI%20Components/dxScheduler/3%20Methods/getOccurrences(startDate_endDate_appointments).md '/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#getOccurrencesstartDate_endDate_appointments')
- [Occurrence](/api-reference/10%20UI%20Components/dxScheduler/9%20Types/Occurrence/Occurrence.md '/Documentation/ApiReference/UI_Components/dxScheduler/Types/Occurrence/')
