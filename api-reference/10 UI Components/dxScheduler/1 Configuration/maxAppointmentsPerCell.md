---
id: dxScheduler.Options.maxAppointmentsPerCell
acceptValues: 'auto' | 'unlimited'
type: Number | String
default: 'auto'
---
---
##### shortDescription
Specifies the limit of full-sized appointments displayed per cell. Applies to all views except *"agenda"*.

---

When you set this property to *"auto"*, appointments narrow down to a predefined size value that depends on the view type. Appointments that do not fit into the cell are hidden, and the cell displays an overflow indicator. Users can click the indicator to display the hidden appointments in a tooltip. The *"unlimited"* value narrows appointments down without a limit to be fit into a cell.

To specify the maximum number of appointments allowed in a single cell, set the property to **Number**. Appointments that exceed this number are hidden, and the cell displays an overflow indicator. Users can click the indicator to display the hidden appointments in a tooltip.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/"
}