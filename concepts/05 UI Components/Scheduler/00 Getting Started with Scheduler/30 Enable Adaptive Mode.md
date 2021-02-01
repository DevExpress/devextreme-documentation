The **Scheduler** can adapt its interface to small screens. To enable this behavior, set the [adaptivityEnabled](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#adaptivityEnabled) property to **true**. See the following demo description for a full list of adaptability features: [Adaptability](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Adaptability/).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            // ...
            adaptivityEnabled: true
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [adaptivityEnabled]="true">
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ...
            :adaptivity-enabled="true">
        </DxScheduler>
    </template>
    
    <script> 
        // ...
    </script> 

##### React 

    <!-- tab: App.js -->
    // ...
    function App() {
        return (
            <Scheduler ...
                adaptivityEnabled={true}>
            </Scheduler>
        );
    }

    export default App;

---

For further information on the **Scheduler** component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/)

* [API Reference](/Documentation/ApiReference/UI_Components/dxScheduler/)
