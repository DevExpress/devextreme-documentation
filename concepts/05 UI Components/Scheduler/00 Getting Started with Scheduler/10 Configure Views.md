The Scheduler supports the following view types:

* [Day](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/010%20Day%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Day_View')

* [Week and Work week](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/020%20Week%20and%20WorkWeek%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views')

* [Month](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/030%20Month%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Month_View')

* [Timeline Day, Month, Week, and Work week](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/040%20Timeline%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Timeline_Views')

* [Agenda](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Agenda_View')

Use the [views[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/) array to configure views. This array can contain strings ([view types](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type')) and objects (view configurations). Use a string if the default view configuration suits you. Otherwise, declare an object that configures the view and specify the [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type') and [other properties](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/') within it. In the code below, the **views[]** array contains the Day, Week, and Month views. We specify the [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#startDayHour') and [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#endDayHour') properties for Day and Week; Month uses its default configuration.

To specify the view displayed initially, set the [currentView](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView') property. In the following code, the initial view is Week.

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

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        currentView="week">
        <dxi-view
            type="day"
            [startDayHour]="10"
            [endDayHour]="22">
        </dxi-view>
        <dxi-view
            type="week"
            [startDayHour]="10"
            [endDayHour]="22">
        </dxi-view>
        <dxi-view type="month"></dxi-view>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ...
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

    <script> 
    // ...
    import { DxScheduler, DxView } from 'devextreme-vue/scheduler';

    export default { 
        components: {
            DxScheduler,
            DxView
        },
        // ...
    } 
    </script> 

##### React 

    <!-- tab: App.js -->
    // ...
    import { Scheduler, View } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler ...
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

    export default App;

---
