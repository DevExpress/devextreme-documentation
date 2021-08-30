Axis labels represent textual values for [axis ticks](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axis_Ticks').

![Axis Labels](/images/ChartJS/Polar_AxisLabels.png)

Axis labels are generated automatically. However, you can change their settings if your task requires that. Label settings are set using the [label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/label/') object of the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		commonAxisSettings: {
			label: {
				// ...
			}
		},
		// ...
	};

The following list provides an overview of label properties.

* **Visibility**		
To mark point labels as visible/invisible, use the **label** object's [visible](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/label/visible.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/label/#visible') property.

* **Intelligent Arrangement**		
If labels overlap each other in certain scenarios, specify how to resolve this issue using the [overlappingBehavior](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/label/overlappingBehavior.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/label/#overlappingBehavior') property.

* **Font Settings**		
To specify the required font settings for label text, specify properties of the **label**.[font](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/label/font '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/label/font/') object.

* **Text Customization and Formatting**			
You can change the way the default text is displayed by labels. For this purpose, use the [format](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/label/format.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/label/#format')  label property. If it is required, you can set a custom text to be shown by labels. For this purpose, implement a function that returns the required text and assign it to the [customizeText](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/label/#customizeText') property of the **label** object. For details on data formatting, refer to the [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/') topic.

* **Label Position**		
You can shift labels closer to or farther from the axis. For this purpose, use the **label** object's [indentFromAxis](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/label/indentFromAxis.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/label/#indentFromAxis') property.