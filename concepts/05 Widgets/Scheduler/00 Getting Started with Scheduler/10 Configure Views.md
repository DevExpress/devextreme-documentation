The **Scheduler** supports the following view types:

* [Day](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Day_View)

* [Week and Work week](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views)

* [Month](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View)

* [Timeline Day, Month, Week, and Work week](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Timeline_Views)

* [Agenda](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View)

Use the [views[]](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) array to configure views. This array can contain strings ([view types](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type)) and objects (view configurations). Use a string if the default view configuration suits you. Otherwise, declare an object that configures the view and specify the [type](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type) and [other properties](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) in it. In the code below, the **views[]** array contains the Day, Week, and Month views. We specify the [startDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#startDayHour) and [endDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#endDayHour) properties for Day and Week; Month uses its default configuration.

To specify the view displayed initially, set the [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView) property. In the following code, the initial view is Week.

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
