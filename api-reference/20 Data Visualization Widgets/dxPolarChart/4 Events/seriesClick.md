---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a series.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#instance').

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Series
The clicked series.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series. To learn about series members that you can use, refer to the description of the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') object.

[note] The **seriesClick** also fires when a user clicks a series point or a legend item, but only if it is not canceled in the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#pointClick') and [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#legendClick') event handlers.

#####See Also#####
#include common-link-handleevents