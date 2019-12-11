---
EventForAction: ..\4 Events\pointClick.md
type: function(e) | string
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Point
The clicked series point.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series point. To learn about point's members that you can use, refer to the description of the [Point](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') object.

[note] A click on a series point causes the [seriesClick](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/seriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesClick') event to fire after the **pointClick** event. To prevent this behavior, assign *true* to the **jQueryEvent.cancel** field of the object passed to the **pointClick** event handler as the argument.

Alternatively, you can navigate to a specific URL when the **pointClick** event fires. For this purpose, assign this URL to the **onPointClick** option.

To learn more about how to handle click operations, and to see an example, refer to the [Click Handling](/concepts/20%20Data%20Visualization/10%20Charts/80%20End-User%20Interaction/2%20Click%20Handling '/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Click_Handling') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>