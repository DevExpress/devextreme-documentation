---
id: dxTreeMap.Options.colorizer.palette
type: Array<String> | Enums.Palette
default: 'Material'
---
---
##### shortDescription
Sets the palette to be used to colorize tiles.

---
#include dataviz-ref-palette

When implementing a custom palette, take into account the [type](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/#type') of a colorizer you use. The *"discrete"* type accepts an indefinite number of palette colors.

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
- [Palettes](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes')
- **colorizer**.[paletteExtensionMode](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer/paletteExtensionMode.md '{basewidgetpath}/Configuration/colorizer/#paletteExtensionMode')
- [DevExpress.viz.generateColors(palette, count, options)](/api-reference/50%20Common/utils/viz/generateColors(palette_count_options).md '/Documentation/ApiReference/Common/utils/viz/#generateColorspalette_count_options')