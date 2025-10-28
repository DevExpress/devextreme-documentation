The view switcher is a predefined [toolbar](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/') item that allows users to switch between Scheduler views.

![View Switcher](/images/UiWidgets/Scheduler_View_Switcher.png)

To specify available views, configure the [views](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/') array. To specify the current view, configure the [currentView](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView') property:

---

##### jQuery

    <!-- index.js -->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            views: ['day', 'week', 'agenda']
            currentView: 'day',
        });
    });

##### Angular

    <!-- app.component.html -->
    <dx-scheduler ...
        [views]="views"
        currentView="day"
    ></dx-scheduler>

    <!-- app.component.ts -->
    import { DxSchedulerModule } from "devextreme-angular";
    
    // ...
    export class AppComponent {
        views = ['day', 'week', 'agenda'];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :views="views"
            current-view="day"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    const views = ['day', 'week', 'agenda'];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Scheduler } from 'devextreme-react/scheduler';
    
    const views = ["day", "week", "agenda"];

    function App () {
        return (
            <Scheduler
                views={views}
                currentView="day"
            />
        );
    }

---

[note]

- Be sure to include the **currentView** value in the **views** array.
- If the **views** array is empty or contains a single item, Scheduler hides the view switcher. 

[/note]

On mobile devices, Scheduler displays the view switcher as a drop-down menu:

![Drop-down View Switcher](/images/UiWidgets/Scheduler_DropDown_ViewSwitcher.png)

To integrate the drop-down menu view switcher on other devices, enable [useDropDownViewSwitcher](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/useDropDownViewSwitcher.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#useDropDownViewSwitcher').

#####See Also#####
- [Scheduler - View Types](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')