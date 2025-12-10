A one-time appointment is a non-recurring appointment with specified start and end dates.

#include full-width-image-container with {
   src: "/images/UiWidgets/Scheduler_OneTimeAppointment.png",
   alt: "Scheduler one-time appointment",
   minWidth: "360px",
   width: "80vw"
}

An object that defines a one-time appointment has this structure:

    <!--JavaScript-->
    var appointment = [{ 
        text: "Meet with a customer", 
        startDate: new Date("2021-05-21T15:00:00.000Z"),
        endDate: new Date("2021-05-21T16:00:00.000Z")
    }];
 
