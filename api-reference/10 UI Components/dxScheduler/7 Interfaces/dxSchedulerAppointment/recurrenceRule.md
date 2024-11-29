---
id: dxSchedulerAppointment.recurrenceRule
type: String
---
---
##### shortDescription
Specifies a recurrence rule based on which the Scheduler generates an appointment series.

---
The **recurrenceRule** value should contain an `RRULE` pattern as per the <a href="https://datatracker.ietf.org/doc/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments/"
}

If you need to obtain individual dates from an appointment series, use a 3rd-party library. In the following example, the <a href="https://github.com/jakubroztocil/rrule#rrulejs" target="_blank">rrule</a> library is used:

    <!-- tab: JavaScript -->
    import { formatDate } from "devextreme/localization";

    const data = [{
        text: 'Watercolor Landscape',
        startDate: new Date('2020-11-01T17:30:00.000Z'),
        endDate: new Date('2020-11-01T19:00:00.000Z'),
        recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=6',
        recurrenceException: '20201109T173000Z'
    }];

    function logAppointmentOccurrences(appointmentData) {
        const startDateStr = formatDate(appointmentData.startDate, "yyyyMMddTHHmmssZ");
        const rule = new rrule.rrulestr(
            `DTSTART:${startDateStr}\n`
            + `RRULE:${appointmentData.recurrenceRule}\n`
            + `EXDATE:${appointmentData.recurrenceException}`
        );
        const occurrences = rule.all();
        occurrences.forEach(date => console.log(date));
    }

#####See Also#####
- [recurrenceRuleExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceRuleExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceRuleExpr')
- [recurrenceEditMode](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceEditMode')
