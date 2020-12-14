The **Scheduler** supports the following views:

* [Day](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Day_View) (default)

* [Week and WorkWeek](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views) (week is added by default)

* [Month](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View)

* [Timeline](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Timeline_Views)

* [Agenda](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View)

* [Customized views](/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/).

The default views are *"day"* and *"week"*. To use custom one, specify the [views[]](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) property. In this tutorial, we will assign *"day"*, *"week"*, *"month"*, and *"timelineWeek"* to it.

The default view is "day". You can change it in the [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView) property - we will set it to *"week"*.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({ 
            // ...
            views: ["day", "week", "month", "timelineWeek"],
            currentView: "week"
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [views]="['day', 'week', 'month', 'timelineWeek']"
        currentView="week">
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ...
            :views="views"
            current-view="week">
        </DxScheduler>
    </template> 

    <script> 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 

    import DxScheduler from 'devextreme-vue/scheduler'; 

    export default { 
        components: {
            DxScheduler
        },
        data() {
            return {
                // ...
                views: ["day", "week", "month", "timelineWeek"]
            };
        }
    } 
    </script> 

##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    const views = ["day", "week", "month", "timelineWeek"];

    function App() {
        return (
            <div className="App">
                <Scheduler ...
                    views={views}
                    defaultCurrentView="week">
                </Scheduler>
            </div>
        );
    }

    export default App;

---
