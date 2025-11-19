To customize the appointment edit form further, specify the **editing**.[form]() and **editing**.[popup]() configuration objects. These objects configure the appointment edit form's Popup and Form components. The following code snippet implements an increased width for the Popup and the "static" label mode for the Form:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        editing: {
            popup: {
                width: '50vw',
            },
            form: {
                labelMode: 'static',
            },
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    <dx-scheduler>
        <dxo-scheduler-editing>
            <dxo-editing-popup
                width="50vw"
            ></dxo-editing-popup>
            <dxo-editing-form
                labelMode="static"
            ></dxo-editing-form>
        </dxo-scheduler-editing>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler>
            <DxEditing>
                <DxPopup width="50vw" />
                <DxForm labelMode="static" />
            </DxEditing>
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { DxScheduler, DxEditing, DxForm, DxPopup } from 'devextreme-vue/scheduler';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Editing, Form, Popup } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler>
                <Editing>
                    <Form width="50vw" />
                    <Popup labelMode="static" />
                </Editing>
            </Scheduler>
        );
    };

---
