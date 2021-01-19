You can handle the click on a data point of any type (point, bar, pie slice, etc.). To do this, implement a callback function and assign it to the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') option of the chart's configuration object.

	<!--JavaScript-->var chartOptions = {
		onPointClick: function(info){
			//...
		}
	};

The **onPointClick** callback function accepts an object that contains information on the click event. Fields of this object are described in the **onPointClick** option description of [Chart](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') and [PieChart](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onPointClick'). Among these fields, you can find the clicked point. An object that represents this point is described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/') section.