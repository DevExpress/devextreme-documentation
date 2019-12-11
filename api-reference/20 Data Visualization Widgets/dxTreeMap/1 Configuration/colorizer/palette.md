---
default: 'Material'
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
---
---
##### shortDescription
Sets the palette to be used to colorize tiles.

---
#include dataviz-ref-palette

#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}

When implementing a custom palette, take into account the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type') of a colorizer you use. The *"discrete"* type accepts an indefinite number of palette colors.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'discrete',
            palette: ['red', 'blue', 'green', 'yellow', ...]    
        }
    }

But the *"gradient"* and *"range"* types require strictly two colors.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'gradient',
            palette: ['red', 'blue'],
            range: [0, 1000]
        }
    }

#####See Also#####
- [Palettes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes')
- **colorizer**.[paletteExtensionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer/paletteExtensionMode.md '{basewidgetpath}/Configuration/colorizer/#paletteExtensionMode')