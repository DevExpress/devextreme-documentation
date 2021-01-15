You can perform specific actions when the zoom factor has been changed. Implement a callback function performing these actions and assign it to the **onZoomFactorChanged** option. When implementing the function, use the object passed to it as the parameter. Fields of this object are described in the [onZoomFactorChanged](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/onZoomFactorChanged.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#onZoomFactorChanged') option description. Among these fields, you can find the updated zoom factor.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		onZoomFactorChanged: function (info) {
			// specify required actions here
		}
	};