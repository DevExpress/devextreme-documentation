A view defines the time interval for which to display appointments. The following view types are supported:

* [Day](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Day_View) (default);

* [Week and WorkWeek](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views) (week is added by default);

* [Month](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View);

* [Timeline](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Timeline_Views);

* [Agenda](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View);

* [Custom](/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/).

Use the views option to specify the following views: "day", "week", "month", and "timelineWeek". We will display the "week" view by default. For this, set the currentView option to *"week"*.  

Additionally, use the startDayHour option to set 10 am as the first hour of the grid's scale.

---
##### jQuery

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({ 
            // ...
            views: ["day", "week", "month", "timelineWeek"]
        });
    });

##### Angular 

    <!-- tab: app.component.html --> 
    <dx-scheduler ...
        [views]='["day", "week", "month", "timelineWeek"]'
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue --> 
    <template> 
        <DxScheduler ...
            :views="views"
        </DxScheduler>
    </template> 

    <script> 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 

    import DxScheduler from 'devextreme-vue/scheduler'; 

    export default { 
        components: {
            DxScheduler,
        },
        data() {
            return {
                // ...
                views: ["day", "week", "month", "timelineWeek"],
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
                    views={views}>
                </Scheduler>
            </div>
        );
    }

---
