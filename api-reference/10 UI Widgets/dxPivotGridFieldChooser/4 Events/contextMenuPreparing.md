---
type: event
---
---
##### shortDescription
Fires before displaying a context menu invoked by a right-click on one of the field chooser's fields.

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
Instead, you can use the [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#onContextMenuPreparing') option to handle the event.

Handle this event to change the set of items in the context menu before it is displayed.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')