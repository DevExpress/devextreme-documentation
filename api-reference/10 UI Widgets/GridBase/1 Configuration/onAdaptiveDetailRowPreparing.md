---
id: GridBase.Options.onAdaptiveDetailRowPreparing
type: function(e)
default: null
EventForAction: GridBase.adaptiveDetailRowPreparing
---
---
##### shortDescription
A function that is executed before an adaptive detail row is rendered.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.formOptions): Object
The properties of the [Form](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') UI component.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Adaptive detail rows display information from columns that were hidden when the UI component adapted to the screen or container size. Each adaptive detail row contains the [Form](/concepts/05%20Widgets/Form/00%20Overview.md '/Documentation/Guide/Widgets/Form/Overview/') UI component that you can customize within the **onAdaptiveDetailRowPreparing** function using the **formOptions** object. Refer to the [Form Configuration](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') section for details on properties of the **Form** UI component.

[note]

The following **Form** properties cannot be specified using **formOptions**:

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template')        
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType')        
- any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([properties](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*)

[/note]

#####See Also#####
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '{basewidgetpath}/Configuration/#columnHidingEnabled')
- **columns[]**.[hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '{basewidgetpath}/Configuration/columns/#hidingPriority')
- [Adaptability](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Adaptability/')