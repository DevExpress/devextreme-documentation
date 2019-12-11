---
id: dxScheduler.showAppointmentPopup(appointmentData, createNewAppointment, currentAppointmentData)
---
---
##### shortDescription
Shows the appointment details form.

##### param(appointmentData): Object | undefined
The initial appointment.

##### param(createNewAppointment): Boolean | undefined
Specifies whether a new appointment is created when editing is finished.

##### param(currentAppointmentData): Object | undefined
The current appointment.

---
In case of recurring appointments or appointments with multiple resources, you may want to show a popup for the specified appointment, not the initial appointment. For this purpose, use the **currentAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

For example, take a look at a recurring appointment that starts on July 18 at 8:00 AM, repeats every day and belongs to two owners. If you call the method for the appointment from the recurring series, for example the second appointment belonging to the second owner, the following information will be in the **appointmentData** and **currentAppointmentData** fields.

    <!--JavaScript-->
    // The initial appointment data
    var appointmentData = {
        startDate: new Date(2016, 6, 18, 8), 
        endDate: new Date(2016, 6, 18, 9),
        ownerId: [1, 2],
        recurrenceRule: "FREQ=DAILY"
    };
    
    // The current appointment data
    var currentAppointmentData = {
        startDate: new Date(2016, 6, 19, 8), 
        endDate: new Date(2016, 6, 19, 9),
        ownerId: 2,
        recurrenceRule: "FREQ=DAILY"
    };

#####See Also#####
#include common-link-callmethods