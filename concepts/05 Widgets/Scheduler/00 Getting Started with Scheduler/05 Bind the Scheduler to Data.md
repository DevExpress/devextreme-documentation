The **Scheduler** can load and update data from these data source types:

* [Local array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/)

* [Read-Only Data in JSON Format](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)

* [OData](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)

* [Web API, PHP, MongoDB](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/)

* [Custom data sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/).

Use the [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) option to specify a data source. In this tutorial, we will use a local array. 

[note]The widget supports three types of appointments: one-time, all-day, and recurring. The used data source contains them all. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            // ...
            dataSource: appointments
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
            text: "Install New Database",
            priorityId: 1,
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            text: "Create New Online Marketing Strategy",
            priorityId: 1,
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            text: "Upgrade Personal Computers",
            priorityId: 1,
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            text: "Customer Workshop",
            priorityId: 1,
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            allDay: true,
            recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            text: "Prepare Development Plan",
            priorityId: 1,
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            text: "Testing",
            priorityId: 2,
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrenceRule: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            text: "Meeting of Instructors",
            priorityId: 2,
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            text: "Recruiting students",
            priorityId: 2,
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrenceRule: "FREQ=YEARLY",
        }, {
            text: "Monthly Planning",
            priorityId: 2,
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            text: "Open Day",
            priorityId: 2,
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T11:00:00.000Z"),
        }
    ];


##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [dataSource]="appointments">
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
        // ...
        appointments: Appointment[];

        constructor(service: AppService) {
            this.appointments = service.getAppointments();
        }
    } 

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Appointment {
        text: string;
        priorityId: number;
        startDate: Date;
        endDate: Date;
        allDay?: boolean;
        recurrenceRule?: string;
    }

    let appointments: Appointment[] = [
        {
            text: "Install New Database",
            priorityId: 1,
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            text: "Create New Online Marketing Strategy",
            priorityId: 1,
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            text: "Upgrade Personal Computers",
            priorityId: 1,
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            text: "Customer Workshop",
            priorityId: 1,
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            allDay: true,
            recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            text: "Prepare Development Plan",
            priorityId: 1,
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            text: "Testing",
            priorityId: 2,
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrenceRule: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            text: "Meeting of Instructors",
            priorityId: 2,
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            text: "Recruiting students",
            priorityId: 2,
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrenceRule: "FREQ=YEARLY",
        }, {
            text: "Monthly Planning",
            priorityId: 2,
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            text: "Open Day",
            priorityId: 2,
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T11:00:00.000Z"),
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
        <DxScheduler ...
            :data-source="appointments">
        </DxScheduler>
    </template> 

    <script>

    import { DxScheduler } from 'devextreme-vue/scheduler';
    import { appointments } from './data.js';

    export default {
        name: 'Vue: Getting started with Scheduler',
        components: {
            DxScheduler
        },
        data() {
            return {
                // ...
                appointments: appointments
            };
        }
    }
    </script>

    <!-- tab: data.js -->
    export const appointments = [
        {
            text: "Install New Database",
            priorityId: 1,
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            text: "Create New Online Marketing Strategy",
            priorityId: 1,
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            text: "Upgrade Personal Computers",
            priorityId: 1,
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            text: "Customer Workshop",
            priorityId: 1,
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            allDay: true,
            recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            text: "Prepare Development Plan",
            priorityId: 1,
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            text: "Testing",
            priorityId: 2,
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrenceRule: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            text: "Meeting of Instructors",
            priorityId: 2,
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            text: "Recruiting students",
            priorityId: 2,
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrenceRule: "FREQ=YEARLY",
        }, {
            text: "Monthly Planning",
            priorityId: 2,
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            text: "Open Day",
            priorityId: 2,
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T11:00:00.000Z"),
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
                <Scheduler ...
                    dataSource={appointments}>
                </Scheduler>
            </div>
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const appointments = [
        {
            text: "Install New Database",
            priorityId: 1,
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            text: "Create New Online Marketing Strategy",
            priorityId: 1,
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            text: "Upgrade Personal Computers",
            priorityId: 1,
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            text: "Customer Workshop",
            priorityId: 1,
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            allDay: true,
            recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            text: "Prepare Development Plan",
            priorityId: 1,
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            text: "Testing",
            priorityId: 2,
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrenceRule: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            text: "Meeting of Instructors",
            priorityId: 2,
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            text: "Recruiting students",
            priorityId: 2,
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrenceRule: "FREQ=YEARLY",
        }, {
            text: "Monthly Planning",
            priorityId: 2,
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            text: "Open Day",
            priorityId: 2,
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T11:00:00.000Z"),
        }
    ];

---

Run the code and ensure that the widget properly displays all appointments.