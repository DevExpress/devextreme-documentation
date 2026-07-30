#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/", name: "View Types" }
#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/", name: "Customize Individual Views" }

DevExtreme Scheduler ships with the following view types:

* [Day](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/010%20Day%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Day_View')
* [Week and Work week](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/020%20Week%20and%20WorkWeek%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views')
* [Month](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/030%20Month%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Month_View')
* [Timeline Day, Month, Week, and Work week](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/040%20Timeline%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Timeline_Views')
* [Agenda](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Agenda_View')

---

##### jQuery

Use the [views[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/) array to define and customize Scheduler views. Add views as configuration objects to specify view options. To use default options, add [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type') values as strings to the **views[]** array.

##### Angular

Specify the [views[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/) array to define and customize Scheduler views. Specify each view's [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type') value.

##### Vue

Specify the [views[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/) array to define and customize Scheduler views. Specify each view's [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type') value.

##### React

Specify the [views[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/) array to define and customize Scheduler views. Specify each view's [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type') value.

---

This example specifies the following views: Day, Week, and Month. Day and Week views use custom [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#startDayHour') and [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#endDayHour') values. The Month view uses the default configuration.

You can also specify the initial Scheduler view using [currentView](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView'). This example initializes the component in the Week view:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({ 
            // ...
            views: [{
                type: "day",
                startDayHour: 10,
                endDayHour: 22
            }, {
                type: "week",
                startDayHour: 10,
                endDayHour: 22
            },
            "month"
            ],
            currentView: "week"
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Scheduler()
        .Views(v => {
            v.Add()
                .Type(SchedulerViewType.Day)
                .StartDayHour(10)
                .EndDayHour(22);
            v.Add()
                .Type(SchedulerViewType.Week)
                .StartDayHour(10)
                .EndDayHour(22);
            v.Add()
                .Type(SchedulerViewType.Month);
        })
        .CurrentView(SchedulerViewType.Week)
        // ...
    )

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler
        currentView="week">
        <dxi-scheduler-view
            type="day"
            [startDayHour]="10"
            [endDayHour]="22">
        </dxi-scheduler-view>
        <dxi-scheduler-view
            type="week"
            [startDayHour]="10"
            [endDayHour]="22">
        </dxi-scheduler-view>
        <dxi-scheduler-view type="month"></dxi-scheduler-view>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler
            current-view="week">
            <DxView
                type="day"
                :start-day-hour="10"
                :end-day-hour="22"
            />
            <DxView
                type="week"
                :start-day-hour="10"
                :end-day-hour="22"
            />
            <DxView type="month" />
        </DxScheduler>
    </template> 

    <script setup lang="ts">
    import { DxScheduler, DxView } from 'devextreme-vue/scheduler';

    </script> 

##### React 

    <!-- tab: App.tsx -->
    import { Scheduler, View } from 'devextreme-react/scheduler';

    export default function App() {
        return (
            <Scheduler
                defaultCurrentView="week">
                <View
                    type="day"
                    startDayHour={10}
                    endDayHour={22}
                />
                <View
                    type="week"
                    startDayHour={10}
                    endDayHour={22}
                />
                <View type="month" />
            </Scheduler>
        );
    }

---
