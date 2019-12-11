---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: Array | String
---
---
##### shortDescription
Specifies the name of the palette or a custom range of colors to be used for coloring a layer.

---
A palette defines a range of colors that are used to paint layer elements. This range is divided into segments using the value assigned to the [paletteSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/paletteSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#paletteSize') option. Each segment contributes a color into a resulting array of colors. The more of these segments, the greater the variety of colors in this array. All available palettes are listed in the accepted values.

In order to apply a palette to a map, follow the next steps.

- Assign the name of the required palette (or an array of two colors) to the **palette** option.
- Use the **paletteSize** option to define how many colors should be produced from the palette or array specified in the previous step.
- Specify the index of the color from the colors array, which should be used for coloring an area, using the **paletteIndex** field of the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') callback function.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage` and `Violet`.