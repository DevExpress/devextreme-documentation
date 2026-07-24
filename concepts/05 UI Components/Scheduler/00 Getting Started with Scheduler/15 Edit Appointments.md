Users can manage appointments in the following ways:

* Add new appointments

* Update appointments in an edit form

* Resize an appointment to change its duration

* Drag and drop an appointment to reschedule it

* Remove appointments

Edit operations are enabled (the default setting). To disable an individual operation, set the corresponding property in the [editing](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/') object to **false**. In this tutorial, we use the [allowDragging](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowDragging.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDragging') property to disable appointment drag-and-drop.

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

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Scheduler()
        .Editing(e => e
            .AllowDragging(false)
        )
        // ...
    )

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxo-scheduler-editing
            [allowDragging]="false">
        </dxo-scheduler-editing>
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
When users add or edit appointments, the Scheduler raises events like [onAppointmentAdding](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdding/') and [onAppointmentUpdating](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdating/'). You can use these events to extend the Scheduler component's functionality. The example below demonstrates how to prevent adding or moving appointments to cells with existing recurring appointments using **onAppointmentAdding** and **onAppointmentUpdating**.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-prevent-recurrence-appointment"
}