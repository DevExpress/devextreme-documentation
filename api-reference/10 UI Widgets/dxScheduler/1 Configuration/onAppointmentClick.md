---
id: dxScheduler.Options.onAppointmentClick
type: function(e) | String
default: null
EventForAction: dxScheduler.appointmentClick
---
---
##### shortDescription
A function that is executed when an appointment is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The initial appointment.

##### field(e.appointmentElement): dxElement
#include common-ref-elementparam with { element: "clicked" }

##### field(e.cancel): Boolean
Allows you to cancel execution of the default appointment click handler.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object
The clicked appointment.

---
In case of [recurring appointments](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments) or appointments with [multiple resources](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources), you may need the data object of the clicked, not the initial, appointment. For this purpose, use the **targetedAppointmentData** field of the function's parameter. Otherwise, use the **appointmentData** field.

For example, the data source contains the following data object:

    <!--JavaScript-->
    var appointments = [{
        startDate: new Date(2016, 6, 18, 8),
        endDate: new Date(2016, 6, 18, 9),
        ownerId: [1, 2],
        recurrenceRule: "FREQ=DAILY"
    }];

This object describes a series of appointments that belong to two owners and repeat every day. If a user clicks an appointment from this series (for example, the second appointment that belongs to the second owner), **appointmentData** and **targetedAppointmentData** will then contain the following data objects:

    <!--JavaScript-->
    onAppointmentClick: function(e) {
        console.log(e.appointmentData);
        /* {
            startDate: new Date(2016, 6, 18, 8), 
            endDate: new Date(2016, 6, 18, 9),
            ownerId: [1, 2],
            recurrenceRule: "FREQ=DAILY"
        } */

        console.log(e.targetedAppointmentData);
        /* {
            startDate: new Date(2016, 6, 19, 8), 
            endDate: new Date(2016, 6, 19, 9),
            ownerId: 2,
            recurrenceRule: "FREQ=DAILY"
        } */
    }
