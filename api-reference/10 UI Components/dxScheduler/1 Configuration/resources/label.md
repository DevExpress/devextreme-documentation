---
id: dxScheduler.Options.resources.label
type: String
default: ''
---
---
##### shortDescription
Specifies a resource label.

---
Scheduler displays resource labels in the appointment edit form.

To customize the appointment edit form and add resource items in the **editing**.**form**.[items[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#items) array, use resource labels in item names. Scheduler generates predefined editing form items as follows:

    'ResourceLabelGroup'
    ├─ 'ResourceLabelIcon'
    └─ 'ResourceLabelEditor'

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/"
}