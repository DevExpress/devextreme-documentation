---
id: dxChartCommonAnnotationConfig.tooltipEnabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the annotation tooltip is enabled.

---
A tooltip is a miniature rectangle that appears when a user long-presses an annotation or hovers the mouse pointer over it.

![DevExtreme Chart: Annotation Tooltip](/images/ChartJS/visual_elements/annotation_tooltip.png)

The tooltip displays the contents of the [description](/api-reference/_hidden/dxChartCommonAnnotationConfig/description.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#description') field or the text or markup returned from the [customizeTooltip](/api-reference/_hidden/dxChartCommonAnnotationConfig/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#customizeTooltip') function. If the **description** is empty, and **customizeTooltip** returns nothing, the tooltip does not appear.

Tooltips for annotations and series points have the same appearance specified in the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/') object. However, you can use the annotation's [customizeTooltip](/api-reference/_hidden/dxChartCommonAnnotationConfig/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#customizeTooltip') function to give the annotation tooltip an individual look.