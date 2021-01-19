An all-day appointment occupies the entire day.

![Scheduler All-Day Appointment](/images/UiWidgets/Scheduler_AllDayAppointment.png)

To create an all-day appointment, set its [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) field to **true**. An all-day appointment must have a [startDate](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDate) field. You can also set an [endDate](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate) field if the appointment occupies more than one day. Time values in these fields are ignored.

    <!--JavaScript-->
    var allDayAppointment = [{
        text: "Concert",
        startDate: new Date("2021-07-27T16:00:00.000Z"),
        allDay: true
    }];


If your appointment data objects contain a different field that performs the functions of **allDay**, specify its name in the **Scheduler**'s [allDayExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#allDayExpr) property.

---
##### jQuery

    <!--JavaScript-->
    var allDayAppointments = [{
        text: "Concert",
        startDate: new Date("2021-07-27T16:00:00.000Z"),
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
            text: "Concert",
            startDate: new Date("2021-07-27T16:00:00.000Z"),
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="allDayAppointments"
            all-day-expr="long"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    const allDayAppointments = [{
        text: "Concert",
        startDate: new Date("2021-07-27T16:00:00.000Z"),
        long: true
    }];

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                allDayAppointments
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
    
    const dataSource = [{
        text: "Concert",
        startDate: new Date("2021-07-27T16:00:00.000Z"),
        long: true
    }];

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                    allDayExpr="long"
                />
            );
        }
    }
    export default App;

---

To mark an appointment as all-day in the UI, toggle the *"All day"* switcher on the appointment details form. This form appears when a user [adds](/concepts/05%20Widgets/Scheduler/030%20Appointments/020%20Add%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Add_Appointments/') or [updates](/concepts/05%20Widgets/Scheduler/030%20Appointments/030%20Update%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Update_Appointments/') an appointment. 

![Scheduler All Day Appointment Details](/images/UiWidgets/Scheduler_AllDayAppointment_Details.png)

All-day appointments are displayed in the All-day panel. If you do not use such appointments, disable the [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#showAllDayPanel') property to hide the All-day panel.