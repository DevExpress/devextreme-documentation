---
EventForAction: ..\4 Events\appointmentClick.md
default: null
type: function | string
---
---
##### shortDescription
A handler for the [appointmentClick](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentClick') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The object associated with the initial appointment.

##### field(e.targetedAppointmentData): object
The object associated with the clicked appointment.

##### field(e.appointmentElement): jQuery
An HTML element of the clicked appointment.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.cancel): Boolean
Indicates whether or not to cancel execution of the default appointment click handler.

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

If you click an appointment from the recurring series, for example the second appointment belonging to the second owner, the following information is presented in the **appointmentData** and **targetedAppointmentData** fields.

    <!--JavaScript-->
    onAppointmentClick: function(e) {
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

Assign a function to perform a custom action after an appointment has been clicked.