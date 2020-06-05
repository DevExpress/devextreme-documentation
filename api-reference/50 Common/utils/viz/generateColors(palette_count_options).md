---
id: viz.generateColors(palette, count, options)
module: viz/palette
export: generateColors
---
---
##### shortDescription
Returns a subset of palette colors.

##### return: Array<String>
Colors in hexadecimal format.

##### param(palette): Array<String> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
A palette name or an array of colors. See [palette](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette') for more information.

##### param(count): Number
The number of colors in the resulting subset.

##### param(options): Object
Optional settings.

##### field(options.baseColorSet): 'simpleSet' | 'indicatingSet' | 'gradientSet'
The color set that provides the colors. The default value is *"simpleSet"*.        
See [getPalette(paletteName)](/api-reference/50%20Common/utils/viz/getPalette(paletteName).md '/Documentation/ApiReference/Common/utils/viz/#getPalettepaletteName') for more information.

##### field(options.paletteExtensionMode): 'alternate' | 'blend' | 'extrapolate'
The mode in which the palette should be extended when it contains less colors than specified in the **count** parameter. The default value is *"blend"*.    
See [paletteExtensionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/paletteExtensionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#paletteExtensionMode') for more information.

---
The following code generates ten colors from the Material palette's gradient color set:

    <!--JavaScript-->
    var colors = DevExpress.viz.generateColors('Material', 10, { baseColorSet: 'gradientSet' });
    // ===== or when using modules =====
    import { generateColors } from 'devextreme/viz/palette';
     
    let colors = generateColors('Material', 10, { baseColorSet: 'gradientSet' });

Use the generated colors to paint elements of different widgets in identical colors. For instance, you can assign the same colors to series in two different charts to indicate the visualized information is connected.