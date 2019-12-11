---
dep: ..\layers\customize.md
type: function(area)
---
---
##### notUsedInTheme

##### deprecated
Use the **layers** | **customize** option instead.

##### shortDescription
Specifies the function that customizes each area individually.

##### param(area): areaObjects
The area to be customized.

##### return: dxVectorMap_Options_areaSettings
A configuration object for the area.

---
When implementing a function for this option, use the fields of the [Area](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') object. To access this object, use the function's parameter or the **this** object.

The **customize** function should return the object that contains options to be changed for a certain area. These options are listed below.

- [borderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/borderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#borderColor')
- [borderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/borderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#borderWidth')
- [color](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#color')
- [hoveredBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/hoveredBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#hoveredBorderColor')
- [hoveredBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/hoveredBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#hoveredBorderWidth')
- [hoveredColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/hoveredColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#hoveredColor')
- [selectedBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/selectedBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#selectedBorderColor')
- [selectedBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/selectedBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#selectedBorderWidth')
- [selectedColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/selectedColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#selectedColor')
- **isSelected**	
Specifies whether or not an area is selected when the map is created. To select an area at runtime, use the [selected(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area/3%20Methods/selected(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selectedstate') method.
- **paletteIndex**	
Specifies the index of the color when using [palettes](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#palette'). This option is ignored when the **color** field is specified.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>