---
id: dxChartArgumentAxis.hoverMode
acceptValues: 'allArgumentPoints' | 'none'
type: String
default: 'none'
---
---
##### shortDescription
Specifies chart elements to be highlighted when a user points to an axis label.

---
This option accepts one of the following values.

* **none**    
Axis labels do not respond to pointing to them.
* **allArgumentPoints**    
When a user points to a label on the argument axis, series points of the corresponding argument become highlighted.

#include common-ref-enum with {
    enum: "`ArgumentAxisHoverMode`",
    values: "`AllArgumentPoints` and `None`"
}

#####See Also#####
- **commonSeriesSettings**.**point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/') - specifies the appearance of series points in the hover state. Applies to all series points.
- **series**.**point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/') - the same, but applies to the points of a particular series.