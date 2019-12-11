---
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
The palette settings is an object of the following structure.

    <!--JavaScript-->{
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart", "BarGauge", "Funnel",
                                                                            // and "TreeMap" with a gradient or range colorizer 
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
        gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap" and "TreeMap" with a gradient or range colorizer 
    }