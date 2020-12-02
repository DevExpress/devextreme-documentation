Since people use portable devices to work with **Scheduler**, it should adapt its interface to small screens. To implement this behavior, set the [adaptivityEnabled](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#adaptivityEnabled) option to **true**. 

---
##### jQuery

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({
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

    // ...

##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, Resource, Editing } from 'devextreme-react/scheduler';

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

You have now configured the basic **Scheduler** features. For more details on this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/)

* [API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)