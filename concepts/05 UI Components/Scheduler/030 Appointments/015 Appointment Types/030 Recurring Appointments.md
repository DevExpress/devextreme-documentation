A recurring appointment repeats at a specified interval. 

![Scheduler Recurring Appointment](/images/UiWidgets/Scheduler_RecurrentAppointment.png)

To make an appointment recurring, specify the [recurrenceRule](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/recurrenceRule.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceRule') field with a value according to the <a href="https://tools.ietf.org/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification. This creates an appointment series. You can exclude specific appointments from it if you set their [recurrenceException](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/recurrenceException.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceException') field. For example, the appointment below occurs daily since February 20, 2021, except February 22 and 23:


    <!--JavaScript-->
    var recurringAppointment = [{
        text: 'Daily planning',
        startDate: new Date("2021-02-20T07:00:00.000Z"),
        endDate: new Date("2021-02-20T08:00:00.000Z"),
        recurrenceRule: "FREQ=DAILY",
        recurrenceException: "20210222T070000Z,20210223T070000Z"
    }];

If your appointment data objects contain different fields that perform the functions of **recurrenceRule** and **recurrenceException**, specify their names in the Scheduler's [recurrenceRuleExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceRuleExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceRuleExpr') and [recurrenceExceptionExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceExceptionExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceExceptionExpr') properties:

---
##### jQuery

    <!--JavaScript-->
    var recurringAppointments = [{ 
        // ...
        rule: "FREQ=DAILY",
        exception: "20210222T070000,20210223T070000"
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
            exception: "20210222T070000,20210223T070000"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="recurringAppointments"
            recurrence-rule-expr="rule"
            recurrence-exception-expr="exception"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    const recurringAppointments = [{ 
        // ...
        rule: "FREQ=DAILY",
        exception: "20210222T070000,20210223T070000"
    }];

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                recurringAppointments
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';
    
    const recurringAppointments = [{ 
        // ...
        rule: "FREQ=DAILY",
        exception: "20210222T070000,20210223T070000"
    }];

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={recurringAppointments}
                    recurrenceRuleExpr="rule"
                    recurrenceExceptionExpr="exception"
                />
            );
        }
    }
    export default App;
    
---

In the UI, to mark an appointment as recurring, toggle the *"Repeat"* switcher on the appointment details form. Then, a set of new fields will appear. 

![Scheduler Recurring Appointment Details](/images/UiWidgets/Scheduler_RecurrentAppointment_Details.png)

The Scheduler control saves the specified values in the appointment's **recurrenceRule** field. Note that although the control displays a recurring appointment as several appointments on the timetable, it only saves a single appointment object to the data source.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments/"
}

#####See Also#####
- [Scheduler - Add Appointments](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/020%20Add%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/Add_Appointments/')
- [Scheduler - Update Appointments](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/030%20Update%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/Update_Appointments/')
- [Scheduler - Delete Appointments](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/040%20Delete%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/Delete_Appointments/')
- [Scheduler - Customize Appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')
