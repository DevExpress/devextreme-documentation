Call the [DevExpress.viz.getPalette(paletteName)](/api-reference/50%20Common/utils/viz/getPalette(paletteName).md '/Documentation/ApiReference/Common/utils/viz/#getPalettepaletteName') method to get a registered [predefined](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette') or [custom palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/20%20Implement%20a%20Custom%20Palette.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes/Implement_a_Custom_Palette'). The method's description provides information about the structure of the returned object.

    <!--JavaScript-->
    var palette = DevExpress.viz.getPalette("Material");
    // ===== or when using modules =====
    import { getPalette } from "devextreme/viz/palette";
    
    let palette = getPalette("Material");
