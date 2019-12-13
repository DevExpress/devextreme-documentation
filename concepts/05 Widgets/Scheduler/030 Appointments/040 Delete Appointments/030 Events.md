To execute certain commands before or after an appointment was deleted, handle the [appointmentDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleting') or [appointmentDeleted](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentDeleted.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleted') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

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
    
---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

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

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')