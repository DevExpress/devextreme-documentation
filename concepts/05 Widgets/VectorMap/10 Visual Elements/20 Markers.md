A marker is a point on a map accompanied by text that helps you flag certain places on the map. For example, you can use map markers to designate cities.

Four types of markers are available in **VectorMap**: dot, bubble, pie and image, each of which corresponds to particular representational needs. The image below demonstrates the appearance of each marker type. Note that despite the fact that this image depicts all four types of markers on one map, an actual **VectorMap** can contain markers of only one type at a time.

![DevExtreme ChartJS VectorMap](/images/ChartJS/MapMarkerTypes.png)

<a href="/Demos/WidgetsGallery/Demo/Vector_Map/ImageMarkers/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Image Markers Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Vector_Map/ImageMarkers/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Bubble Markers Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Vector_Map/PieMarkers/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Pie Markers Demo</a>

#####See Also#####
- [Vector Map - Data for Markers](/concepts/05%20Widgets/VectorMap/20%20Providing%20Data/20%20Data%20for%20Markers.md '/Documentation/Guide/Widgets/VectorMap/Providing_Data#Data_for_Markers')

You can configure map markers using fields of the [layer](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/') object, whose [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type') is *'marker'*. To specify the type of markers, set the [elementType](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type') field of this object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			// ...
			type: 'marker',
			elementType: 'bubble' // 'dot' | 'pie' | 'image'
		},
		// ...
		]
	};

The majority of marker features are configured using options that are common for all marker types. However, there are some features that are peculiar to a particular marker type. These features are configured using options specific for this marker type.

The following list gives an overview of the main features of all marker types and options that control them.

* **Label**		
To specify the text that accompanies a map marker, use the marker's **label**.[dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/#dataField') option. The text itself should be specified as one of the marker **attributes** in the objects of the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') array. You can disable all marker labels by setting the **label**.[enabled](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/#enabled') option to **false**. You can also configure the label's font using the **label**.[font](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/font/') object.

* **Color**		
You can specify the color of dot and bubble markers using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#color') option. To colorize pie markers, set the [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#palette') option instead. Additionally, you can change the color of the marker border using the [borderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/borderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderColor') option.

* **Size**		
To specify the diameter of dot and pie markers in pixels, set the [size](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/size.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#size') option. The size of bubble markers cannot be specified explicitly, as it depends on the value a bubble marker represents. Instead, you can specify the size of the smallest and the largest bubbles. For this purpose, use the [minSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/minSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#minSize') and [maxSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/maxSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#maxSize') options.

* **Appearance in the Hovered State**		
When a user hovers the mouse pointer over a marker, this marker enters the [hovered state](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction/30%20Hovering/10%20Hovering.md '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Hovering'). You can specify the color of a dot or bubble marker in this state using the [hoveredColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor') option. Additionally, you can change the appearance of the marker border using the [hoveredBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor') and [hoveredBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderWidth') options.

* **Appearance in the Selected State**		
If you have implemented the [selection](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction/50%20Selection/10%20Selection.md '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Selection') capability in your map, customize the appearance of markers in the selected state. Similarly to the appearance of markers in the hovered state, you can specify a color for dot and bubble markers in the selected state using the [selectedColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor') option and the appearance of the marker border using the [selectedBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor') and [selectedBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderWidth') options.

Specified directly in the **layers** object, these options are applied to all map markers. To set them for specific markers, determine these options in the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use an **elements** array to get all [layer elements](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/'). This object is passed to the **customize** function as the argument.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'marker',
			customize: function (elements) {
				for (i in elements) {
					if (elements[i].attribute('name') == 'Austin')
						elements[i].applySettings({ color: 'blue' });  // paints the 'Austin' area in blue
				});
			}
		}]
	};