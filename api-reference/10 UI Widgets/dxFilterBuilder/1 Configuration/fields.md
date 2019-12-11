---
default: []
type: Array<dxFilterBuilderField>
---
---
##### shortDescription
Configures fields.

---
This option accepts an array of objects, each configuring a filter condition's appearance. Each condition consists of a data field, operation and value. A logical operation can combine conditions on the same level in a group.

![DevExtreme HTML5 JavaScript Filter Builder Fields](/images/FilterBuilder/visual_elements/fields.png)

See the [Field](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/') section for details on fields you can specify in each object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/jQuery/Light/"
}