The range selector's scale is divided using two types of ticks: major and minor. Major ticks are accompanied with scale labels, while minor ticks are not.

![ChartJS RangeSelector](/images/ChartJS/RangeSelectorMajorTicks.png)

The appearance of the major ticks can be customized using the options of the [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/tick '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/tick/') object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		scale: {
		// ...
			tick: {
				color: 'white',
				opacity: 0.9,
				width: 2
			}
		}
	};

Major ticks can be arranged on the scale in several different ways. By default, major ticks arrange automatically. If you are not satisfied with major ticks arranged like that, you can specify a custom interval for the ticks using the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/tickInterval '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/tickInterval/') option.
