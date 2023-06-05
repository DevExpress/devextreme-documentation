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
    const rule = new rrule.rrulestr(
        "DTSTART:20210805T050000Z\n"
        + "RRULE:FREQ=WEEKLY;UNTIL=20210905T045959Z;BYDAY=MO,TU,WE,TH,FR\n"
        + "EXDATE:20210825T050000Z,20210819T050000Z"
    );

    const occurences = rule.all();
    occurences.forEach(date => console.log(date));

#####See Also#####
- [recurrenceRuleExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceRuleExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceRuleExpr')
- [recurrenceEditMode](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceEditMode')
