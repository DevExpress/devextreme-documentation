Users can do the following actions on appointments:

* Add new appointments

* Change text and date fields in the details form

* Change start and end time zones in the details form

* Rese the appointment's rectangle to change the duration

* Drag the appointment's rectangle to change start and end dates 

* Remove appointments with the help of the appointment's tooltip.

All of these operations - except time zone changing and appointment's dragging and resizing on iOS and Android - are enabled. To change the default settings, use the [editing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/) object.

In this step, we will disable drag appointments' dragging and enable time zone editing. For this, we will set the **editing**.[allowDragging](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowDragging) to `false` and editing.[allowTimeZoneEditing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowTimeZoneEditing) to `true`.

[note] The **Scheduler** displays appointment's time zone only when **editing**.**allowTimeZoneEditing** is `true`.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({ 
            // ...
            editing: {
                allowDragging: false
            },
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxo-editing
            [allowDragging]="false">
        </dxo-editing>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ... >
            <DxEditing
                :allow-dragging="false"
            />
        </DxScheduler>
    </template> 

   <script>

    import { DxScheduler, DxEditing } from 'devextreme-vue/scheduler';
    import { data, priorities } from './data.js';

    export default {
        name: 'Vue: Getting started with Scheduler',
        components: {
            DxScheduler,
            DxEditing
        },
        // ...
    }
    </script>

##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, Editing } from 'devextreme-react/scheduler';

    function App() {
        return (
            <div className="App">
                <Scheduler ... >
                <Editing
                    allowDragging={false}
                />
                </Scheduler>
            </div>
        );
    }

    export default App;

---
