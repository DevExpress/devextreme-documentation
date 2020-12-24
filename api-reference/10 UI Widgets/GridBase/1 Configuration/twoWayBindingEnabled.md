---
id: GridBase.Options.twoWayBindingEnabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to enable two-way data binding.

---
Two-way data binding ensures that the UI tracks changes made in the data source by a 3rd-party component, and vice versa. This way, the UI component and its data source stay synchronized. 
If you implement two-way data binding in the UI component on your own using the [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') and/or [editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') options, make sure to set the **twoWayBindingEnabled** option to **false**.

[note] The UI component provides two-way data binding through Knockout, Angular or AngularJS resources, so make sure to [add these libraries](/concepts/Common/Distribution%20Channels/05%20CDN '/Documentation/Guide/Common/Distribution_Channels/CDN/') to your app.