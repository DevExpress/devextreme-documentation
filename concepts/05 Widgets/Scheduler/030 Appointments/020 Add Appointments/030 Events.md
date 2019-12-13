To execute certain commands before or after an appointment was added, handle the [appointmentAdding](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentAdding.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdding') or [appointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdded') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

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
    
---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

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