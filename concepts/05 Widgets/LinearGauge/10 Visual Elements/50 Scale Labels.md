Major scale ticks can be accompanied by scale labels. These labels display scale values. Scale labels are designed to make data represented by the **LinearGauge** more comprehensible.

<img src="/images/ChartJS/LinearGaugeScaleLabels.png" alt="DevExtreme HTML5 JavaScript Gauges LinearGaugeScaleLabels" style="display:block; margin:0 auto" />

To configure scale labels, use the properties within the **scale**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/scale/label '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/label/') object.

	<!--JavaScript-->var gaugeOptions = {
        scale: {
			label: {
				// ...
			}
        }
    };

These properties are briefly described below.

- **Visibility**	
You can show/hide scale labels using the [visible](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/visible.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/label/#visible') property.

- **Text Customization**	
You can specify a [format](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/format.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/label/#format') for the value displayed by a label. Moreover, you are not limited to displaying scale values only - you can customize the label's text per your requirements using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/label/#customizeText') property.

- **Appearance**	
The font style used for displaying the label text can be varied using properties of the [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/font '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/label/font/') configuration object. In addition, scale labels can be indented from their ticks using the [indentFromTick](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/scale/label/indentFromTick.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/label/#indentFromTick') property.