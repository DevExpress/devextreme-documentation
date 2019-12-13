The **Chart** widget allows you to enable built-in scrolling and zooming. You can use the mouse wheel or the "pinch" gesture for zooming and the horizontal slide gesture across the chart (using mouse or touch interface) for scrolling.

![DevExtreme ChartJS Zooming Scrolling](/images/ChartJS/devextreme-chart-NewZoomScroll.gif)

You can enable mouse support, touch support or both by assigning corresponding values to the [scrollingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') and/or [zoomingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') options.

	<!--JavaScript-->var chartOptions = {
		// ...
		scrollingMode: "all", // "touch", "mouse"
		zoomingMode: "all"    // "touch", "mouse"
	};

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}
