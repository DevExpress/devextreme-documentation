A recurring appointment is an appointment that repeats at a certain interval. 

![Scheduler Recurring Appointment](/images/UiWidgets/Scheduler_RecurrentAppointment.png)

To make an appointment recurring in code, specify the [recurrenceRule](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceRule) field (it follows the <a href="https://tools.ietf.org/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification). You can exclude certain appointments from the created series. Specify the [recurrenceException](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceException) field to set their start date and time.

The appointment below occurs daily since February 20, 2021 except February 22 and 23, 2021:

    <!--JavaScript-->
    var recurringAppointment = [{
        text: 'Daily planning',
        startDate: new Date("2021-02-20T07:00:00.000Z"),
        endDate: new Date("2021-02-20T08:00:00.000Z"),
        recurrenceRule: "FREQ=DAILY",
        recurrenceException: "20210222T070000Z,20210223T070000Z"
    }];

[note] If your application works with time zones, we recommend that you specify time values in UTC - as done in example above (see the letter `Z` at the end of each string). 



If your appointment data objects already have fields that perform the functions of **recurrenceRule** and **recurrenceException**, specify their names in the [recurrenceRuleExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceRuleExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceRuleExpr') and [recurrenceExceptionExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceExceptionExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceExceptionExpr') options of the **Scheduler**:
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

The specified values will be saved in the **recurrenceRule** field. Note that although a recurring appointment is displayed as several appointments on the timetable, only a single appointment object is saved in the data source.

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
