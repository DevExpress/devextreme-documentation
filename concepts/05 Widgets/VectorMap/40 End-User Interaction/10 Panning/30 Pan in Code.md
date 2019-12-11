When you need to place the center into a different geographical point, use the [center(centerCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/center(centerCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates') method. Call this method with an array of two values: the longitude and the latitude of the new center, similar to the array the **center** option accepts.

	<!--JavaScript-->vectorMapInstance.center([-106.61, 35.110833]); // moves the center to Albuquerque

Calling the same method without arguments returns the current coordinates of the center.

Similarly, you can change the current view area using the [viewport(viewportCoordinates)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/viewport(viewportCoordinates).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates') method. It accepts an array of geographical coordinates in the following format: *[minLongitude, maxLatitude, maxLongitude, minLatitude]*.

	<!--JavaScript-->vectorMapInstance.viewport([15, 10, 110, 75]); // navigates the map to Eurasia

To get the current coordinates of the view area, call the same method without arguments. Note that changing the view area with the **viewport(viewportCoordinates)** methods may raise the [center change](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction/10%20Panning/40%20Handle%20the%20Center%20Change%20Event.md '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Panning/Handle_the_Center_Change_Event') and [zoom change](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction/20%20Zooming/40%20Handle%20the%20Zoom%20Change%20Event.md '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Zooming/Handle_the_Zoom_Change_Event') events if the center coordinates and zoom factor have been changed when you set new coordinates for the view area.
