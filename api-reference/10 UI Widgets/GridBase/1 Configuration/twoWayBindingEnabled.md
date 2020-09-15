---
id: GridBase.Options.twoWayBindingEnabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to enable two-way data binding.

---
Two-way data binding ensures that the UI tracks changes made in the data source by a 3rd-party component, and vice versa. This way, the widget and its data source stay synchronized.

If you implement two-way data binding in the widget on your own using the [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') and/or [editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') options, make sure to set the **twoWayBindingEnabled** option to **false**.