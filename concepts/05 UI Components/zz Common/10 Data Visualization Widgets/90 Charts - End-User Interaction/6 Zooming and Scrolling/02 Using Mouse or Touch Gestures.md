The Chart UI component allows you to enable built-in scrolling and zooming. You can use the mouse wheel or the "pinch" gesture for zooming and the horizontal slide gesture across the chart (using mouse or touch interface) for scrolling.

![DevExtreme ChartJS Zooming Scrolling](/images/ChartJS/devextreme-chart-NewZoomScroll.gif)

You can enable mouse support, touch support or both by assigning corresponding values to the [scrollingMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#scrollingMode') and/or [zoomingMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#zoomingMode') properties.

	<!--JavaScript-->var chartOptions = {
		// ...
		scrollingMode: "all", // "touch", "mouse"
		zoomingMode: "all"    // "touch", "mouse"
	};

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}
