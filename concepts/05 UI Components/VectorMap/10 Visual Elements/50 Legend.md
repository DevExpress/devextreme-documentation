A legend is a supplementary map element that helps end-users identify a map area or a map marker.

![DevExtreme ChartJS VectorMap](/images/ChartJS/VectorMap_Legend.png)

The **VectorMap** UI component can display several legends simultaneously. To configure the legends of your map, define one or more elements of the [legends](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/'') array.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		legends: [{
			// First legend configuration
		}, {
			// Second legend configuration
		}]
	};

To display a legend, define its [source](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#source) property according to the legend's purpose and assign the function that will generate the legend labels to the [customizeText](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#customizeText) property of the legend.

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

The following list provides a brief overview of legend features that can be configured using the elements of the [legends](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/'') array.

* **Visibility**		
To hide the configured legend, set the [visible](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#visible) property to **false**.

* **Location**		
Use the [horizontalAlignment](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#horizontalAlignment) and [verticalAlignment](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#verticalAlignment) properties to specify the legend's position on the map. In addition, you can change the interval between the legend and the map edges using the [margin](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''margin/) object.

* **Appearance**		
Use the [backgroundColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#backgroundColor) property and the [border](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''border/) object to configure the legend's appearance. You can also customize the legend's font using the [font](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''font/) object.

* **Items Layout**		
Legend items can be placed in a row or a column. To specify how to arrange items, use the [orientation](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#orientation) property. There can also be several rows and columns in a legend. To set the number of rows and columns to be used, use the legend's [rowCount](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#rowCount) and [columnCount](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#columnCount) properties. These rows and columns will be placed within a legend separated by a space between each other, and from the legend's border. To specify the spacing parameters, use the legend's [rowltemSpacing](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#rowItemSpacing), [columnltemSpacing](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#columnItemSpacing), [paddingLeftRight](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#paddingLeftRight) and [paddingTopBottom](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#paddingTopBottom) properties.

* **Hint**		
In addition to the text label describing a legend item, you can specify hints which will appear when the item is hovered. Assign the function that will generate hints to the [customizeHint](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/''#customizeHint) property.