When you need to handle any click on a map regardless of whether it was on an area or a marker, implement a callback function for the **onClick** option of the root configuration object. When implementing this function, use the object passed to it as the parameter. Fields of this object are described in the [onClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onClick') option description. Among these fields, you can find an object that represents the jQuery event extended by the **x** and **y** fields. They contain the coordinates of the clicked point.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		onClick: function (info) {
			// specify required actions here
		}
	};

The X and Y coordinates are calculated relatively to the client area, i.e., the widget container. To convert them into map coordinates, use the [convertCoordinates(x,y)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/convertCoordinates(x_y).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#convertCoordinatesx_y') method.