---
dep: ..\layers\palette.md
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: Array | String
---
---
##### shortDescription
Specifies the name of the palette or a custom range of colors to be used for coloring a map.

---
A palette defines a range of colors that are used to paint areas on a map. This range is divided into segments using the value assigned to the [paletteSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/paletteSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#paletteSize') option. Each segment contributes a color into a resulting array of colors. The more of these segments, the greater the variety of colors in this array. All available palettes are listed in the accepted values.

In order to apply a palette to a map, follow the next steps.

- Assign the name of the required palette (or an array of two colors) to the **palette** option.
- Use the **paletteSize** option to define how many colors should be produced from the palette or array specified in the previous step.
- Specify the index of the color from the colors array, which should be used for coloring an area, using the **paletteIndex** field of the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#customize') callback function.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormappalette/"
}