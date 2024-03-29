Call the [DevExpress.viz.getPalette(paletteName)](/api-reference/50%20Common/utils/viz/getPalette(paletteName).md '/Documentation/ApiReference/Common/utils/viz/#getPalettepaletteName') method to get a registered [predefined](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/palette.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#palette') or [custom palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/10%20Palettes/20%20Implement%20a%20Custom%20Palette.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes/Implement_a_Custom_Palette'). The method's description provides information about the structure of the returned object.

---
##### jQuery

    <!-- tab: index.js -->
    const palette = DevExpress.viz.getPalette("Material");
    // ===== or when using modules =====
    import { getPalette } from "devextreme/viz/palette";
    
    let palette = getPalette("Material");

##### Angular

    <!-- tab: app.component.ts -->
    import { getPalette } from "devextreme/viz/palette";
    
    let palette = getPalette("Material");

##### Vue

    <!-- tab: App.vue -->
    import { getPalette } from "devextreme/viz/palette";
    
    let palette = getPalette("Material");

##### React

    <!-- tab: App.js -->
    import { getPalette } from "devextreme/viz/palette";
    
    let palette = getPalette("Material");

---