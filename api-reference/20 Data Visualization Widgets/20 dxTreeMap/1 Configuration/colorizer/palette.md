---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: array | string
---
---
##### shortDescription
Sets the palette to be used for colorizing tiles.

---
This option accepts either the name of a [predefined palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') or an array of colors. The array can include the following colors.

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* [Predefined SVG colors](https://www.w3.org/TR/SVG/types.html#ColorKeywords)

If the number of tiles is greater than the number of colors in the palette, the colors are repeated with slight modification.

When implementing a custom palette, take into account the [type](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type') of a colorizer you use. The *"discrete"* type accepts an indefinite number of colors in the palette.

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