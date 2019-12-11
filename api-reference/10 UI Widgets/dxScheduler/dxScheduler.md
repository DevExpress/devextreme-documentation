---
module: ui/scheduler
export: default
inherits: ..\Widget\Widget.md,..\DataHelperMixin\DataHelperMixin.md
---
---
##### widgettree
dataSource: []

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Scheduler** is a widget that represents scheduled data and allows a user to manage and edit it.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#scheduler").dxScheduler({
            dataSource: [{
                text: "Meeting customers",
                startDate: new Date(2015, 4, 10, 11, 0),
                endDate: new Date(2015, 4, 10, 13, 0)
            }, {
                text: "Summing up the results",
                startDate: new Date(2015, 4, 11, 12, 0),
                endDate: new Date(2015, 4, 11, 13, 0)
            },
            // ...
            ],
            currentDate: new Date(2015, 4, 10),
            startDayHour: 8,
            endDayHour: 19
        });
    });

    <!--HTML-->
    <div id="scheduler">

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="new Date(2015, 4, 10)"
        [startDayHour]="8"
        [endDayHour]="19">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        schedulerData = [{
                text: "Meeting customers",
                startDate: new Date(2015, 4, 10, 11, 0),
                endDate: new Date(2015, 4, 10, 13, 0)
            }, {
                text: "Summing up the results",
                startDate: new Date(2015, 4, 11, 12, 0),
                endDate: new Date(2015, 4, 11, 13, 0)
            },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-scheduler="{
        dataSource: [{
            text: 'Meeting customers',
            startDate: new Date(2015, 4, 10, 11, 0),
            endDate: new Date(2015, 4, 10, 13, 0)
        }, {
            text: 'Summing up the results',
            startDate: new Date(2015, 4, 11, 12, 0),
            endDate: new Date(2015, 4, 11, 13, 0)
        },
        // ...
        ],
        currentDate: new Date(2015, 4, 10),
        startDayHour: 8,
        endDayHour: 19
    }">
    </div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxScheduler: {
        dataSource: [{
            text: 'Meeting customers',
            startDate: new Date(2015, 4, 10, 11, 0),
            endDate: new Date(2015, 4, 10, 13, 0)
        }, {
            text: 'Summing up the results',
            startDate: new Date(2015, 4, 11, 12, 0),
            endDate: new Date(2015, 4, 11, 13, 0)
        },
        // ...
        ],
        currentDate: new Date(2015, 4, 10),
        startDayHour: 8,
        endDayHour: 19
    }">
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Scheduler()
        .ID("scheduler")
        .DataSource(new object[] {
            new {
                text = "Meeting customers",
                startDate = new DateTime(2015, 5, 10, 11, 0, 0),
                endDate = new DateTime(2015, 5, 10, 13, 0, 0)
            },
            new {
                text = "Summing up the results",
                startDate = new DateTime(2015, 5, 11, 12, 0, 0),
                endDate = new DateTime(2015, 5, 11, 13, 0, 0)
            },
            // ...
        })
        .CurrentDate(new DateTime(2015, 5, 10))
        .StartDayHour(8)
        .EndDayHour(19)
    )

    <!--Razor VB-->@(Html.DevExtreme().Scheduler() _
        .ID("scheduler") _
        .DataSource({
            New With {
                .text = "Meeting customers",
                .startDate = new DateTime(2015, 5, 10, 11, 0, 0),
                .endDate = new DateTime(2015, 5, 10, 13, 0, 0)
            },
            New With {
                .text = "Summing up the results",
                .startDate = new DateTime(2015, 5, 11, 12, 0, 0),
                .endDate = new DateTime(2015, 5, 11, 13, 0, 0)
            }
        }) _
        .CurrentDate(New DateTime(2015, 5, 10)) _
        .StartDayHour(8) _
        .EndDayHour(19)
    )

---

 

#####See Also#####
- [Scheduler - Overview](/concepts/05%20Widgets/Scheduler/010%20Overview.md '/Documentation/Guide/Widgets/Scheduler/Overview/')
- [Scheduler - Data Binding](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding '/Documentation/Guide/Widgets/Scheduler/Data_Binding/')
- [Scheduler - Appointments](/concepts/05%20Widgets/Scheduler/030%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/')
- [Scheduler - Resources](/concepts/05%20Widgets/Scheduler/040%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/')
- [Scheduler - Views](/concepts/05%20Widgets/Scheduler/060%20Views '/Documentation/Guide/Widgets/Scheduler/Views/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/"
}
<a href="http://www.youtube.com/watch?v=evabB5-rZZ8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=52" class="button orange small fix-width-155" target="_blank">Watch Video</a>