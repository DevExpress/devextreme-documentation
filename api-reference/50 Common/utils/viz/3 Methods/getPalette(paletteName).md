---
module: viz/palette
export: getPalette
---
---
##### shortDescription
Gets the color sets of a predefined or registered palette.

##### param(paletteName): String
The palette's name.

##### return: Object
The palette's settings.

---
The returned value is an object of the following structure.

    <!--JavaScript-->{
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart", "BarGauge", "Funnel",
                                                                            // and "TreeMap" with a gradient or range colorizer 
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
        gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap" and "TreeMap" with a gradient or range colorizer 
    }

The built-in palettes are listed in the [Appearance Customization](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes') topic.