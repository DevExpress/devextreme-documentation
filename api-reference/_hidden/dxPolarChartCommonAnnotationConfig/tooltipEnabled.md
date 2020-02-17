A tooltip is a miniature rectangle that appears when a user long-presses an annotation or hovers the mouse pointer over it.

![DevExtreme Chart: Annotation Tooltip](/images/ChartJS/annotations/annotation-tooltip.png)

The tooltip displays the contents of the [description]({basewidgetpath}/Configuration/annotations/#description) field or the text or markup returned from the [customizeTooltip]({basewidgetpath}/Configuration/annotations/#customizeTooltip) function. If the **description** is empty, and **customizeTooltip** returns nothing, the tooltip does not appear.

Tooltips for annotations and series points have the same appearance specified in the [tooltip]({basewidgetpath}/Configuration/tooltip/) object. However, you can use the annotation's [customizeTooltip]({basewidgetpath}/Configuration/annotations/#customizeTooltip) function to give the annotation tooltip an individual look.