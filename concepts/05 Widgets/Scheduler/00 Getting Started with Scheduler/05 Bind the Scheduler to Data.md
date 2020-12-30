The **Scheduler** can load and update data from these data source types:

* [Local array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/)

* [Read-only data in JSON format](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)

* [OData](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)

* [Web API, PHP, MongoDB](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/)

* [Custom data sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

Use the [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) property to specify a data source. In this tutorial, we will use a local array. Its objects have custom field names that's why we will specify them in the following **Scheduler**'s properties: [textExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#textExpr), [startDateExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDateExpr), [endDateExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDateExpr), [allDayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#allDayExpr), and [recurrenceRuleExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceRuleExpr).

The **Scheduler** supports one-time, all-day, and recurring [appointment types](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/). The data source below contains them all.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            dataSource: appointments,
            textExpr: "appointmentText",
            startDateExpr: "start",
            endDateExpr: "end",
            allDayExpr: "wholeDay",
            recurrenceRuleExpr: "recurrence",
            currentView: "week"
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="data.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="scheduler"></div>
        </body>
    </html>

    <!-- tab: data.js -->
    const appointments = [
        {
            appointmentText: "Install New Database",
            priorityId: 1,
            start: new Date("2021-05-23T08:45:00.000Z"),
            end: new Date("2021-05-23T09:45:00.000Z")
        }, {
            appointmentText: "Create New Online Marketing Strategy",
            priorityId: 1,
            start: new Date("2021-05-24T09:00:00.000Z"),
            end: new Date("2021-05-24T11:00:00.000Z")
        }, {
            appointmentText: "Upgrade Personal Computers",
            priorityId: 1,
            start: new Date("2021-05-25T10:15:00.000Z"),
            end: new Date("2021-05-25T13:30:00.000Z")
        }, {
            appointmentText: "Customer Workshop",
            priorityId: 1,
            start: new Date("2021-05-26T08:00:00.000Z"),
            end: new Date("2021-05-26T10:00:00.000Z"),
            wholeDay: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            appointmentText: "Prepare Development Plan",
            priorityId: 1,
            start: new Date("2021-05-27T08:00:00.000Z"),
            end: new Date("2021-05-27T10:30:00.000Z")
        }, {
            appointmentText: "Testing",
            priorityId: 2,
            start: new Date("2021-05-23T09:00:00.000Z"),
            end: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            appointmentText: "Meeting of Instructors",
            priorityId: 2,
            start: new Date("2021-05-24T10:00:00.000Z"),
            end: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            appointmentText: "Recruiting students",
            priorityId: 2,
            start: new Date("2021-05-25T08:00:00.000Z"),
            end: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            appointmentText: "Monthly Planning",
            priorityId: 2,
            start: new Date("2021-05-26T09:30:00.000Z"),
            end: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            appointmentText: "Open Day",
            priorityId: 2,
            start: new Date("2021-05-27T09:30:00.000Z"),
            end: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];


##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler
        [dataSource]="appointments"
        textExpr="appointmentText"
        startDateExpr="start"
        endDateExpr="end"
        allDayExpr="wholeDay"
        recurrenceRuleExpr="recurrence">
    </dx-scheduler> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core'; 
    import { Appointment, AppService } from './app.service';

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'],
        providers: [AppService]
    }) 
    export class AppComponent { 
        appointments: Appointment[];

        constructor(service: AppService) {
            this.appointments = service.getAppointments();
        }
    } 

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Appointment {
        appointmentText: string;
        priorityId: number;
        start: Date;
        end: Date;
        wholeDay?: boolean;
        recurrence?: string;
    }

    let appointments: Appointment[] = [
        {
            appointmentText: "Install New Database",
            priorityId: 1,
            start: new Date("2021-05-23T08:45:00.000Z"),
            end: new Date("2021-05-23T09:45:00.000Z")
        }, {
            appointmentText: "Create New Online Marketing Strategy",
            priorityId: 1,
            start: new Date("2021-05-24T09:00:00.000Z"),
            end: new Date("2021-05-24T11:00:00.000Z")
        }, {
            appointmentText: "Upgrade Personal Computers",
            priorityId: 1,
            start: new Date("2021-05-25T10:15:00.000Z"),
            end: new Date("2021-05-25T13:30:00.000Z")
        }, {
            appointmentText: "Customer Workshop",
            priorityId: 1,
            start: new Date("2021-05-26T08:00:00.000Z"),
            end: new Date("2021-05-26T10:00:00.000Z"),
            wholeDay: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            appointmentText: "Prepare Development Plan",
            priorityId: 1,
            start: new Date("2021-05-27T08:00:00.000Z"),
            end: new Date("2021-05-27T10:30:00.000Z")
        }, {
            appointmentText: "Testing",
            priorityId: 2,
            start: new Date("2021-05-23T09:00:00.000Z"),
            end: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            appointmentText: "Meeting of Instructors",
            priorityId: 2,
            start: new Date("2021-05-24T10:00:00.000Z"),
            end: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            appointmentText: "Recruiting students",
            priorityId: 2,
            start: new Date("2021-05-25T08:00:00.000Z"),
            end: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            appointmentText: "Monthly Planning",
            priorityId: 2,
            start: new Date("2021-05-26T09:30:00.000Z"),
            end: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            appointmentText: "Open Day",
            priorityId: 2,
            start: new Date("2021-05-27T09:30:00.000Z"),
            end: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class AppService {
        getAppointments(): Appointment[] {
            return appointments;
        }
    }

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler
            :data-source="appointments"
            text-expr="appointmentText"
            startDateExpr="start"
            endDateExpr="end"
            all-day-expr="wholeDay"
            recurrence-rule-expr="recurrence">
        </DxScheduler>
    </template> 

    <script>
    import { DxScheduler } from 'devextreme-vue/scheduler';
    import { appointments } from './data.js';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                appointments: appointments
            };
        }
    }
    </script>

    <!-- tab: data.js -->
    export const appointments = [
        {
            appointmentText: "Install New Database",
            priorityId: 1,
            start: new Date("2021-05-23T08:45:00.000Z"),
            end: new Date("2021-05-23T09:45:00.000Z")
        }, {
            appointmentText: "Create New Online Marketing Strategy",
            priorityId: 1,
            start: new Date("2021-05-24T09:00:00.000Z"),
            end: new Date("2021-05-24T11:00:00.000Z")
        }, {
            appointmentText: "Upgrade Personal Computers",
            priorityId: 1,
            start: new Date("2021-05-25T10:15:00.000Z"),
            end: new Date("2021-05-25T13:30:00.000Z")
        }, {
            appointmentText: "Customer Workshop",
            priorityId: 1,
            start: new Date("2021-05-26T08:00:00.000Z"),
            end: new Date("2021-05-26T10:00:00.000Z"),
            wholeDay: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            appointmentText: "Prepare Development Plan",
            priorityId: 1,
            start: new Date("2021-05-27T08:00:00.000Z"),
            end: new Date("2021-05-27T10:30:00.000Z")
        }, {
            appointmentText: "Testing",
            priorityId: 2,
            start: new Date("2021-05-23T09:00:00.000Z"),
            end: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            appointmentText: "Meeting of Instructors",
            priorityId: 2,
            start: new Date("2021-05-24T10:00:00.000Z"),
            end: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            appointmentText: "Recruiting students",
            priorityId: 2,
            start: new Date("2021-05-25T08:00:00.000Z"),
            end: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            appointmentText: "Monthly Planning",
            priorityId: 2,
            start: new Date("2021-05-26T09:30:00.000Z"),
            end: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            appointmentText: "Open Day",
            priorityId: 2,
            start: new Date("2021-05-27T09:30:00.000Z"),
            end: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];

##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';
    import { appointments } from './data.js';

    function App() {
        return (
            <div className="App">
                <Scheduler
                    dataSource={appointments}
                    textExpr="appointmentText"
                    startDateExpr="start"
                    endDateExpr="end"
                    allDayExpr="wholeDay"
                    recurrenceRuleExpr="recurrence">
                </Scheduler>
            </div>
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const appointments = [
        {
            appointmentText: "Install New Database",
            priorityId: 1,
            start: new Date("2021-05-23T08:45:00.000Z"),
            end: new Date("2021-05-23T09:45:00.000Z")
        }, {
            appointmentText: "Create New Online Marketing Strategy",
            priorityId: 1,
            start: new Date("2021-05-24T09:00:00.000Z"),
            end: new Date("2021-05-24T11:00:00.000Z")
        }, {
            appointmentText: "Upgrade Personal Computers",
            priorityId: 1,
            start: new Date("2021-05-25T10:15:00.000Z"),
            end: new Date("2021-05-25T13:30:00.000Z")
        }, {
            appointmentText: "Customer Workshop",
            priorityId: 1,
            start: new Date("2021-05-26T08:00:00.000Z"),
            end: new Date("2021-05-26T10:00:00.000Z"),
            wholeDay: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            appointmentText: "Prepare Development Plan",
            priorityId: 1,
            start: new Date("2021-05-27T08:00:00.000Z"),
            end: new Date("2021-05-27T10:30:00.000Z")
        }, {
            appointmentText: "Testing",
            priorityId: 2,
            start: new Date("2021-05-23T09:00:00.000Z"),
            end: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            appointmentText: "Meeting of Instructors",
            priorityId: 2,
            start: new Date("2021-05-24T10:00:00.000Z"),
            end: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            appointmentText: "Recruiting students",
            priorityId: 2,
            start: new Date("2021-05-25T08:00:00.000Z"),
            end: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            appointmentText: "Monthly Planning",
            priorityId: 2,
            start: new Date("2021-05-26T09:30:00.000Z"),
            end: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            appointmentText: "Open Day",
            priorityId: 2,
            start: new Date("2021-05-27T09:30:00.000Z"),
            end: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];

---

Run the code and ensure that the **Scheduler** properly displays all appointments.
