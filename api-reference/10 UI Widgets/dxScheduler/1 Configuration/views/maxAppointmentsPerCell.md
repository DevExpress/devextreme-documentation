---
id: dxScheduler.Options.views.maxAppointmentsPerCell
acceptValues: 'auto' | 'unlimited'
type: Number | String
default: 'auto'
---
---
##### shortDescription
Specifies the limit of full-sized appointments displayed per cell. Applies to all views except *"agenda"*.

---
This option accepts the following values: 

- *"unlimited"*      
The widget resizes the appointments without a limit to fit them into a cell.

- *"auto"*      
The widget narrows the appointments down to a predefined size value that depends on the view. If the appointments still do not fit into the cell, the widget aggregates them in an appointment collector.

- **Number**    
The number of appointments allowed in a single cell. Appointments are aggregated in an appointment collector when this number is exceeded.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/"
}