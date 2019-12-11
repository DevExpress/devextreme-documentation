---
EventForAction: ..\4 Events\contextMenuPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **contextMenuPreparing** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.items): Array
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the **ContextMenu** [default item template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template').

##### field(e.area): String
The clicked [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.cell): PivotGridCell
The cell that has been clicked to invoke the context menu.    
**NOTE:** Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.cellElement): jQuery
The clicked cell's container.    
**NOTE:** Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.    
<b>NOTE: </b>Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.    
<b>NOTE: </b>Unavailable for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.dataFields): Array
Fields in the 'data' area.

##### field(e.rowFields): Array
Fields in the 'row' area.

##### field(e.columnFields): Array
Fields in the 'column' area.

##### field(e.field): Object
Options of the clicked field.    
<b>NOTE: </b>Available for fields in the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel') only.

---
Assign a function to perform a custom action before a context menu is displayed in the grid. For instance, you can change the set of items in the menu.