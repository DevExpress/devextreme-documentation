---
##### shortDescription
Redraws a widget.

##### param(skipChartAnimation): Boolean
Specifies whether or not to animate the chart within a range selector on render.

---
When the size of a range selector container changes at runtime, the range selector should be redrawn explicitly. To do this, call its **render(skipChartAnimation)** method.

If your range selector contains a chart in the background, you can specify whether or not to animate it on render. Pass *false* as the parameter to animate the chart on redraw. Otherwise, pass *true* or call the **render** method without parameters.