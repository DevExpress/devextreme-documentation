---
id: BaseGauge.Options.rangeContainer.palette
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
default: 'Material'
---
---
##### shortDescription
Specifies the palette to be used for colorizing ranges in the range container.

---
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/PaletteForRanges/"
}

#####See Also#####
- [Palettes](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes')
- [paletteExtensionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/paletteExtensionMode.md '{basewidgetpath}/Configuration/rangeContainer/#paletteExtensionMode')
- [DevExpress.viz.generateColors(palette, count, options)](/api-reference/50%20Common/utils/viz/generateColors(palette_count_options).md '/Documentation/ApiReference/Common/utils/viz/#generateColorspalette_count_options')
- **rangeContainer**.**ranges[]**.[color](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/ranges/color.md '{basewidgetpath}/Configuration/rangeContainer/ranges/#color')