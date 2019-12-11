In **RangeSelector**, you can select a range either manually or from code. There are two ways of manual range selection: dragging [sliders](/concepts/20%20Data%20Visualization/30%20RangeSelector/10%20RangeSelector%20Elements/20%20Sliders.md '/Documentation/Guide/Data_Visualization/RangeSelector/RangeSelector_Elements/#Sliders') and selecting an area on a [scale](/concepts/20%20Data%20Visualization/30%20RangeSelector/10%20RangeSelector%20Elements/10%20Scale '/Documentation/Guide/Data_Visualization/RangeSelector/RangeSelector_Elements/#Scale') using the mouse. The **RangeSelector**'s behavior during manual range selection depends on the specified options of the [behavior](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/') configuration object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		behavior: {
			// The options specifying the **RangeSelector**'s behavior go here
		}
	};

When you are selecting a range using sliders, one slider can be dragged across another swapping places with it. This capability is on by default. To disable it, set the [allowSlidersSwap](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior/allowSlidersSwap.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#allowSlidersSwap') option to *false*.

<div class="simulator-desktop-container" data-view="/Content/Applications/16_1/DataVisualization/RangeSelectorHowTos/allowSlidersSwap.html, /Content/Applications/16_1/DataVisualization/RangeSelectorHowTos/allowSlidersSwap.js"></div>

There is one more option that specifies **RangeSelector** behavior when you select a range using sliders. When you let a slider off, it either stays at the place where you released it or moves to the nearest scale tick. To specify how a slider should behave in this case, use the [snapToTicks](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior/snapToTicks.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#snapToTicks') option.

<div class="simulator-desktop-container" data-view="/Content/Applications/16_1/DataVisualization/RangeSelectorHowTos/snapToTicks.html, /Content/Applications/16_1/DataVisualization/RangeSelectorHowTos/snapToTicks.js"></div>

In addition to sliders, you can select a range by the mouse. To do this, press the left mouse button down at one end of a required range and release it at another. To disable this capability, set the [manualRangeSelectionEnabled](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior/manualRangeSelectionEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#manualRangeSelectionEnabled') option to *false*.			
[note]The end of the range where you press the mouse button down should belong to the area that was previously unselected. Otherwise, the described actions will lead to the [movement](/concepts/20%20Data%20Visualization/30%20RangeSelector/20%20Range%20Changing/20%20Move%20a%20Range.md '/Documentation/Guide/Data_Visualization/RangeSelector/Range_Changing/#Move_a_Range') of the previously selected range along the scale.

<div class="simulator-desktop-container" data-view="/Content/Applications/16_1/DataVisualization/RangeSelectorHowTos/manualRangeSelectionEnabled.html, /Content/Applications/16_1/DataVisualization/RangeSelectorHowTos/manualRangeSelectionEnabled.js"></div>

To select a range from code, specify the required range using the **startValue** and **endValue** fields of the [selectedRange](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/selectedRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/selectedRange/') configuration object.
