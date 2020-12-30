Users can do the following actions on appointments:

* Add new appointments

* Update appointments in an edit form

* Resize an appointment to change its duration

* Drag and drop an appointment to reschedule it

* Remove appointments

Edit operations are enabled by default. To disable an individual operation, assign **false** to its property in the [editing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/) object. In this tutorial, we use the [allowDragging](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowDragging) property to disable appointment drag-and-drop.

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

    export default {
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
