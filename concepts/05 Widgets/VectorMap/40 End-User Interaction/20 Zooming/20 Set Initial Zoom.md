In code, zoom is measured by a zoom factor. The zoom factor represents the relation between the width (or height) after and the width (or height) before zooming. Simply put, the zoom factor shows how much a map is zoomed relatively to its original size. For example, the zoom factor equaling 2 means that the map is twice larger than the original.

For setting initial zoom, assign a number greater than 1 to the [zoomFactor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/zoomFactor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#zoomFactor') option.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		zoomFactor: 2.5 // zooms the map 2.5 times
	};