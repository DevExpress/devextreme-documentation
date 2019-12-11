When an end-user hovers the mouse pointer over a series, its appearance assumes a specific hover style. To customize the default hover style, use the series **hoverStyle** configuration object. This object can specify settings for all series:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
			hoverStyle: {
                // Common hover style configuration    
            }
		}
	};

for type-specific series:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
            line: { // or 'bar', 'spline', etc.
                hoverStyle: {
                    // Type-specific hover style configuration    
                }
            }
		}
	};

or for an individual series:

    <!--JavaScript-->var chartOptions = {
		series: [{
			hoverStyle: {
                // Individual hover style configuration
            }
		}, {
            // ...
        }]
	};

To choose which series elements to highlight when the series is hovered over, specify the **hoverMode** option. Like the hover style, this option can be specified for all, type-specific or an individual series. There are several hover modes in the chart widgets. Available modes depend on the [series type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') you use.

To handle the series hover event, assign a function to the [onSeriesHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesHoverChanged') option of the chart.

	<!--JavaScript-->var chartOptions = {
		onSeriesHoverChanged: function (info) {
			//...
		}
	};

The **onSeriesHoverChanged** function accepts an object that contains information on the hover event. Among fields of this object, you can find the series whose hover state has been changed. An object that represents this series is described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') section. Use the [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isHovered') method of this object to identify whether the series has been hovered over or hovered out.

[note]There are series that consist of points only, e.g., the _bar-like_ and _candleStick_ series of the **Chart** widget, and the _pie_ and _doughnut_ series of the **PieChart** widget. The **onSeriesHoverChanged** function is not called when hovering over a point (a bar or a slice) in these types of series. To handle the hover event for these series, implement the **onPointHoverChanged** function and access the series of the point whose hover state has been changed (see the [Point Hover](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/3%20Hover%20Handling/2%20Point%20Hover.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Hover_Handling/#Point_Hover') topic).
