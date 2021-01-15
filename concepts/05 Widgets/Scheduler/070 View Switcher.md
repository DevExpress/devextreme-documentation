View switcher is a scheduler element used for quick switching between views.

![View Switcher](/images/UiWidgets/Scheduler_View_Switcher.png)

To specify what views are available within the switcher, use the [views](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views '/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/'') option.

---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            views: ['day', 'week', 'agenda']
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        [views]="['day', 'week', 'agenda']">
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
            :views="views"
        />
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
                views: ['day', 'week', 'agenda']
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';
    
    const views = ["day", "week", "agenda"];

    class App extends React.Component {
        render() {
            return (
                <Scheduler views={views} />
            );
        }
    }
    export default App;

---

On mobile devices, the view switcher is displayed as a drop-down menu. 

![Drop-down View Switcher](/images/UiWidgets/Scheduler_DropDown_ViewSwitcher.png)

To use the drop-down menu on all types of devices, assign **true** to the [useDropDownViewSwitcher](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/useDropDownViewSwitcher.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#useDropDownViewSwitcher') option; to use tabs - assign **false**.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({ 
            // ...
            useDropDownViewSwitcher: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        [useDropDownViewSwitcher]="true">
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
            :use-drop-down-view-switcher="true" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        }
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
                <Scheduler useDropDownViewSwitcher={true} />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Scheduler - View Types](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types '/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/'')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')