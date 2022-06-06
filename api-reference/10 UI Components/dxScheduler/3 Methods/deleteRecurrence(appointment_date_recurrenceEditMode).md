---
id: dxScheduler.deleteRecurrence(appointment, date, recurrenceEditMode)
---
---
##### shortDescription
Deletes a recurring appointment occurrence.

##### param(appointmentData): dxSchedulerAppointment
The initial appointment.

##### param(date): Date | String
A date for which to delete a recurrence.

##### param(recurrenceEditMode): 'dialog' | 'occurrence' | 'series'
An edit mode for recurring appointments.

---

    <!--JavaScript-->
    $(function() {
        var appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2018, 4, 25, 9, 00),
            endDate: new Date(2018, 4, 25, 9, 30),
            recurrenceRule: "FREQ=DAILY;COUNT=10"
        }, 
        // ...
        ];

        var scheduler = $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            // ...
            onAppointmentClick: function(e) {
                if (condition){
                    e.component.deleteRecurrence(e.appointmentData, e.targetedAppointmentData.startDate, 'ocurrence');
                }
            }
        }).dxScheduler("instance");
    });

