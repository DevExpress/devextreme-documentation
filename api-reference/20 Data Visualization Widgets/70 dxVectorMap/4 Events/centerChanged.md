---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when the coordinates of the map center are changed.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.center): array
The updated geographical coordinates of the center.

---
If you need to perform specific actions when the coordinates of the map center are changed, implement a function that handles the **centerChanged** event. This function will be called every time a user moves the map or when the center is being changed in code by calling the [center(centerCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/3%20Methods/center(centerCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated center coordinates.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')