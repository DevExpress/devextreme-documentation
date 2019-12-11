The easiest way to implement a custom palette is to assign an array of colors to the **palette** option (see [Apply a Palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/10%20Apply%20a%20Palette.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes/Apply_a_Palette')). However, this approach is only useful for a single widget or several widgets of the same type.

In other cases, we recommend implementing a custom palette as an object of the following structure:

    <!--JavaScript-->
    var myPalette = {
        // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], 
        // Applies in the CircularGauge and LinearGauge
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
        // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
        gradientSet: ['#78b6d9', '#eeba69'] 
    };

The custom palette should be registered using the [registerPalette(paletteName, palette)](/api-reference/50%20Common/utils/viz/registerPalette(paletteName_palette).md '/Documentation/ApiReference/Common/utils/viz/#registerPalettepaletteName_palette') method:

    <!--JavaScript-->
    DevExpress.viz.registerPalette("myCustomPalette", myPalette);
    // ===== or when using modules =====
    import { registerPalette } from "devextreme/viz/palette";
    
    registerPalette("myCustomPalette", myPalette);

To apply it, assign the name used in the registration to the widgets' **palette** options as shown in the [Apply a Palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/10%20Apply%20a%20Palette.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes/Apply_a_Palette') article.

    
