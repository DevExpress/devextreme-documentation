---
id: dxDataGrid.Options.onToolbarPreparing
type: function(e)
---
---
##### shortDescription
A function that is executed before the toolbar is created.

##### param(e): ui/data_grid:ToolbarPreparingEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.toolbarOptions): dxToolbar_Options
The [properties of the toolbar](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/').

---
If you use DevExtreme ASP.NET components or JQuery in your application, specify this property to get the component's instance. In Angular, Vue, or React, use the [toolbar](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/') property instead.

#include datagrid-ontoolbarpreparing-jquery