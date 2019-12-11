---
default: 'column'
acceptValues: 'row' | 'column'
type: String
---
---
##### shortDescription
Specifies the area to which data field headers must belong.

---
Data field headers appear only when more than one [data field](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') is [visible](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/visible.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#visible'). See the following image to spot the difference between the two settings of this option.
![DevExpress DevExtreme HTML5 PivotGrid](/images/DataGrid/PivotGrid_dataFieldArea.png)

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PivotGridDataFieldArea` enum. This enum accepts the following values: `Row` and `Column`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>