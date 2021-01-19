When you use the scale of the *date-time* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/valueType.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#valueType'), scale markers can be displayed. A scale marker consists of a separator and a text representing additional information on a scale tick. For example, when scale labels display tick values specified in months, a scale marker is placed at the first month of a year and displays the value of this year.

![ChartJS RangeSelector](/images/ChartJS/RangeSelectorScaleMarkers.png)

To customize scale markers, use the properties of the [marker](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/') configuration object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		scale: {
		// ...
			marker: {
				// ...
			}
		}
	};
 
A brief overview of scale marker properties is given below.

- **Visibility**	
 By default, scale markers are visible. To hide them, set the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/visible.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/#visible') property to **false**.

- **Text Customization**	
You can specify a [format](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/label/format.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/label/#format') for the value displayed by a marker. Moreover, you are not limited to displaying this value only - you can customize the marker's text per your requirements using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/label/#customizeText') property.

- **Layout**	
There are several properties specifying the indents of marker elements. Use the [topIndent](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/topIndent.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/#topIndent') property to set the distance between scale markers and scale labels. Also, the marker text can be indented from the separator using the [textTopIndent](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/textTopIndent.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/#textTopIndent') and [textLeftIndent](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/textLeftIndent.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/#textLeftIndent') properties. In addition, you can set the height of marker separators. Use the [separatorHeight](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/marker/separatorHeight.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/marker/#separatorHeight') property to do this.
