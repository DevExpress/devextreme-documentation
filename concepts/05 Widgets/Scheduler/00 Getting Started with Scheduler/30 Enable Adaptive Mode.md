Since people use portable devices to work with Scheduler, it should change its interface accordingly. Set the adaptivityEnabled option to true and see how the Scheduler adapts its interface. 

---
##### jQuery

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({
            // ...
            adaptivityEnabled: true,
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

    // ...

##### React 

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <div className="App">
                <Scheduler ...
                    adaptivityEnabled={true}>
                </Scheduler>
            </div>
        );
    }

---

You have now configured the basic Scheduler features. For more details on this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/)

* [API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)