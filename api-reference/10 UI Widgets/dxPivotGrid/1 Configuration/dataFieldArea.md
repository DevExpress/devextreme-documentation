---
default: 'column'
acceptValues: 'column' | 'row'
type: String
---
---
##### shortDescription
Specifies the area to which data field headers must belong.

---
Data field headers appear only when more than one [data field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') is [visible](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/visible.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#visible'). See the following image to spot the difference between the two settings of this option.
![DevExpress DevExtreme HTML5 PivotGrid](/images/DataGrid/PivotGrid_dataFieldArea.png)

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridDataFieldArea` enum. This enum accepts the following values: `Row` and `Column`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/jQuery/Light/"
}