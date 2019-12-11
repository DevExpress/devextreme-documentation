The **Scheduler** is a widget that represents scheduled data and allows a user to manage it. The following image is an element map. You can click the desired element to navigate to its dedicated article.

<p style="display:inline-block"><img src="/Content/images/doc/18_1/UiWidgets/Scheduler_Overview.png" usemap="#image-map" alt="DevExtreme HTML5 JavaScript Scheduler"></p>

<map name="image-map">
    <area target="" alt="View Swither" title="View Swither" href="/Documentation/Guide/Widgets/Scheduler/View_Switcher/" coords="508,68,810,122" shape="rect">
    <area target="" alt="Resource Headers" title="Resource Headers" href="/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/" coords="163,124,811,162" shape="rect">
    <area target="" alt="All-Day Panel" title="All-Day Panel" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#All-Day_Appointments" coords="165,165,163,237,545,238,547,194,808,196,810,166" shape="poly">
    <area target="" alt="Appointment Tooltip" title="Appointment Tooltip" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/" coords="550,201,795,291" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="272,244,509,309" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="269,340,507,431" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="" shape="rect">
    <area target="" alt="Appointment" title="Appointment" href="/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/" coords="542,304,783,385" shape="rect">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="265,316,265,334,516,335,514,435,279,436,279,474,524,474,525,438,534,436,536,298,544,289,543,244,515,242,517,315" shape="poly">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="536,390,537,436,554,438,555,477,811,475,811,237,801,237,800,298,787,297,788,390,560,390" shape="poly">
    <area target="" alt="Current Time Indicator" title="Current Time Indicator" href="/Documentation/Guide/Widgets/Scheduler/Current_Time_Indication/" coords="527,442,550,442,548,478,808,479,809,492,548,493,547,516,525,515" shape="poly">
    <area target="" alt="Current Time Indicator" title="Current Time Indicator" href="/Documentation/Guide/Widgets/Scheduler/Current_Time_Indication/" coords="251,440,275,440,275,476,522,476,521,496,270,494,271,516,250,516" shape="poly">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="169,242,247,518" shape="rect">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="274,498,522,515" shape="rect">
    <area target="" alt="Timetable" title="Timetable" href="/Documentation/Guide/Widgets/Scheduler/Timetable/" coords="551,498,808,515" shape="rect">
</map>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/"
}

The following code adds the **Scheduler** widget to your page. The simplest configuration requires only a [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') to be specified. In addition, you can define a date that should be initially displayed in the date navigator using the [currentDate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate') option.

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

Each data source object represents an appointment to be scheduled and has a special structure. This structure should be similar to the [Default Appointment Template](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/'). Note that the fields listed below should be present in every appointment.

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

[tags]scheduler, overview, default template, textExpr, startDateExpr, endDateExpr
