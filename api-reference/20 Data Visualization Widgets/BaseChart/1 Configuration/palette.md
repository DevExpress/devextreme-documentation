---
default: 'Material'
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
---
---
##### shortDescription
Sets the palette to be used for colorizing series and their elements.

---
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#####See Also#####
- [Palettes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes')
- [paletteExtensionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/paletteExtensionMode.md '{basewidgetpath}/Configuration/#paletteExtensionMode')
- **series**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/color.md '{basewidgetpath}/Configuration/series/#color')