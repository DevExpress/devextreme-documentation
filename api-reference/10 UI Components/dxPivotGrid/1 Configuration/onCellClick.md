---
id: dxPivotGrid.Options.onCellClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a pivot grid cell is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the clicked cell belongs.

##### field(e.cancel): Boolean
Allows you to cancel field expansion.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Components/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Components/dxPivotGrid/Pivot_Grid_Cell/'). This field is read-only.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.columnFields): Array<PivotGridDataSource_Options_fields>
The *column* area's fields.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.

##### field(e.component): dxPivotGrid
The UI component [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#instance').

##### field(e.dataFields): Array<PivotGridDataSource_Options_fields>
The *data* area's fields.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.rowFields): Array<PivotGridDataSource_Options_fields>
The *row* area's fields.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/DrillDown/"
}