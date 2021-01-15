To select a map element in code, use its [selected(state)](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected(state).md '/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/'Methods/#selectedstate') method. Calling the same method without arguments returns the current selection state of the map element.

To call the **selected** method, you need to obtain the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') object. If you are calling this method from a click-handling function, it is not an issue, because these objects are passed there as the argument. But in case you need to call it outside this function, call the [getLayers()](/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/getLayers().md '/Documentation/ApiReference/UI_Components/dxVectorMap/Methods/#getLayers'), [getLayerByName()](/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/getLayerByIndex(index).md '/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/getLayerByIndex(index).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Methods/#getLayerByIndexindex'') or [getLayerByIndex()](/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/getLayerByIndex(index).md '/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/getLayerByIndex(index).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Methods/#getLayerByIndexindex'') method.

	<!--JavaScript-->var areas = mapInstance.getLayerByName('myAreaLayer'); // gets the area layer
	areas[0].selected(true); // selects the area with index 0
	var markers = mapInstance.getLayerByName('myMarkerLayer'); // gets the markers layer
	markers[0].selected(true); // selects the marker with index 0


You can also clear selection settings for all map elements simultaneously using the [clearSelection()](/api-reference/10%20UI%20Components/dxVectorMap/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxVectorMap/Methods/#clearSelection') method.
	
	<!--JavaScript-->mapInstance.clearSelection(); // deselects all areas and markers