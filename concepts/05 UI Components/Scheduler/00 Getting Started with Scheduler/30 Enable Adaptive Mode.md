The Scheduler interface can adapt to small screens. Set [adaptivityEnabled](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#adaptivityEnabled') to **true** to enable this capability. For more information, see the following demo:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Adaptability/",
    name: "Scheduler - Adaptability"
}

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            // ...
            adaptivityEnabled: true
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Scheduler()
        .AdaptivityEnabled(true)
        // ...
    )

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler
        [adaptivityEnabled]="true"
    ></dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler
            :adaptivity-enabled="true"
        />
    </template>

##### React 

    <!-- tab: App.tsx -->
    // ...
    export default function App() {
        return (
            <Scheduler
                adaptivityEnabled={true}
            />
        );
    }

---

For further information on the Scheduler component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/)

* [API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')
