Crosshair is a pointer, which is represented by two mutually-crossing lines stretched over the entire chart plot. The crosshair helps you identify the values of the series points more precisely. When the crosshair is enabled, its center snaps to hovered [points](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Points').

![Crosshair](/images/ChartJS/Chart_Crosshair.png)

To enable the crosshair, set the [enabled](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#enabled') option within the [crosshair](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/') configuration object to *true*.

	<!--JavaScript-->var chartOptions = {
        // ...
		crosshair: {
			enabled: true
		}
	};

You can specify the crosshair appearance by changing options listed below.

* **Color**		
You can change the crosshair's [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#color'), [opacity](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#opacity')

* **Line Style**		
You can change the line's [width](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#width') and [dashStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/dashStyle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#dashStyle') options.

* **Labels**		
Crosshair labels indicate the argument and the value of the [series point](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Points') that the crosshair pointer currently focuses on. Use the [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/') object to configure the crosshair labels.

Each crosshair line can be configured individually by using the [horizontalLine](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/horizontalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/') and [verticalLine](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/verticalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/') configuration objects, whose fields are the same as listed above, plus the [visible](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/crosshair/horizontalLine/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/#visible') field. Note that the values that are set for a specific line override common values.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturescrosshair/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>