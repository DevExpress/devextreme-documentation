---
default: 'auto'
acceptValues: 'auto' | 'unlimited'
type: Number | String
---
---
##### shortDescription
Specifies the limit of full-sized appointments displayed per cell. In the *"day"*, *"week"* and *"workweek"* views, this option applies only to [all-day](/concepts/05%20Widgets/Scheduler/030%20Appointments/015%20Appointment%20Types/020%20All-Day%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#All-Day_Appointments') appointments.

---
This option accepts the following values: 

- *"unlimited"*      
The widget resizes the appointments without a limit to fit them into a cell.
- *"auto"*      
The widget narrows the appointments down to 20 pixels in height. If they still do not fit into the cell, the widget aggregates them in an appointment collector.
- **Number**    
The number of appointments allowed in a single cell. Appointments are aggregated in an appointment collector when this number is exceeded.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/AdaptiveAppointments/jQuery/Light/"
}