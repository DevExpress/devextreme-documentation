---
EventForAction: ..\4 Events\legendClick.md
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#legendClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#instance">widget instance</a>.

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): series
The series to which the clicked legend item belongs.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series to which the clicked legend item belongs. To learn about series members you can use, refer to the description of the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') object.

Alternatively, you can navigate to a specific URL when the **legendClick** event fires. For this purpose, assign this URL to the **onLegendClick** option.

To learn more about handling click operations, and to see an example, refer to the [Click Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/2%20Click%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling') topic.