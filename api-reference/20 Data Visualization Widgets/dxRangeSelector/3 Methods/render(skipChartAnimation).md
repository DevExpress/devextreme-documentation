---
id: dxRangeSelector.render(skipChartAnimation)
---
---
##### shortDescription
Redraws the widget.

##### param(skipChartAnimation): Boolean
Specifies whether to animate the background chart on render.

---
When the size of a range selector container changes at runtime, the range selector should be redrawn explicitly. To do this, call its **render(skipChartAnimation)** method.

If your range selector contains a chart in the background, you can specify whether or not to animate it on render. Pass **false** as the parameter to animate the chart on redraw. Otherwise, pass **true** or call the **render** method without parameters.

#####See Also#####
#include common-link-callmethods