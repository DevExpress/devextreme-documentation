---
default: 'leftTopRightBottom'
acceptValues: 'leftTopRightBottom' | 'leftBottomRightTop' | 'rightTopLeftBottom' | 'rightBottomLeftTop'
type: String
---
---
##### shortDescription
Specifies the direction in which the items will be laid out.

---
The value of this option determines the start and end point of the layout. See the image below to spot the difference between the available layout directions.

![DevExpress DevExtreme HTML5 TreeMap LayoutDirection](/images/ChartJS/TreeMap_layoutDirections.png)

[note]If you use a custom [layout algorithm](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/layoutAlgorithm.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm'), this option will be ignored.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `TreeMapLayoutDirection` enum. This enum accepts the following values: `LeftTopRightBottom`, `LeftBottomRightTop`, `RightTopLeftBottom` and `RightBottomLeftTop`.