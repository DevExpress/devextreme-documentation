To execute certain commands before or after an appointment was deleted, handle the [appointmentDeleting](/api-reference/10%20UI%20Components/dxScheduler/4%20Events/appointmentDeleting.md '/Documentation/ApiReference/UI_Components/dxScheduler/Events/#appointmentDeleting') or [appointmentDeleted](/api-reference/10%20UI%20Components/dxScheduler/4%20Events/appointmentDeleted.md '/Documentation/ApiReference/UI_Components/dxScheduler/Events/#appointmentDeleted') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the corresponding **on*EventName*** property when you configure the UI component.

---

##### jQuery

    <!--JavaScript-->$(function () {
        $("#schedulerContainer").dxScheduler({ // ...
            onAppointmentDeleting: function (e) {
                // Handler of the "appointmentDeleting" event
            },
            onAppointmentDeleted: function (e) {
                // Handler of the "appointmentDeleted" event
            }
        });
    });


##### Angular

    <!--HTML-->
    <dx-scheduler ...
        (onAppointmentDeleting)="onAppointmentDeleting($event)"
        (onAppointmentDeleted)="onAppointmentDeleted($event)">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAppointmentDeleting (e) {
            // Handler of the "appointmentDeleting" event
        }

        onAppointmentDeleted (e) {
            // Handler of the "appointmentDeleted" event
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
            @appointment-deleting="onAppointmentDeleting"
            @appointment-deleted="onAppointmentDeleted"
        />
    </template>

    <script>
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
        },
        methods: {
            onAppointmentDeleting: (e) => {
                // Handler of the "appointmentDeleting" event
            },
            onAppointmentDeleted: (e) => {
                // Handler of the "appointmentDeleted" event
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const onAppointmentDeleting = (e) => {
        // Handler of the "appointmentDeleting" event
    }
    const onAppointmentDeleted = (e) => {
        // Handler of the "appointmentDeleted" event
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler ...
                    onAppointmentDeleting={onAppointmentDeleting}
                    onAppointmentDeleted={onAppointmentDeleted}
                />
            );
        }
    }
    export default App;

---

---

##### jQuery

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var deletedEventHandler1 = function (e) {
        // First handler of the "deleted" event
    };

    var deletedEventHandler2 = function (e) {
        // Second handler of the "deleted" event
    };

    $("#schedulerContainer").dxScheduler("instance")
        .on("appointmentDeleted", deletedEventHandler1)
        .on("appointmentDeleted", deletedEventHandler2);

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')