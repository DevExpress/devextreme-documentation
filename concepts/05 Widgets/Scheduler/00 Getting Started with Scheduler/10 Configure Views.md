The **Scheduler** supports the following views:

* [Day](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Day_View) (default)

* [Week and WorkWeek](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views) (week is added by default)

* [Month](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View)

* [Timeline](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Timeline_Views)

* [Agenda](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View)

* [Customized views](/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/).

The default views are *"day"* and *"week"*. To use custom ones, specify the [views[]](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) property. In this tutorial, we will use *"day"*, *"week"*, *"month"*, and *"timelineWeek"* views.

The default view is *"day"*. You can change it in the [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView) property - we will set it to *"week"*.

You can customize any view. For this, add an object to **views** and specify its [type](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type) and other properties. In this tutorial, we will set the first and last hours of the *"week"* view's time scale to 10 and 22. For this, we will use the [startDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#startDayHour) and [endDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#endDayHour) properties. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({ 
            // ...
            views: [
                "day",
                {
                    type: "week",
                    startDayHour: 10,
                    endDayHour: 22
                },
                "month", 
                "timelineWeek"
            ],
            currentView: "week"
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        currentView="week">
        <dxi-view type="day"></dxi-view>
        <dxi-view
            type="week"
            [startDayHour]="10"
            [endDayHour]="22">
        </dxi-view>
        <dxi-view type="month"></dxi-view>
        <dxi-view type="timelineWeek"></dxi-view>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ...
            current-view="week">
            <DxView type="day" />
            <DxView
                type="week"
                :start-day-hour="10"
                :end-day-hour="22"
            />
            <DxView type="month" />
            <DxView type="timelineWeek" />
        </DxScheduler>
    </template> 

    <script> 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 

    import { DxScheduler, DxView } from 'devextreme-vue/scheduler';

    import { appointments } from './data.js';

    export default { 
        components: {
            DxScheduler,
            DxView
        },
        data() {
            return {
                // ...
            };
        }
    } 
    </script> 

##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, View } from 'devextreme-react/scheduler';
    import { appointments } from './data.js';

    function App() {
        return (
            <div className="App">
                <Scheduler ...
                    defaultCurrentView="week">
                    <View type="day" />
                    <View
                        type="week"
                        startDayHour={10}
                        endDayHour={22}
                    />
                    <View type="month" />
                    <View type="timelineWeek" />
                </Scheduler>
            </div>
        );
    }

    export default App;

---
