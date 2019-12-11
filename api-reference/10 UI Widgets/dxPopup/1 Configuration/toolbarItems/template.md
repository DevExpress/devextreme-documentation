---
id: dxPopup.Options.toolbarItems.template
type: template
---
---
##### shortDescription
Specifies an item template that should be used to render this item only.

---
Whether you use a default or a custom template for widget items, you can specify a specific template for a particular item. To do so, set the **template** field for the data source object of this item. The following types of the specified value are available.

- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

[note]The [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') component can not be used as a **toolbarItems** template.