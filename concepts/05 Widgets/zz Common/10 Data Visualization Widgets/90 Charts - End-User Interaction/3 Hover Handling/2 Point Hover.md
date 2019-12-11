When an end-user rests the mouse pointer over a series point, its appearance assumes a specific hover style. To customize the default hover style, use the point **hoverStyle** configuration object. This object can specify settings for all series:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
            point: {
                hoverStyle: {
                    // Hover style configuration    
                }
            }
		}
	};

for type-specific series:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
            line: { // or 'bar', 'spline', etc.
                point: {
                    hoverStyle: {
                        // Type-specific hover style configuration    
                    }
                }
            }
		}
	};

or for an individual series:

    <!--JavaScript-->var chartOptions = {
		series: [{
            point: {
                hoverStyle: {
                    // Individual hover style configuration
                }
            }
		}, {
            // ...
        }]
	};

[note]The **point** configuration object defines the points of the line-like, scatter and area-like series only. To set the hover style for points of other series types, use the **hoverStyle** configuration object of the parent series.

By default, the chart highlights only the point that was hovered over. But in some scenarios, you may need several points to be highlighted. To specify it, use the **hoverMode** option. Like the hover style, this option can be specified for all, type-specific or an individual series. It can accept one of the following values.

- **onlyPoint** &#8212; highlights only the point that was hovered over
- **allSeriesPoints** &#8212; highlights all points from the parent series
- **allArgumentPoints** &#8212; highlights all points with the same argument
- **none** &#8212; does not highlight anything

To handle the point hover event, assign a function to the [onPointHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointHoverChanged') option of the chart.

	<!--JavaScript-->var chartOptions = {
		onPointHoverChanged: function (info) {
			//...
		}
	};

The **onPointHoverChanged** function accepts an object that contains information on the hover event. Among fields of this object, you can find the point whose hover state has been changed. An object that represents this point is described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') section. Use the [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isHovered') method of this object to identify whether the point has been hovered over or hovered out.

[note] Frequently, points that appear hovered over are not actually so, due to the *'allArgumentPoints'* or *'allSeriesPoints'* hover mode being set. For these points, the *pointHoverChanged* event does not occur and their *isHovered()* method returns **false**.