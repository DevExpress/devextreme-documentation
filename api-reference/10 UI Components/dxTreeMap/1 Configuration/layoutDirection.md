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
The value of this property determines the start and end point of the layout. See the image below to spot the difference between the available layout directions.

![DevExpress DevExtreme HTML5 TreeMap LayoutDirection](/images/ChartJS/TreeMap_layoutDirections.png)

[note]If you use a custom [layout algorithm](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/layoutAlgorithm.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#layoutAlgorithm'), this property will be ignored.

#include common-ref-enum with {
    enum: "`TreeMapLayoutDirection`",
    values: "`LeftTopRightBottom`, `LeftBottomRightTop`, `RightTopLeftBottom`, and `RightBottomLeftTop`"
}