---
id: dxPivotGrid.Options.dataFieldArea
acceptValues: 'column' | 'row'
type: String
default: 'column'
---
---
##### shortDescription
Specifies the area to which data field headers must belong.

---
Data field headers appear only when more than one [data field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') is [visible](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/visible.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#visible'). See the following image to spot the difference between the two settings of this option.
![DevExpress DevExtreme HTML5 PivotGrid](/images/DataGrid/PivotGrid_dataFieldArea.png)

#include common-ref-enum with {
    enum: "`PivotGridDataFieldArea`",
    values: "`Row` and `Column`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/"
}