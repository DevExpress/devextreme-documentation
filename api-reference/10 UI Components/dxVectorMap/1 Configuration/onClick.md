---
id: dxVectorMap.Options.onClick
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when any location on the map is clicked or tapped.

##### param(e): ClickEvent
Information about the event.

---
The clicked point's coordinates are available in the **event** field's **x** and **y** properties. The coordinates are calculated relatively to the client area which is the UI component's container. To convert them into map coordinates, use the [convertCoordinates(x,y)](/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/convertCoordinates(x_y).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Methods/#convertCoordinatesx_y') method.