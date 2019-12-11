---
module: viz/palette
export: registerPalette
---
---
##### shortDescription
Registers a new palette.

##### param(paletteName): String
The new palette name.

##### param(palette): Object
The new palette settings.

---
The palette settings is an object of the following structure.

    <!--JavaScript-->{
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart" and "BarGauge" 
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
        gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap"
    };