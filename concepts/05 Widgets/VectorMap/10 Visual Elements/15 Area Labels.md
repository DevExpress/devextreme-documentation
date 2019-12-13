An area label is a text that accompanies a [map area](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/10%20Areas.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas'). Usually, an area label displays the name of a certain geographical object, such as a country, a continent, etc. A label disappears when its area is too small and the text does not fit it. To see the small area labels, zoom in the map.

![Area Labels](/images/ChartJS/VectorMap_Labels.png)

You can configure area labels using fields of the **layer**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/') object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'area',
			label: {
				// area labels settings are specified here
			}
		}]
	};

[Map data](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') format allows you to set a number of attributes for each map area. Make sure your map data provides an attribute that can be used for labeling. To use the information provided by this attribute in a label, assign the attribute name to the  **layer**.**label**.[dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/#dataField') option. The [predefined data sources](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#VectorMap_Providing_Data_Data_for_Areas_Using_a_Script) already include the *'name'* attribute containing the geographical name of [areas](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/10%20Areas.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas').

If you use a [JSON object](/concepts/05%20Widgets/VectorMap/20%20Providing%20Data/10%20Data%20for%20Areas/30%20Using%20a%20JSON%20object.md '/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas/Using_a_JSON_object') or a [Binary Source](/concepts/05%20Widgets/VectorMap/20%20Providing%20Data/10%20Data%20for%20Areas/40%20Using%20a%20Binary%20Source/10%20Using%20a%20Binary%20Source.md '/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas/Using_a_Binary_Source') as your [map data](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource'), make sure the field you need to use for area labels is recognized by the [attribute(name)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename') method correctly.

To display area labels on a map, set the **layer**.**label**.[enabled](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/#enabled') option to **true**. You can also customize text appearance using the [font](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/font/') object.