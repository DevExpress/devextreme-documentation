---
id: dxTreeMap.Options.colorizer
type: Object
---
---
##### shortDescription
Manages the color settings.

---
There are several approaches to colorizing tiles.

 - Colorizing each tile uniquely into the [color specified directly](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#colorField') in the data object.      
 - Colorizing tiles using the colorizer.        
 - Specifying a single color for all tiles using the **tile**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/#color') property.    
 
If for some reason you cannot use the first approach, colorize tiles using the **colorizer** object. It offers three colorization algorithms: *"discrete"*, *"gradient"* and *"range"*. For more information on how to use each algorithm, refer to the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/#type') property description.

To find out how else you can colorize tiles, see the [colorField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#colorField') and **tile**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/#color') property descriptions.


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Colorization/"
}