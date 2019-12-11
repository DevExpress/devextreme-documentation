---
dep: ..\layers\customize.md
type: function(marker)
---
---
##### notUsedInTheme

##### deprecated
Use the **layers** | **customize** option instead.

##### shortDescription
Specifies the function that customizes each marker individually.

##### param(marker): Marker object
The marker to be customized.

##### return: Marker configuration
A configuration object for the marker.

---
When implementing a function for this option, use the fields of the [Marker](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') object. To access this object, use the function's parameter or the **this** object.

The **customize** function should return the object that contains options to be changed for a certain area. These options are listed below.

- [borderColor](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/borderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#borderColor')
- [borderWidth](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/borderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#borderWidth')
- [color](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#color')
- [hoveredBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/hoveredBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#hoveredBorderColor')
- [hoveredBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/hoveredBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#hoveredBorderWidth')
- [hoveredColor](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/hoveredColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#hoveredColor')
- [selectedBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/selectedBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#selectedBorderColor')
- [selectedBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/selectedBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#selectedBorderWidth')
- [selectedColor](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/selectedColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#selectedColor')
- **isSelected**	
Specifies if a marker is selected when the map is created. To select a marker at runtime, use the [selected(state)](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Marker/3%20Methods/selected(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selectedstate') method.
- **text**	
Specifies the text that accompanies a marker.