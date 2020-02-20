An all-day appointment is a non-recurring appointment that covers the whole [timetable's period](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/').

![Scheduler All-Day Appointment](/images/UiWidgets/Scheduler_AllDayAppointment.png)

An appointment can also be marked as all-day by assigning **true** to the defining object's [allDay](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/allDay.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay') field. The [startDate](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/startDate.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDate') field should also be present in this object; the [endDate](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/endDate.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate') is optional.

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
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
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
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
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

[note]The **Scheduler** ignores the **startDate**'s and **endDate**'s time component for all-day appointments.

To mark an appointment as all-day in the UI, toggle the *"All day"* switcher on the appointment details form. This form appears when a user [adds](/concepts/05%20Widgets/Scheduler/030%20Appointments/020%20Add%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Add_Appointments/') or [updates](/concepts/05%20Widgets/Scheduler/030%20Appointments/030%20Update%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/Update_Appointments/') an appointment. 

![Scheduler All Day Appointment Details](/images/UiWidgets/Scheduler_AllDayAppointment_Details.png)

All-day appointments are displayed in the All-day panel, which is visible by default. If you are not using such appointments, hide the All-day panel along with all-day appointments by assigning **false** to the [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel') option.
