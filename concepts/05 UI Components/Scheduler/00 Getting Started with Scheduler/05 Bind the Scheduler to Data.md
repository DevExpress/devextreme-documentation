The Scheduler can load and update data from these data source types:

* [Local array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/')

* [Read-only data in JSON format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')

* [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')

* [Web API and MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%20and%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API_and_MongoDB/')

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

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Scheduler()
        .DataSource(d => d
            .Mvc().Controller("SchedulerData")
            .LoadAction("Get")
            .InsertAction("Insert")
            .UpdateAction("Update")
            .DeleteAction("Delete")
            .Key("ID")
        )
        .TextExpr("Title")
        .StartDateExpr("StartDate")
        .EndDateExpr("EndDate")
        .AllDayExpr("DayLong")
        .RecurrenceRuleExpr("Recurrence")
        .RecurrenceExceptionExpr("RecurrenceException")
    )

    <!-- tab: SchedulerDataController.cs -->
    using System.Linq;
    using System.Text.Json;
    using ASP_NET_Core.Models;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using Microsoft.AspNetCore.Mvc;

    namespace ASP_NET_Core.Controllers;

    public class SchedulerDataController : Controller {
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SchedulerData.Appointments, loadOptions);
        }

        [HttpPost]
        public IActionResult Insert(string values) {
            var appointment = new Appointment();
            PopulateAppointment(appointment, values);
            // ...
            SchedulerData.Appointments.Add(appointment);
            return Ok(appointment);
        }

        [HttpPut]
        public IActionResult Update(int key, string values) {
            var appointment = SchedulerData.Appointments.FirstOrDefault(e => e.ID == key);
            // ...
            PopulateAppointment(appointment, values);
            return Ok(appointment);
        }

        [HttpDelete]
        public IActionResult Delete(int key) {
            var appointment = SchedulerData.Appointments.FirstOrDefault(e => e.ID == key);
            // ...
            SchedulerData.Appointments.Remove(appointment);
            return NoContent();
        }

        private static void PopulateAppointment(Appointment appointment, string values) {
            using var document = JsonDocument.Parse(values);
            foreach (var property in document.RootElement.EnumerateObject()) {
                switch (property.Name) {
                    case nameof(Appointment.Title):
                        appointment.Title = property.Value.GetString();
                        break;
                    // ...
                }
            }
        }
    }

    <!-- tab: Appointment.cs -->
    namespace ASP_NET_Core.Models;
    public class Appointment {
        public int ID { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool? DayLong { get; set; }
        public string? Recurrence { get; set; }
        public string? RecurrenceException { get; set; }
    }

    <!-- tab: SchedulerData.cs -->
    namespace ASP_NET_Core.Models;
    static class SchedulerData {
        public static List<Appointment> Appointments = [
            new Appointment {
                ID = 1,
                Title = "Install New Database",
                StartDate = new DateTime(2021, 5, 23, 8, 45, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 23, 9, 45, 0, DateTimeKind.Utc),
            },
            new Appointment {
                ID = 2,
                Title = "Create New Online Marketing Strategy",
                StartDate = new DateTime(2021, 5, 24, 9, 0, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 24, 11, 0, 0, DateTimeKind.Utc),
            },
            new Appointment {
                ID = 3,
                Title = "Upgrade Personal Computers",
                StartDate = new DateTime(2021, 5, 25, 10, 15, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 25, 13, 30, 0, DateTimeKind.Utc),
            },
            new Appointment {
                ID = 4,
                Title = "Customer Workshop",
                StartDate = new DateTime(2021, 5, 26, 8, 0, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 26, 10, 0, 0, DateTimeKind.Utc),
                DayLong = true,
                Recurrence = "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10",
            },
            new Appointment {
                ID = 5,
                Title = "Prepare Development Plan",
                StartDate = new DateTime(2021, 5, 27, 8, 0, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 27, 10, 30, 0, DateTimeKind.Utc),
            },
            new Appointment {
                ID = 6,
                Title = "Testing",
                StartDate = new DateTime(2021, 5, 23, 9, 0, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 23, 10, 0, 0, DateTimeKind.Utc),
                Recurrence = "FREQ=WEEKLY;INTERVAL=2;COUNT=2",
            },
            new Appointment {
                ID = 7,
                Title = "Meeting of Instructors",
                StartDate = new DateTime(2021, 5, 24, 10, 0, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 24, 11, 15, 0, DateTimeKind.Utc),
                Recurrence = "FREQ=DAILY;BYDAY=WE;UNTIL=20211001",
            },
            new Appointment {
                ID = 8,
                Title = "Recruiting students",
                StartDate = new DateTime(2021, 5, 25, 8, 0, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 25, 9, 0, 0, DateTimeKind.Utc),
                Recurrence = "FREQ=YEARLY",
            },
            new Appointment {
                ID = 9,
                Title = "Monthly Planning",
                StartDate = new DateTime(2021, 5, 26, 9, 30, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 26, 10, 45, 0, DateTimeKind.Utc),
                Recurrence = "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1",
            },
            new Appointment {
                ID = 10,
                Title = "Open Day",
                StartDate = new DateTime(2021, 5, 27, 9, 30, 0, DateTimeKind.Utc),
                EndDate = new DateTime(2021, 5, 27, 19, 0, 0, DateTimeKind.Utc),
            },
        ];
    }

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