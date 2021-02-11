---
id: dxVectorMap.Options.layers.palette
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
default: 'Material'
---
---
##### shortDescription
The name of a predefined palette or a custom range of colors to be used as a palette.

---
A palette defines a range of colors that are used to paint layer elements. This range is divided into segments by the value of the [paletteSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/paletteSize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#paletteSize') property. Each segment contributes a color into a resulting array of colors. The more of these segments, the greater the variety of colors in this array. Available predefined palettes are listed in the accepted values.

To apply a palette to a map, follow the next steps:

- Assign the name of the required palette (or an array of two colors) to the **palette** property.
- Specify the required amount of colors from the palette in the **paletteSize** property.
- Specify the index of a [layer element](/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/)'s color in the [paletteIndex](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#paletteIndex) property within the [customize](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize) function.
- Use the [applySettings(settings)](/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#applySettingssettings) method to colorize each layer element.

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}