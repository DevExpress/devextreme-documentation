---
id: GridBase.Options.onToolbarPreparing
type: function(e)
default: null
deprecated: 
---
---
##### shortDescription
A function that is executed before the toolbar is created.

##### param(e): Object
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
