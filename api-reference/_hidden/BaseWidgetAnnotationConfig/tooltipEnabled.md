---
id: BaseWidgetAnnotationConfig.tooltipEnabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the annotation tooltip is enabled.

---
A tooltip is a miniature rectangle that appears when a user long-presses an annotation or hovers the mouse pointer over it.

![DevExtreme {WidgetName}: Annotation Tooltip](/images/ChartJS/annotations/{widget-name}-annotation-tooltip.png)

The tooltip displays the contents of the [description](/api-reference/_hidden/BaseWidgetAnnotationConfig/description.md '{basewidgetpath}/Configuration/annotations/#description') field or the text or markup returned from the [customizeTooltip](/api-reference/_hidden/dxVectorMapCommonAnnotationConfig/customizeTooltip.md '{basewidgetpath}/Configuration/annotations/#customizeTooltip') function. If the **description** is empty, and **customizeTooltip** returns nothing, the tooltip does not appear.

Tooltips for annotations and series points have the same appearance as specified in the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip '{basewidgetpath}/Configuration/tooltip/') object. You can use the annotation's [customizeTooltip](/api-reference/_hidden/dxVectorMapCommonAnnotationConfig/customizeTooltip.md '{basewidgetpath}/Configuration/annotations/#customizeTooltip') function to customize the annotation tooltip.