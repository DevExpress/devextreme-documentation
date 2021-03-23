Shutters cover unselected ranges on a range selector. 

![ChartJS RangeSelector](/images/ChartJS/RangeSelectorShutters.png)

The appearance of shutters is being specified using the [shutter](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/shutter '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/shutter/') configuration object. Within this object you can set a color and opacity for shutters.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		// ...
		shutter: {
			color: 'powderblue',
			opacity: 0.7
		}
	};

When a color for shutters is not specified, the shutters are painted in the [color of the container](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/containerBackgroundColor.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#containerBackgroundColor').

[note] Shutters are available only when the [background](/concepts/05%20UI%20Components/RangeSelector/10%20Visual%20Elements/40%20Background/10%20Background.md '/Documentation/Guide/UI_Components/RangeSelector/Visual_Elements/#Background') is set.
