---
id: viz.getPalette(paletteName)
module: viz/palette
export: getPalette
---
---
##### shortDescription
Gets the color sets of a predefined or registered palette.

##### return: Object
The palette's settings.

##### param(paletteName): String
The palette's name.

---
The returned value is an object of the following structure:

    <!--JavaScript-->{
        // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], 
        // Applies in the CircularGauge and LinearGauge
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
        // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
        gradientSet: ['#78b6d9', '#eeba69'] 
    }

The built-in palettes are listed in the [Appearance Customization](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes') topic.