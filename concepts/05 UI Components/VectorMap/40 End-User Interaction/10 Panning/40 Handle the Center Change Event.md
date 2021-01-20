When panning is performed, the center change event is raised. You can handle this event using a callback function assigned to the **onCenterChanged** property. When implementing this function, use the object passed to it as the parameter. Fields of this object are described in the [onCenterChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onCenterChanged.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#onCenterChanged') property description. Among these fields, you can find the updated center coordinates.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		onCenterChanged: function (info) {
			// specify required actions here
		}
	};