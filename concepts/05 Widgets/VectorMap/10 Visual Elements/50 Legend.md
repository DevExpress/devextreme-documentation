A legend is a supplementary map element that helps end-users identify a map area or a map marker.

![DevExtreme ChartJS VectorMap](/images/ChartJS/VectorMap_Legend.png)

The **VectorMap** widget can display several legends simultaneously. To configure the legends of your map, define one or more elements of the [legends](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/') array.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		legends: [{
			// First legend configuration
		}, {
			// Second legend configuration
		}]
	};

To display a legend, define its [source](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source') option according to the legend's purpose and assign the function that will generate the legend labels to the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeText') option of the legend.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		legends: [{
			source: {
				grouping: "color",	// | 'size'
				layer: 'myLayerName'
			},
			customizeText: function (arg) {
				// Return a text according to arg
			}
		}]
	};

The following list provides a brief overview of legend features that can be configured using the elements of the [legends](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/') array.

* **Visibility**		
To hide the configured legend, set the [visible](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#visible') option to **false**.

* **Location**		
Use the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#horizontalAlignment') and [verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#verticalAlignment') options to specify the legend's position on the map. In addition, you can change the interval between the legend and the map edges using the [margin](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/margin '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/margin/') object.

* **Appearance**		
Use the [backgroundColor](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/backgroundColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#backgroundColor') option and the [border](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/border/') object to configure the legend's appearance. You can also customize the legend's font using the [font](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/font/') object.

* **Items Layout**		
Legend items can be placed in a row or a column. To specify how to arrange items, use the [orientation](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#orientation') option. There can also be several rows and columns in a legend. To set the number of rows and columns to be used, use the legend's [rowCount](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/rowCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#rowCount') and [columnCount](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/columnCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#columnCount') options. These rows and columns will be placed within a legend separated by a space between each other, and from the legend's border. To specify the spacing parameters, use the legend's [rowltemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#rowltemSpacing), [columnltemSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#columnltemSpacing), [paddingLeftRight](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/paddingLeftRight.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#paddingLeftRight') and [paddingTopBottom](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/paddingTopBottom.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#paddingTopBottom') options.

* **Hint**		
In addition to the text label describing a legend item, you can specify hints which will appear when the item is hovered. Assign the function that will generate hints to the [customizeHint](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/customizeHint.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeHint') option.