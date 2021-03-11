The Scheduler UI component provides several types of views. This topic describes visual elements and their position for each view.

A user switches between views with the [View Switcher](/concepts/05%20UI%20Components/Scheduler/070%20View%20Switcher.md '/Documentation/Guide/UI_Components/Scheduler/View_Switcher/'). To specify which views are available in it, assign an array to the [views](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#views') property. To define what view is displayed after the first launch, set the [currentView](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentView.md '/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView'') property.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            views: ['day', 'week', 'agenda'],
            currentView: 'week'
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        [views]="['day', 'week', 'agenda']"
        currentView="week">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :views="['day', 'week', 'agenda']"
            current-view="week"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            // ...
            DxScheduler
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    views={['day', 'week', 'agenda']}
                    currentView="week"
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/BasicViews/"
}

[tags]scheduler, view, type, month, day, timeline views, timelineWeek, timelineWorkWeek, timelineMonth, workWeek, week, agenda, collapsed appointments, current view
