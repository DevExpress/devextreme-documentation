A recurring appointment is an appointment that repeats after a specified period of time. 

![Scheduler Recurring Appointment](/images/UiWidgets/Scheduler_RecurrentAppointment.png)

An object defining a recurring appointment should contain the [recurrenceRule](/api-reference/_hidden/dxSchedulerAppointment/recurrenceRule.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#recurrenceRule') field that follows the <a href="https://tools.ietf.org/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification.

    <!--JavaScript-->
    var recurringAppointment = [{
        text: "Meeting",
        startDate: new Date(2016, 2, 3, 8, 0),
        endDate: new Date(2016, 2, 3, 9, 0),
        recurrenceRule: "FREQ=DAILY"
    }];

If you want to exclude appointments from a recurrence, specify exceptions to the current recurring appointment using the [recurrenceException](/api-reference/_hidden/dxSchedulerAppointment/recurrenceException.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#recurrenceException') option.

    <!--JavaScript-->var recurringAppointment = [{
        text: "Meeting",
        startDate: new Date(2016, 4, 25, 10, 0),
        endDate: new Date(2016, 4, 25, 11, 00),
        recurrenceRule: "FREQ=DAILY",
        // This code excludes the 26-th and 28-th of May from the recurrence
        recurrenceException: "20160526T100000, 20160528T100000"
    }];

[note]A time component of each item of the **recurrenceException** field must be the same as the time specified in the **startDate** field.

If your appointments contain other data fields instead of **recurrenceRule** and **recurrenceException**, assign their names to the [recurrenceRuleExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceRuleExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceRuleExpr') and [recurrenceExceptionExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceExceptionExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceExceptionExpr') options of the **Scheduler** instead. 

---

##### jQuery

    <!--JavaScript-->var recurringAppointments = [{ 
        // ...
        rule: "FREQ=DAILY",
        exception: "20160526T090000, 20160528T090000"
    }];

    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: recurringAppointments,
            recurrenceRuleExpr: "rule",
            recurrenceExceptionExpr: "exception"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="recurringAppointments"
        recurrenceRuleExpr="rule"
        recurrenceExceptionExpr="exception">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        recurringAppointments = [{ 
            // ...
            rule: "FREQ=DAILY",
            exception: "20160526T090000, 20160528T090000"
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

In the UI, to mark an appointment as recurring, toggle the *"Repeat"* switcher on the appointment details form. Then, a set of new fields will appear. 

![Scheduler Recurring Appointment Details](/images/UiWidgets/Scheduler_RecurrentAppointment_Details.png)

These fields will be saved as the **recurrenceRule** field of an appointment object. Note that although a recurring appointment is displayed as several appointments on the timetable, only a single appointment object is saved in the data source.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments/"
}

#####See Also#####
- [Scheduler - Add Appointments](/concepts/05%20Widgets/Scheduler/030%20Appointments/020%20Add%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Add_Appointments/')
- [Scheduler - Update Appointments](/concepts/05%20Widgets/Scheduler/030%20Appointments/030%20Update%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Update_Appointments/')
- [Scheduler - Delete Appointments](/concepts/05%20Widgets/Scheduler/030%20Appointments/040%20Delete%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Delete_Appointments/')
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')
