---
EventForAction: ..\4 Events\contextMenuPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **contextMenuPreparing** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the <b>ContextMenu</b> <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template">default item template</a>.

##### field(e.area): string
The clicked <a href="/Documentation/16_1/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a> type.

##### field(e.field): object
Options of the clicked field.

##### field(e.jQueryEvent): jQueryEvent
The jQuery event.

---
Assign a function to perform a custom action before a context menu is displayed in the field chooser. For instance, you can change the set of items in the menu.