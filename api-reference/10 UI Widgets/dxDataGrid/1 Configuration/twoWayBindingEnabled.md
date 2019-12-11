---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether to enable two-way data binding.

---
Two-way data binding ensures that the UI tracks changes made in the data source by a 3rd-party instrument, and vice versa, the data source gets updated according to changes in the UI. Thus, the widget and its data source can continue to correspond to each other. 

[note] **DataGrid** provides this feature through Knockout and AngularJS resources, so make sure that you have [added these libraries](/concepts/00%20Getting%20Started/01%20Installation/00%20DevExtreme%20Dependencies.md '/Documentation/Guide/Getting_Started/Installation/DevExtreme_Dependencies/') to your app.

In certain scenarios, you may want to implement two-way data binding in **DataGrid** on your own. For this purpose, you can specify [cellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') and/or [editCellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') options. If so, make sure that you have the **twoWayBindingEnabled** option set to *false*.