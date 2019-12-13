Each [major scale tick](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements/10%20Scale/20%20Major%20Scale%20Ticks.md '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Scale/Major_Scale_Ticks') is accompanied with a scale label. This label displays the value of the tick.

![ChartJS RangeSelector](/images/ChartJS/RangeSelectorScaleLabels.png)

To customize scale labels, use the options of the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/') configuration object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		scale: {
		// ...
			label: {
				// ...
			}
		}
	};
 
 A brief overview of the scale label options is given below.

- **Visibility**	
 By default, scale labels are visible. To hide them, set the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#visible') option to **false**.

- **Text Customization**	
You can specify a [format](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#format') for the value displayed by a label. Moreover, you are not limited to displaying the tick value only - you can customize the label's text per your requirements using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#customizeText') option.

- **Appearance**	
The font style used for displaying the label text can be varied using options of the [font](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/font/') configuration object. In addition, scale labels can be indented from the scale itself using the [topIndent](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label/topIndent.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#topIndent') option.
