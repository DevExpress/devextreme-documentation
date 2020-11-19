Users can open an appointment form to update or remove the appointment. They can also remove appointments and change their start and end dates in the grid. Use the [editing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/) object to configure allowed editing operations.

In this step, we will forbid users to drag the appointments. For this, set the **editing**.[allowDragging](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowDragging) to `false`.

---
##### jQuery

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({ 
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

---

