---
EventForAction: ..\4 Events\adaptiveDetailRowPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **adaptiveDetailRowPreparing** event. Executed before an adaptive detail row is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.formOptions): object
The options of the [Form](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') widget.

---
Adaptive detail rows display information from columns that were hidden when the widget adapted to the screen or container size. Each adaptive detail row contains the [Form](/concepts/05%20Widgets/Form/00%20Overview.md '/Documentation/Guide/Widgets/Form/Overview/') widget that you can customize within the **onAdaptiveDetailRowPreparing** handler using the **formOptions** object. Refer to the [Form Configuration](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') section for details on options of the **Form** widget.

[note]

The following **Form** options cannot be specified using **formOptions**:

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template')        
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType')        
- any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([options](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*)

[/note]

#####See Also#####
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '{basewidgetpath}/Configuration/#columnHidingEnabled')
- **columns[]**.[hidingPriority](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/hidingPriority.md '{basewidgetpath}/Configuration/columns/#hidingPriority')