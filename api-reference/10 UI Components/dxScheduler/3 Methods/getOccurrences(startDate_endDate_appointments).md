---
id: dxScheduler.getOccurrences(startDate, endDate, appointments)
---
---
##### shortDescription
Gets an array of appointment occurrences that fall within a specified time interval.

##### return: Array<Occurrence>
An array of appointment occurrences.

##### param(startDate): Date
The start date of the time interval.

##### param(endDate): Date
The end date of the time interval.

##### param(appointments): Array<dxSchedulerAppointment>
An array of appointments to filter.

---
An occurrence is an appointment instance that falls within the specified time interval. If an appointment has a recurrence rule, it can generate multiple occurrences.

Use this method to check if appointments are overlapping.