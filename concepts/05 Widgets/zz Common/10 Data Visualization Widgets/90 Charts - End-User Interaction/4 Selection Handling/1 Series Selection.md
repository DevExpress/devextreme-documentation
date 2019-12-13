To select a series, call the **select()** method of the **series** object. For instance, you can select a series when it is clicked within the chart **onSeriesClick** handler (see [Click Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/2%20Click%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling')).

	<!--JavaScript-->var chartOptions = {
		onSeriesClick: function (info) {
			var clickedSeries = info.target;
			clickedSeries.select();
		}
	};

Alternatively, you can access a series when required, using one of the following [chart methods](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/'): **getAllSeries()**, **getSeriesByName()** and **getSeriesByPos()**.

[note]There are series that consist of points only, e.g., the _bar-like_ and _candleStick_ series of the **Chart** widget, and the _pie_ and _doughnut_ series of the **PieChart** widget. To select these series types on click, implement the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') handler. Use the **target.series** field of the object passed to this handler as the parameter to access the series of the clicked point (bar or slice).

A series has a distinctive style when selected. To customize it, use the series **selectionStyle** configuration object. This object can specify settings for all series:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
			selectionStyle: {
                // Common selection style configuration    
            }
		}
	};

for type-specific series:

    <!--JavaScript-->var chartOptions = {
		commonSeriesSettings: {
            line: { // or 'bar', 'spline', etc.
                selectionStyle: {
                    // Type-specific selection style configuration    
                }
            }
		}
	};

or for an individual series:

    <!--JavaScript-->var chartOptions = {
		series: [{
			selectionStyle: {
                // Individual selection style configuration
            }
		}, {
            // ...
        }]
	};

To choose which series elements to highlight in the selected state, specify the **selectionMode** option. Like the selection style, this option can be specified for all, type-specific or an individual series. There are several selection modes in the chart widgets. Available modes depend on the [series type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') you use.

You can also allow the user to select multiple series. For this purpose, set the [seriesSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/seriesSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#seriesSelectionMode') option to *'multiple'*.

To handle the series selection event, assign a function to the [onSeriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesSelectionChanged') option of the chart.

	<!--JavaScript-->var chartOptions = {
		onSeriesSelectionChanged: function (info) {
			//...
		}
	};

The **onSeriesSelectionChanged** function accepts an object that contains information on the selection event. Among fields of this object, you can find the series whose selection state has been changed. An object that represents this series is described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') section. Use the [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isHovered') method of this object to check the selection state of a series.

To clear the series selection, call the **clearSelection()** method of the series or the same method of the chart instance.

	<!--JavaScript-->chartInstance.clearSelection();
	// chartInstance.getSeriesByName('seriesName').clearSelection();