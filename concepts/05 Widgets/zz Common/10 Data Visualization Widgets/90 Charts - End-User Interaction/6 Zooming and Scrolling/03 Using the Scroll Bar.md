In addition to scrolling by mouse and touch gestures, you can display a separate visual element for scrolling called **scroll bar**.

![](/Content/images/doc/19_2/ChartJS/Chart_ScrollBar.png)

The scroll bar is configured using the [scrollBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/') object. Set the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible') field of this object to **true** to display the scroll bar.

[note] Before displaying the scroll bar, make sure that [scrolling](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') and [zooming](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') features are enabled, otherwise the scroll bar will not be operational.

	<!--JavaScript-->var chartOptions = {
		// ...
		scrollingMode: "all",
		zoomingMode: "all",

		scrollBar: {
			visible: true,
			//...
		}
	};

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

To learn more about the scroll bar as a visual element, refer to the **Chart Elements** | [Scroll Bar](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning/03%20Using%20the%20Scroll%20Bar.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Using_the_Scroll_Bar') topic.
