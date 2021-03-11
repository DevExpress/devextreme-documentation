Users can manage appointments in the following ways:

* Add new appointments

* Update appointments in an edit form

* Resize an appointment to change its duration

* Drag and drop an appointment to reschedule it

* Remove appointments

Edit operations are enabled (the default setting). To disable an individual operation, set the corresponding property in the [editing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/) object to **false**. In this tutorial, we use the [allowDragging](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowDragging.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDragging') property to disable appointment drag-and-drop.

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
    // ...
    import {
        DxScheduler,
        // ...
        DxEditing
    } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            // ...
            DxEditing
        },
        // ...
    }
    </script>

##### React 

    <!-- tab: App.js -->
    // ...
    import {
        Scheduler,
        // ...
        Editing
    } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler ... >
                <Editing
                    allowDragging={false}
                />
            </Scheduler>
        );
    }

    export default App;

---
