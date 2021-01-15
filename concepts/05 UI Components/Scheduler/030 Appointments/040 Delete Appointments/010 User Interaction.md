After a user clicks an appointment, the **Scheduler** displays a tooltip with two buttons. To delete an appointment, a user clicks the button with a bucket icon. Note that the appointment will be deleted from the [data source](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource').

<div>
    <video width="640px" controls="yes">
        <source src="/images/UiWidgets/delete_appointment.mp4" type="video/mp4">
    </video>
</div>

If a user deletes a [recurring appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments'), the **Scheduler** displays a dialog that allows choosing between deleting the current appointment and deleting the entire series of recurring appointments. If you do not want this dialog to appear, choose the edit mode beforehand using the [recurrenceEditMode](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceEditMode') option.

---

##### jQuery

    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            recurrenceEditMode: 'occurrence' // or 'series' | 'dialog'
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        recurrenceEditMode="occurrence"> <!-- or 'series' | 'dialog' -->
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxScheduler
                recurrence-edit-mode="occurrence" /> <!-- or 'series' | 'dialog' -->
        </div>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler recurrenceEditMode="occurrence" /> {/* or 'series' | 'dialog' */}
            );
        }
    }
    export default App;

---

To prevent a user from deleting an appointment, set the **editing**.[allowDeleting](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDeleting') option to **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            editing: { allowDeleting: false }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ... >
        <dxo-editing [allowDeleting]="false"></dxo-editing>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxEditing :allow-deleting="true" />
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler, { DxEditing } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxEditing
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler, { Editing } from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler ... >
                    <Editing allowDeleting={true} />
                </Scheduler>
            );
        }
    }
    export default App;

---
