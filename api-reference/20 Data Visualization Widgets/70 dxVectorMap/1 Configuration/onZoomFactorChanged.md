---
EventForAction: ..\4 Events\zoomFactorChanged.md
type: function
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [zoomFactorChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/zoomFactorChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#zoomFactorChanged') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.zoomFactor): number
The updated zoom factor.

---
If you need to perform specific actions when the map zoom factor is changed, handle the **zoomFactorChanged** event. One of the ways to do this is to assign a function to the **onZoomFactorChanged** option. This function will be called every time a user zooms the map or when the zoom factor is changed from code by calling the [zoomFactor(zoomFactor)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/3%20Methods/zoomFactor(zoomFactor).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#zoomFactorzoomFactor') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as the parameter. Among the fields of this object, you can find the updated zoom factor.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>