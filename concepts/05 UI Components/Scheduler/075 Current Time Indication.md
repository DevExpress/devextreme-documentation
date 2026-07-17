The Scheduler displays a specific indicator that highlights the current time on a view by default. The indicator is available only on views containing the time scale.

![Current Time Indicator](/images/UiWidgets/Scheduler_Current_Time_Indicator.png)

Use the [showCurrentTimeIndicator](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/showCurrentTimeIndicator.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#showCurrentTimeIndicator') property to control the indicator's visibility.

---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            showCurrentTimeIndicator: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        [showCurrentTimeIndicator]="true">
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
        <DxScheduler :show-current-time-indicator="true"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    export default function App() {
        return (
            <Scheduler showCurrentTimeIndicator={true}/>
        );
    }

---

Additionally, you can apply shading to cover the timetable up to the current time by assigning **true** to the [shadeUntilCurrentTime](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/shadeUntilCurrentTime.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#shadeUntilCurrentTime') property.

---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({ 
            // ...
            showCurrentTimeIndicator: true,
            shadeUntilCurrentTime: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        [showCurrentTimeIndicator]="true"
        [shadeUntilCurrentTime]="true">
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
            :show-current-time-indicator="true"
            :shade-until-current-time="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    export default function App() {
        return (
            <Scheduler
                showCurrentTimeIndicator={true}
                shadeUntilCurrentTime={true}
            />
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CurrentTimeIndicator/"
}

#####See Also#####
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')
