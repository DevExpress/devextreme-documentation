To execute certain commands before or after an appointment was added, handle the [appointmentAdding](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentAdding.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdding') or [appointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdded') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the corresponding **on*EventName*** option when you configure the UI component.

---

##### jQuery

    <!--JavaScript-->$(function () {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            onAppointmentAdding: function (e) {
                // Handler of the "appointmentAdding" event
            },
            onAppointmentAdded: function (e) {
                // Handler of the "appointmentAdded" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        (onAppointmentAdding)="onAppointmentAdding($event)"
        (onAppointmentAdded)="onAppointmentAdded($event)">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAppointmentAdding (e) {
            // Handler of the "appointmentAdding" event
        }

        onAppointmentAdded (e) {
            // Handler of the "appointmentAdded" event
        }
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
        <DxScheduler ...
            @appointment-adding="onAppointmentAdding"
            @appointment-added="onAppointmentAdded"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                // ...
            }
        },
        methods: {
            onAppointmentAdding: (e) => {
                // Handler of the "appointmentAdding" event
            },
            onAppointmentAdded: (e) => {
                // Handler of the "appointmentAdded" event
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const onAppointmentAdding = (e) => {
        // Handler of the "appointmentAdding" event
    }
    const onAppointmentAdded = (e) => {
        // Handler of the "appointmentAdded" event
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler ...
                    onAppointmentAdding={onAppointmentAdding}
                    onAppointmentAdded={onAppointmentAdded}
                />
            );
        }
    }
    export default App;
    
---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var addedEventHandler1 = function (e) {
        // First handler of the "added" event
    };

    var addedEventHandler2 = function (e) {
        // Second handler of the "added" event
    };

    $("#schedulerContainer").dxScheduler("instance")
        .on("appointmentAdded", addedEventHandler1)
        .on("appointmentAdded", addedEventHandler2);

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')