The **Scheduler** is a widget that represents scheduled data and allows a user to manage it. The following image is an element map. You can click the desired element to navigate to its dedicated article.

<p style="display:inline-block"><img src="/Content/images/doc/19_2/UiWidgets/Scheduler_Overview.png" usemap="#image-map" alt="DevExtreme HTML5 JavaScript Scheduler"></p>

<map name="image-map">
    <area target="" alt="View Switcher" title="View Switcher" href="/Documentation/Guide/Widgets/Scheduler/View_Switcher/" coords="480,122,769,70" shape="rect">
    <area target="" alt="Resource Headers" title="Resource Headers" href="/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/" coords="131,161,769,123" shape="rect">
    <area target="" alt="All-Day Panel" title="All-Day Panel" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#All-Day_Appointments" coords="234,167,234,236,507,238,509,198,769,200,770,189,493,189,494,164,377,165" shape="poly">
    <area target="" alt="Appointment Tooltip" title="Appointment Tooltip" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/" coords="507,291,758,202" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="236,432,477,340" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="237,311,477,239" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="501,384,741,308" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="499,184,767,162" shape="rect">
    <area target="" alt="Current Time Indicator" title="Current Time Indicator" href="/Documentation/Guide/Widgets/Scheduler/Current_Time_Indication/" coords="226,442,237,443,237,474,249,478,770,478,770,493,240,490,238,499,237,516,227,517,226,477" shape="poly">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="132,166,231,162,232,313,481,315,483,241,504,242,503,290,761,294,771,365,746,362,747,306,502,302,499,390,628,393,629,475,240,470,240,442,481,439,483,338,233,335,222,427,223,514,133,514" shape="poly">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="244,495,243,514,769,518,767,498,713,501" shape="poly">
    <area target="" alt="Drop-Down List" title="Drop-Down List" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Cell_Overflow_Indicator/" coords="635,464,849,402" shape="rect">
    <area target="" alt="Cell Overflow Indicator" title="Cell Overflow Indicator" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Cell_Overflow_Indicator/" coords="745,385,769,366" shape="rect">
</map>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/"
}

The following code adds the **Scheduler** widget to your page. The simplest configuration requires only a [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/') to be specified. In addition, you can define a date that should be initially displayed in the date navigator using the [currentDate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate') option.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "Website Re-Design Plan",
                startDate: new Date(2016, 4, 25, 9, 30),
                endDate: new Date(2016, 4, 25, 11, 30)
            }, {
                text: "Book Flights to San Fran for Sales Trip",
                startDate: new Date(2016, 4, 25, 12, 0),
                endDate: new Date(2016, 4, 25, 13, 0)
            }, 
            // ...
            ],
            currentDate: new Date(2016, 4, 25)
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        [currentDate]="currentDate">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2016, 4, 25, 1, 30),
            endDate: new Date(2016, 4, 25, 3, 30)
        }, {
            text: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2016, 4, 25, 9, 0),
            endDate: new Date(2016, 4, 25, 10, 0)
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 25);
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

Each data source object represents an appointment to be scheduled and has a special structure. This structure should be similar to that described in the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/') option. The fields listed below should be present in every appointment.

- **text**  
    The subject of an appointment.

- **startDate**  
    The start date of an appointment (includes time if needed).

- **endDate**  
    The end date of an appointment (includes time if needed).

If your appointments have a different structure, specify: 

- **textExpr**  
    The data field that provides subjects for appointments.

- **startDateExpr**  
    The data field that provides start dates for appointments.
    
- **endDateExpr**  
    The data field that provides end dates for appointments.

<!---->

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{ 
                subject: 'Meet with a customer', 
                from: new Date(2016, 4, 10, 11, 0), 
                to: new Date(2016, 4, 10, 13, 0) 
            }, { 
                subject: 'Discuss results', 
                from: new Date(2016, 5, 11, 12, 0), 
                to: new Date(2016, 4, 11, 13, 0) 
            }, 
            // ...
            ],
            textExpr: "subject",
            startDateExpr: "from",
            endDateExpr: "to"
        });
    });    

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        textExpr="subject"
        startDateExpr="from"
        endDateExpr="to"
        [currentDate]="currentDate">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        appointments = [{ 
            subject: 'Meet with a customer', 
            from: new Date(2016, 4, 25, 1, 0), 
            to: new Date(2016, 4, 25, 3, 0) 
        }, { 
            subject: 'Discuss results', 
            from: new Date(2016, 5, 25, 9, 0), 
            to: new Date(2016, 4, 25, 10, 0) 
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 25);
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

#####See Also#####
- [Scheduler - Data Binding](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding '/Documentation/Guide/Widgets/Scheduler/Data_Binding/')
- [Scheduler - Views](/concepts/05%20Widgets/Scheduler/060%20Views '/Documentation/Guide/Widgets/Scheduler/Views/')
- [Scheduler - Keyboard Support](/concepts/05%20Widgets/Scheduler/080%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Scheduler/Keyboard_Support/')

[tags]scheduler, overview, textExpr, startDateExpr, endDateExpr
