Major scale ticks can be accompanied by scale labels. These labels display scale values. Scale labels are designed to make data represented by the **CircularGauge** more comprehensible.

<img src="/Content/images/doc/19_2/ChartJS/CircularGaugeScaleLabels.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeScaleLabels" style="display:block; margin:0 auto" />

To configure scale labels, use the options within the **scale**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/scale/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/') object.

	<!--JavaScript-->var gaugeOptions = {
        scale: {
			label: {
				// ...
			}
        }
    };

These options are briefly described below.

- **Visibility**	
You can show/hide scale labels using the [visible](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#visible') option.

- **Text Customization**	
You can specify a [format](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#format') for the value displayed by a label. Moreover, you are not limited to displaying scale values only - you can customize the label's text per your requirements using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#customizeText') option.

- **Appearance**	
The font style used for displaying the label text can be varied using options of the [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/font/') configuration object. In addition, scale labels can be indented from their ticks using the [indentFromTick](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/scale/label/indentFromTick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/#indentFromTick') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleLabelFormatting/"
}
