---
EventForAction: ..\4 Events\centerChanged.md
type: function
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [centerChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/centerChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#centerChanged') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.center): array
The updated geographical coordinates of the center.

---
If you need to perform specific actions when the coordinates of the map center are changed, handle the **centerChanged** event. One of the ways to do this is to assign a function to the **onCenterChanged** option. This function will be called every time a user moves the map or when the center is being changed in code by calling the [center(centerCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/3%20Methods/center(centerCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated center coordinates.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>