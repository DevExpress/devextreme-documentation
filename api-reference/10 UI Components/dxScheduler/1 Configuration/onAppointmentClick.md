---
id: dxScheduler.Options.onAppointmentClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an appointment is clicked or tapped. 

##### param(e): Object
Information about the event.

##### field(e.appointmentData): dxSchedulerAppointment
The initial appointment.

##### field(e.appointmentElement): DxElement
#include common-ref-elementparam with { element: "clicked" }

##### field(e.cancel): Boolean
If **true**, hides the appointment tooltip.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): dxSchedulerAppointment
The clicked appointment.

---

In case of [recurring appointments](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/RecurringAppointments) or appointments with [multiple resources](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources), you may need the data object of the clicked appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function's parameter. Otherwise, use the **appointmentData** field.

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

Additionally, the **targetedAppointmentData** field has the **displayStartDate** and **displayEndDate** date objects. These objects contain time-zone adjusted dates if you specify the [timeZone](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeZone) property. If the latter property is not specified, the date objects mentioned above have the same values as the **startDate** and **endDate** objects.

    <!--JavaScript-->
    onAppointmentClick: function(e) {
        console.log(e.targetedAppointmentData);
        /* {
            startDate: new Date(2016, 6, 19, 8), 
            endDate: new Date(2016, 6, 19, 9),
            displayStartDate: new Date(2016, 6, 19, 10), 
            displayEndDate: new Date(2016, 6, 19, 11),
            ownerId: 2,
            recurrenceRule: "FREQ=DAILY"
        } */
    }
