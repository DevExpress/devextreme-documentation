Minor scale ticks are being placed between major ticks. They designate subsidiary tick values on a scale.

![ChartJS RangeSelector](/images/ChartJS/RangeSelectorMinorTicks.png)

Unlike major ticks, minor ticks are not accompanied with scale labels. However, their appearance can be customized using the options of the [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/tick/') object, like the appearance of major ticks.

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

By default, minor ticks arrange on the scale automatically, but you can specify a custom interval for them. To do this, use the [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minorTickInterval/') option. Besides, minor ticks can be arranged using the [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#minorTickCount') option. This option specifies the number of minor ticks between two major ticks.

[note] When both the **minorTickInterval** and **minorTickCount** options are specified, minor ticks will be arranged according to the interval, not the count.

If you do not need to display minor ticks at all, set the [showMinorTicks](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#showMinorTicks) option to **false**.

In addition, you can specify whether or not to place a tick at the end of the scale in case when, according to the settings of the tick arrangement, no ticks should be placed there. To do this, use the [showCustomBoundaryTicks](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/showCustomBoundaryTicks.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#showCustomBoundaryTicks') option.
