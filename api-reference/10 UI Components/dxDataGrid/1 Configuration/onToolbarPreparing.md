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

##### field(e.toolbarOptions): dxToolbar_Options
The [properties of the toolbar](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/').

---

#include datagrid-ontoolbarpreparing-jquery

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-custom-column-chooser"
}