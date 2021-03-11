To add an appointment, a user follows the steps listed below.

1. Clicks a cell in the timetable to set focus on it.
2. Clicks the focused cell once again. The appointment details form will be shown.
3. In the form, specifies required fields and clicks the *"Done"* button. This will create an appointment and add it to the [data source](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource').

<div>
    <video width="640px" controls="yes">
        <source src="/images/UiWidgets/add_appointment.mp4" type="video/mp4">
    </video>
</div>

To prevent an end user from adding an appointment, set the **editing**.[allowAdding](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowAdding') property to **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            editing: { allowAdding: false }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ... >
        <dxo-editing [allowAdding]="false"></dxo-editing>
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
            <DxEditing :allow-adding="true" />
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
                    <Editing allowAdding={true} />
                </Scheduler>
            );
        }
    }
    export default App;

---