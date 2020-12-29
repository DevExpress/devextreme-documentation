To execute certain commands before or after an appointment was updated, handle the [appointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdating') or [appointmentUpdated](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentUpdated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdated') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the corresponding **on*EventName*** option when you configure the UI component.

---

##### jQuery

    <!--JavaScript-->$(function () {
        $("#schedulerContainer").dxScheduler({
            // ...
            onAppointmentUpdating: function (e) {
                // Handler of the "appointmentUpdating" event
            },
            onAppointmentUpdated: function (e) {
                // Handler of the "appointmentUpdated" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        (onAppointmentUpdating)="onAppointmentUpdating($event)"
        (onAppointmentUpdated)="onAppointmentUpdated($event)">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAppointmentUpdating (e) {
            // Handler of the "appointmentUpdating" event
        }

        onAppointmentUpdated (e) {
            // Handler of the "appointmentUpdated" event
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
            @appointment-updating="onAppointmentUpdating"
            @appointment-updated="onAppointmentUpdated"
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
            },
            methods: {
                onAppointmentUpdating: (e) => {
                    // Handler of the "appointmentUpdating" event
                },
                onAppointmentUpdated: (e) => {
                    // Handler of the "appointmentUpdated" event
                }
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

    const onAppointmentUpdating = (e) => {
        // Handler of the "appointmentUpdating" event
    }
    const onAppointmentUpdated = (e) => {
        // Handler of the "appointmentUpdated" event
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler ...
                    onAppointmentUpdating={onAppointmentUpdating}
                    onAppointmentUpdated={onAppointmentUpdated}
                />
            );
        }
    }
    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var updatedEventHandler1 = function (e) {
        // First handler of the "updated" event
    };

    var updatedEventHandler2 = function (e) {
        // Second handler of the "updated" event
    };

    $("#schedulerContainer").dxScheduler("instance")
        .on("appointmentUpdated", updatedEventHandler1)
        .on("appointmentUpdated", updatedEventHandler2);

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')
