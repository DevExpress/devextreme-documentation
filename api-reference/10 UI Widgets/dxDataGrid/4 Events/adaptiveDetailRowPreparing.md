---
type: event
---
---
##### shortDescription
Fires before an adaptive detail row will be rendered.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.formOptions): object
Layout options of the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxForm/Configuration/">dxForm</a> widget.

---
Instead, you can use the [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onAdaptiveDetailRowPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing') option to handle the event.

Adaptive detail rows display information from columns that were hidden when the widget adapted to the screen or container size. An adaptive detail row contains the [Form](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/') widget defining the layout of row items. When implementing the event handler, you can access the **Form** options using the **formOptions** field of the handler's parameter.

[note]There is a number of **Form** options that you cannot specify using **formOptions** due to technical restrictions. Those are the following.<br />
- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#template')        
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#editorType')        
- any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([options](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*)
<br />

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled') - enables column hiding in the UI.
- **columns[]** | [hidingPriority](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/hidingPriority.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority') - decides which columns to hide first.