---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the map zoom factor is changed.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.zoomFactor): number
The updated zoom factor.

---
If you need to perform specific actions when the map zoom factor is changed, implement a function that handles the **zoomFactorChanged** event. This function will be called every time a user zooms the map or when the zoom factor is changed in code by calling the [zoomFactor(zoomFactor)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/zoomFactor(zoomFactor).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#zoomFactorzoomFactor') or [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated zoom factor.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')