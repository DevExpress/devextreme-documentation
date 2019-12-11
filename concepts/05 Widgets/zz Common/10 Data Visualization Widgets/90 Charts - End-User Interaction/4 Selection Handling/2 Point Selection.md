To select a data point, use its **select()** method. For instance, you can select a point on a click using the chart's **onPointClick** handler (see [Click Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/2%20Click%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling')).

	<!--JavaScript-->var chartOptions = {
		onPointClick: function (info) {
			var clickedPoint = info.target;
			clickedPoint.select();
		}
	};

In addition, you can select a specific point in a series using the series' **selectPoint(point)** function. The [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') object exposes methods that can help you find the required point to be selected: **getAllPoints()**, **getPointByPos()** and **getPointsByArg()**.

A point has a distinctive style when selected. To customize it, use the **selectionStyle** configuration object. This object can specify settings for all chart points:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
            point: {
                selectionStyle: {
                    // Common selection style configuration    
                }
            }
		}
	};

for type-specific series points:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
            line: { // or 'bar', 'spline', etc.
                point: {
                    selectionStyle: {
                        // Type-specific selection style configuration    
                    }
                }
            }
		}
	};

or for points of an individual series:

    <!--JavaScript-->var chartOptions = {
		series: [{
            point: {
                selectionStyle: {
                    // Individual selection style configuration
                }
            }
		}, {
            // ...
        }]
	};

[note]The **point** configuration object defines the points of the line-like, scatter and area-like series only. To set the selection style for points of other series, use the **series**.**selectionStyle** object.

By default, the chart highlights the selected point only. But in some scenarios, you may need several points to be highlighted. To specify this, use the **selectionMode** option. Like the selection style, this option can be specified for all, type-specific or points of an individual series. It can accept one of the following values.

- **onlyPoint** &#8212; highlights only the selected point
- **allSeriesPoints** &#8212; highlights all points from the parent series
- **allArgumentPoints** &#8212; highlights all points with the same argument
- **none** &#8212; does not highlight anything

You can also allow the user to select multiple points. For this purpose, set the [pointSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode') option to *'multiple'*.

To handle the point selection event, assign a function to the [onPointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointSelectionChanged') option of the chart.

	<!--JavaScript-->var chartOptions = {
		onPointSelectionChanged: function (info) {
			//...
		}
	};

The **onPointSelectionChanged** function accepts an object that contains information on the selection event. Among fields of this object, you can find the point whose selection state has been changed. An object that represents this point is described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') section. Use the [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#isSelected') method of this object to check the selection state of a point.

[note] Frequently, points that appear selected are not actually so, due to the *'allArgumentPoints'* or *'allSeriesPoints'* selection mode having been set. For these points, the *pointSelectionChanged* event does not occur and their *isSelected()* method returns **false**.
    
To clear the point selection, call the **clearSelection()** method of the point or the same method of its parent series.

	<!--JavaScript-->// Access the point
	point.clearSelection();

	// or access its parent series
    series.clearSelection();