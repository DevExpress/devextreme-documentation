#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/Scheduler/Appointments/Add_Appointments/", name: "Add Appointments" }
#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/Scheduler/Appointments/Update_Appointments/", name: "Update Appointments" }
#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/Scheduler/Appointments/Delete_Appointments/", name: "Delete Appointments" }

Scheduler allows users to add, update, and delete appointments. All editing operations are enabled in the default configuration. To disable specific operations, configure the [editing](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/') properties.

This tutorial disables [allowDragging](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowDragging.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDragging'):

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
    <dx-scheduler>
        <dxo-scheduler-editing
            [allowDragging]="false">
        </dxo-scheduler-editing>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler>
            <DxEditing
                :allow-dragging="false"
            />
        </DxScheduler>
    </template> 

    <script setup lang="ts">
    import { DxScheduler, DxEditing } from 'devextreme-vue/scheduler';

    </script>

##### React 

    <!-- tab: App.tsx -->
    import { Scheduler, Editing } from 'devextreme-react/scheduler';
    // ...

    export default function App() {
        return (
            <Scheduler>
                <Editing
                    allowDragging={false}
                />
            </Scheduler>
        );
    }

---

When users add, update, or delete appointments, Scheduler calls the following event handlers:

- [onAppointmentAdding](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdding/')
- [onAppointmentUpdating](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdating/')
- [onAppointmentDeleting](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentDeleting.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentDeleting')

You can use these handlers to extend Scheduler's functionality. The following example configures **onAppointmentAdding** and **onAppointmentUpdating** to prevent recurring appointments from sharing cells with other appointments:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-prevent-recurrence-appointment"
}
