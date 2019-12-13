---
id: dxScheduler.Options.onAppointmentDblClick
type: function(e) | String
default: null
EventForAction: dxScheduler.appointmentDblClick
---
---
##### shortDescription
A function that is executed when an appointment is double-clicked or double-tapped.

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

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object
The clicked appointment.

---
In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the currently selected appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

For example, there is a recurring appointment that starts on July 18 at 8:00 AM, repeats every day and belongs to two owners:

    <!--JavaScript-->
    var appointments = [
        ...
        {
            startDate: new Date(2016, 6, 18, 8),
            endDate: new Date(2016, 6, 18, 9),
            ownerId: [1, 2],
            recurrenceRule: "FREQ=DAILY"
        }
    ];

If you double-click an appointment from the recurring series, for example the second appointment belonging to the second owner, the following information is presented in the **appointmentData** and **targetedAppointmentData** fields.

    <!--JavaScript-->
    onAppointmentDblClick: function(e) {
        /* The initial appointment data
            {
                startDate: new Date(2016, 6, 18, 8), 
                endDate: new Date(2016, 6, 18, 9),
                ownerId: [1, 2],
                recurrenceRule: "FREQ=DAILY"
            }
        */
        var appointmentData = e.appointmentData;
    
        /* The clicked appointment data
            {
                startDate: new Date(2016, 6, 19, 8), 
                endDate: new Date(2016, 6, 19, 9),
                ownerId: 2,
                recurrenceRule: "FREQ=DAILY"
            }
        */
        var targetedAppointmentData = e.targetedAppointmentData;
    }