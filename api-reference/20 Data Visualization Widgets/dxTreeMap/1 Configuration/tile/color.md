---
id: dxTreeMap.Options.tile.color
type: String
default: '#$5f8b95'
---
---
##### shortDescription
Specifies a single color for all tiles.

---
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the [color specified directly](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField') in the data object.      
 - Colorizing tiles using the [colorizer](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/').        
 - Specifying a single color for all tiles using the **tile**.**color** option.       

Use the latter approach only if you need to color all tiles uniformly. The **tile**.**color** option supports the following colors.

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* <a href="http://www.w3.org/TR/SVG/types.html#ColorKeywords" target="_blank">Predefined SVG colors</a>

This approach has the lowest priority among the others. To find more about the other two approaches, see the [colorField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#colorField') and [colorizer](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/') option descriptions.