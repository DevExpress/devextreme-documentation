---
id: dxPivotGrid.Options.onContextMenuPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.area): String
The clicked [area's](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.cell): dxPivotGridPivotGridCell
The cell that has been clicked to invoke the context menu.    
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "clicked cell" } 
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.columnFields): Array<PivotGridDataSource_Options_fields>
Fields in the "column" area.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.component): dxPivotGrid
The UI component's instance.

##### field(e.dataFields): Array<PivotGridDataSource_Options_fields>
Fields in the "data" area.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.field): PivotGridDataSource_Options_fields
This field's [configuration](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').    
Available for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel') only.

##### field(e.items): Array<Object>
An array of items to be displayed by the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/') property description.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.rowFields): Array<PivotGridDataSource_Options_fields>
Fields in the "row" area.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SummaryDisplayModes/"
}