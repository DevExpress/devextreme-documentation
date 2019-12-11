---
type: function(e)|string
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointClick') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Point
The clicked series point.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series point. To learn about point members, refer to the description of the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') object. To get the [parent series](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/') of the point, use the **target.series** field of the object passed to the handler as its parameter.

Alternatively, you can navigate to a specific URL when the **pointClick** event fires. For this purpose, assign this URL to the **onPointClick** option.

To learn more about how to handle click operations, and to see an example, refer to the [Click Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/2%20Click%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsdoughnutseriesdoughnutwithselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>