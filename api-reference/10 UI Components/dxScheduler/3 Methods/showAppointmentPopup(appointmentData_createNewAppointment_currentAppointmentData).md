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
<!-- %field(model.targetedAppointmentData)% -->

---

If invoked without parameters, the method shows a new appointment window. Its start and end dates are prepopulated in accordance with the [currentDate](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate) value. The default appointment duration is 30 minutes.

#####See Also#####
#include common-link-callmethods

<!-- import * from 'api-reference\10 UI Widgets\dxScheduler\1 Configuration\appointmentTemplate.md' -->