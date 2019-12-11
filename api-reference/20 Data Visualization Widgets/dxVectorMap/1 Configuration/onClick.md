---
EventForAction: ..\4 Events\click.md
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [click](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/click.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#click') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance').

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event extended by the **x** and **y** fields.

##### field(e.target): MapLayerElement object
The clicked layer element (if available).

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the object that represents the jQuery event extended by the following fields.

* **x**        
Contains the X coordinate of the clicked point.
* **y**        
Contains the Y coordinate of the clicked point.

[note] The coordinates are calculated relatively to the client area, i.e., the widget's container. To convert them into map coordinates, use the [convertCoordinates(x,y)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/convertCoordinates(x_y).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#convertCoordinatesx_y') method.

Alternatively, you can navigate to a specific URL when the **click** event fires. For this purpose, assign this URL to the **onClick** option.