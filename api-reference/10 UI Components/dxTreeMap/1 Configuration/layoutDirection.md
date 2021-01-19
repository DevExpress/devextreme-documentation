---
id: dxTreeMap.Options.layoutDirection
acceptValues: 'leftBottomRightTop' | 'leftTopRightBottom' | 'rightBottomLeftTop' | 'rightTopLeftBottom'
type: String
default: 'leftTopRightBottom'
---
---
##### shortDescription
Specifies the direction in which the items will be laid out.

---
The value of this option determines the start and end point of the layout. See the image below to spot the difference between the available layout directions.

![DevExpress DevExtreme HTML5 TreeMap LayoutDirection](/images/ChartJS/TreeMap_layoutDirections.png)

[note]If you use a custom [layout algorithm](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/layoutAlgorithm.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm'), this option will be ignored.

#include common-ref-enum with {
    enum: "`TreeMapLayoutDirection`",
    values: "`LeftTopRightBottom`, `LeftBottomRightTop`, `RightTopLeftBottom`, and `RightBottomLeftTop`"
}