---
id: dxTreeMap.Options.colorField
type: String
default: 'color'
---
---
##### shortDescription
Specifies the name of the [data source](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#dataSource') field that provides colors for tiles.

---
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the color specified directly in the data object.      
 - Colorizing tiles using the [colorizer](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/').        
 - Specifying a single color for all tiles using the **tile**.[color](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/#color') property.       

You can use the first approach only if objects of your data source contain a field providing colors. If so, assign the name of this field to the **colorField** property. The colors must have one of the following formats:

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* <a href="https://www.w3.org/TR/SVG11/types.html#ColorKeywords" target="_blank">Predefined SVG colors</a>

This approach has the highest priority among the others. To get familiar with the other two approaches, see the [colorizer](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/') and **tile**.[color](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/#color') property descriptions.