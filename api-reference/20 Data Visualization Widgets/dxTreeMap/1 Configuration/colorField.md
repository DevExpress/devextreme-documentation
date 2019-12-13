---
id: dxTreeMap.Options.colorField
type: String
default: 'color'
---
---
##### shortDescription
Specifies the name of the [data source](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource') field that provides colors for tiles.

---
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the color specified directly in the data object.      
 - Colorizing tiles using the [colorizer](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/').        
 - Specifying a single color for all tiles using the **tile**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color') option.       

You can use the first approach only if objects of your data source contain a field providing colors. If so, assign the name of this field to the **colorField** option. The colors must have one of the following formats:

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* <a href="http://www.w3.org/TR/SVG/types.html#ColorKeywords" target="_blank">Predefined SVG colors</a>

This approach has the highest priority among the others. To get familiar with the other two approaches, see the [colorizer](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/') and **tile**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color') option descriptions.