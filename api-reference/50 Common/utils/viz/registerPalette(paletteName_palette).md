---
id: viz.registerPalette(paletteName, palette)
module: viz/palette
export: registerPalette
---
---
##### shortDescription
Registers a new palette.

##### param(paletteName): String
The palette's name.

##### param(palette): Object
The palette's settings.

---
The palette settings is an object of the following structure:

    <!--JavaScript-->{
        // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], 
        // Applies in the CircularGauge and LinearGauge
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
        // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
        gradientSet: ['#78b6d9', '#eeba69'] 
    }