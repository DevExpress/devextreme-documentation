The Scheduler can load and update data from these data source types:

* [Local array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/')

* [Read-only data in JSON format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')

* [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')

* [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/')

* [Custom data sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')

Use the [dataSource](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource') property to specify a data source. In this tutorial, we use a local array.

Once you assign the data source, you need to map field values to appointment attributes. If data objects include fields that match the [predefined structure](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerAppointment '/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/'), the Scheduler recognizes them automatically and displays appointments without further configuration. To map other fields, use **...Expr** properties. In this tutorial, the [startDate](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerAppointment/startDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#startDate') and [endDate](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerAppointment/endDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#endDate') fields are recognized automatically, whereas other field names are specified in the [textExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/textExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#textExpr'), [allDayExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/allDayExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#allDayExpr'), and [recurrenceRuleExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceRuleExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceRuleExpr') properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            dataSource: appointments,
            textExpr: "title",
            allDayExpr: "dayLong",
            recurrenceRuleExpr: "recurrence"
        });
    });

    <!-- tab: data.js -->
    const appointments = [
        {
            title: "Install New Database",
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            title: "Create New Online Marketing Strategy",
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            title: "Upgrade Personal Computers",
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            title: "Customer Workshop",
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            dayLong: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            title: "Prepare Development Plan",
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            title: "Testing",
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            title: "Meeting of Instructors",
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            title: "Recruiting students",
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            title: "Monthly Planning",
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            title: "Open Day",
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="data.js"></script>
        </head>
        <!-- ... -->
    </html>

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler
        [dataSource]="appointments"
        textExpr="title"
        allDayExpr="dayLong"
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
        title: string;
        startDate: Date;
        endDate: Date;
        dayLong?: boolean;
        recurrence?: string;
    }

    const appointments: Appointment[] = [
        {
            title: "Install New Database",
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            title: "Create New Online Marketing Strategy",
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            title: "Upgrade Personal Computers",
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            title: "Customer Workshop",
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            dayLong: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            title: "Prepare Development Plan",
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            title: "Testing",
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            title: "Meeting of Instructors",
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            title: "Recruiting students",
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            title: "Monthly Planning",
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            title: "Open Day",
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T19:00:00.000Z"),
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
            text-expr="title"
            all-day-expr="dayLong"
            recurrence-rule-expr="recurrence">
        </DxScheduler>
    </template> 

    <script>
    // ...
    import { appointments } from './data.js';

    export default {
        // ...
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
            title: "Install New Database",
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            title: "Create New Online Marketing Strategy",
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            title: "Upgrade Personal Computers",
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            title: "Customer Workshop",
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            dayLong: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            title: "Prepare Development Plan",
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            title: "Testing",
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            title: "Meeting of Instructors",
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            title: "Recruiting students",
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            title: "Monthly Planning",
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            title: "Open Day",
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];

##### React 

    <!-- tab: App.js -->
    // ...
    import { appointments } from './data.js';

    function App() {
        return (
            <Scheduler
                dataSource={appointments}
                textExpr="title"
                allDayExpr="dayLong"
                recurrenceRuleExpr="recurrence">
            </Scheduler>
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const appointments = [
        {
            title: "Install New Database",
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            title: "Create New Online Marketing Strategy",
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            title: "Upgrade Personal Computers",
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            title: "Customer Workshop",
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            dayLong: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            title: "Prepare Development Plan",
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            title: "Testing",
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            title: "Meeting of Instructors",
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            title: "Recruiting students",
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            title: "Monthly Planning",
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            title: "Open Day",
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];

---

Run the code and ensure that the Scheduler properly displays all appointments.

[tags] data binding