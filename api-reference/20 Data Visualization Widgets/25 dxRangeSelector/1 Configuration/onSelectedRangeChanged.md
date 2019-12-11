---
EventForAction: ..\4 Events\selectedRangeChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [selectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/4%20Events/selectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Events/#selectedRangeChanged') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.startValue): Date|Number
The updated start range value.

##### field(e.endValue): Date|Number
The updated end range value.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find updated start and end range values.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesautoajustment/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>