---
id: dxPolarChart.Options.argumentAxis.hoverMode
acceptValues: 'allArgumentPoints' | 'none'
type: String
default: 'none'
---
---
##### shortDescription
Specifies the elements that will be highlighted when the argument axis is hovered over.

---
The following values are accepted:

* **none**    
Nothing happens when the argument axis is hovered over.
* **allArgumentPoints**    
The points that correspond to the argument that is currently hovered over are highlighted. To change the way the points are highlighted, set the options within the **series**.**point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/hoverStyle/') object.

#include common-ref-enum with {
    enum: "`ArgumentAxisHoverMode`",
    values: "`AllArgumentPoints` and `None`"
}