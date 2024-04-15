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

##### param(palette): Enums.Palette | Array<String>
A palette name or an array of colors. See [palette](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/palette.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#palette') for more information.

##### param(count): Number
The number of colors in the resulting subset.

##### param(options): Object
Optional settings.

##### field(options.baseColorSet): Enums.PaletteColorSet
The color set that provides the colors. The default value is *"simpleSet"*.        
See [getPalette(paletteName)](/api-reference/50%20Common/utils/viz/getPalette(paletteName).md '/Documentation/ApiReference/Common/utils/viz/#getPalettepaletteName') for more information.

##### field(options.paletteExtensionMode): Enums.PaletteExtensionMode
The mode in which the palette should be extended when it contains less colors than specified in the **count** parameter. The default value is *"blend"*.    
See [paletteExtensionMode](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/paletteExtensionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#paletteExtensionMode') for more information.

---
The following code generates ten colors from the Material palette's gradient color set:

---
##### jQuery

    <!-- tab: index.js -->
    var colors = DevExpress.viz.generateColors('Material', 10, { baseColorSet: 'gradientSet' });
    // ===== or when using modules =====
    import { generateColors } from 'devextreme/viz/palette';
     
    let colors = generateColors('Material', 10, { baseColorSet: 'gradientSet' });

##### Angular

    <!-- tab: app.component.ts -->
    import { generateColors } from 'devextreme/viz/palette';
     
    let colors = generateColors('Material', 10, { baseColorSet: 'gradientSet' });

##### Vue

    <!-- tab: App.vue -->
    import { generateColors } from 'devextreme/viz/palette';
     
    let colors = generateColors('Material', 10, { baseColorSet: 'gradientSet' });

##### React

    <!-- tab: App.js -->
    import { generateColors } from 'devextreme/viz/palette';
     
    let colors = generateColors('Material', 10, { baseColorSet: 'gradientSet' });

---

Use the generated colors to paint elements of different UI components in identical colors. For instance, you can assign the same colors to series in two different charts to indicate the visualized information is connected.