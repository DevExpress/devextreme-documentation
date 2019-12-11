---
type: String
---
---
##### shortDescription
Specifies the subject of the appointment.

---
The subject will present the appointment in a timetable.

Note that if the appointment width is less than 40 pixels or its height is less than 15 pixels, the appointment subject, [end](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template/endDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#endDate') and [start](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template/startDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#startDate') dates are hidden. If you want to disable this behavior, override the ".dx-scheduler-appointment-empty .dx-scheduler-appointment-content" CSS.

    <!--CSS-->
    .dx-scheduler-appointment-empty .dx-scheduler-appointment-content {
        display: block;
    }