---
EventForAction: ..\4 Events\seriesClick.md
type: function(e) | string
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [seriesClick](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/seriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesClick') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Series
The clicked series.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series. To learn about series members that you can use, refer to the description of the [Series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') object.

[note] The **seriesClick** also fires when a user clicks a series point or a legend item, but only if it is not canceled in the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick') and [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick') event handlers.

Alternatively, you can navigate to a specific URL when the **seriesClick** event fires. For this purpose, assign this URL to the **onSeriesClick** option.

To learn more about handling click operations, and to see an example, refer to the [Click Handling](/concepts/20%20Data%20Visualization/10%20Charts/80%20End-User%20Interaction/2%20Click%20Handling '/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Click_Handling') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesmultipleseriesselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>