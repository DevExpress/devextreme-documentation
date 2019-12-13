Each gauge bar can be accompanied by a label that displays the value indicated by this bar. A bar label is colored the same as the corresponding bar. Labels make a gauge more representative and easier to understand.

<img src="/Content/images/doc/19_2/ChartJS/GaugeBarLabels.png" alt="DevExtreme HTML5 JavaScript Gauges dxBarGauge BarGauge GaugeBarLabels" style="display:block; margin:0 auto" />

Bar labels can be tuned using [label](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/') configuration object options.

	<!--JavaScript-->var barGaugeOptions = {
		label: {
			// ...
		}
    };

These options are briefly described below.

- **Visibility**	
Bar labels are displayed by default. To hide them, assign **false** to the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#visible') option or directly to the **label** field.

- **Text Customization**	
You can specify a [format](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#format') for the value displayed by a label. Moreover, you are not limited to displaying the value of a bar only - you can customize the label's text per your requirements using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#customizeText') option.

- **Appearance**	
The font style used for displaying the label text can be varied using [font](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/font/') configuration object options. Also, the width and color of the label's connector can be changed using the [connectorColor](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/connectorColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#connectorColor') and [connectorWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/connectorWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#connectorWidth') options respectively. In addition, bar labels can be indented from the upper bar using the [indent](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/label/indent.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#indent') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/LabelsCustomization/"
}
