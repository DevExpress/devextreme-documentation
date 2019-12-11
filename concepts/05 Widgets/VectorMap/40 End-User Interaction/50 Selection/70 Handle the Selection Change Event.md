When an layer element is selected/deselected, the function assigned to the [onSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onSelectionChanged') option is invoked. This function accepts an object as the parameter. Among fields of this object, you can find the selected/deselected [element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') .

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		onSelectionChanged: function (info) {
			// specify required actions here
		}
	};

To identify whether a map element has been selected or deselected, use its **selected()** method inside the selection-handling function.