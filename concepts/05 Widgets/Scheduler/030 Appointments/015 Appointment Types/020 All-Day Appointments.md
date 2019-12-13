An all-day appointment is a non-recurring appointment that covers the whole [timetable's period](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/').

![Scheduler All-Day Appointment](/images/UiWidgets/Scheduler_AllDayAppointment.png)

An appointment can also be marked as all-day by assigning **true** to the defining object's [allDay](/api-reference/_hidden/dxSchedulerAppointment/allDay.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#allDay') field. The [startDate](/api-reference/_hidden/dxSchedulerAppointment/startDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#startDate') field should also be present in this object; the [endDate](/api-reference/_hidden/dxSchedulerAppointment/endDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#endDate') is optional.

    <!--JavaScript-->
    var allDayAppointment = [{
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
        allDay: true
    }];

If appointments in your data source omit the **allDay** field but have another field instead, assign its name to the [allDayExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/allDayExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#allDayExpr') option.

---
##### jQuery

    <!--JavaScript-->
    var allDayAppointments = [{
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
        long: true
    }];

    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: allDayAppointments,
            allDayExpr: "long"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="allDayAppointments"
        allDayExpr="long">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        allDayAppointments = [{
            text: "Fix bugs",
            startDate: new Date(2016, 4, 10),
            long: true
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

[note]The **Scheduler** ignores the **startDate**'s and **endDate**'s time component for all-day appointments.

To mark an appointment as all-day in the UI, toggle the *"All day"* switcher on the appointment details form. This form appears when a user [adds](/concepts/05%20Widgets/Scheduler/030%20Appointments/020%20Add%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Add_Appointments/') or [updates](/concepts/05%20Widgets/Scheduler/030%20Appointments/030%20Update%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Update_Appointments/') an appointment. 

![Scheduler All Day Appointment Details](/images/UiWidgets/Scheduler_AllDayAppointment_Details.png)

All-day appointments are displayed in the All-day panel, which is visible by default. If you are not using such appointments, hide the All-day panel along with all-day appointments by assigning **false** to the [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel') option.
