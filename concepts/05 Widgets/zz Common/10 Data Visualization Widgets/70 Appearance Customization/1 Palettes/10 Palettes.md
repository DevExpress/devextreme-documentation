Certain charts can contain several series simultaneously. Similarly, the range container in a gauge can contains several ranges, and a vector map several areas. In such instances, a color would need to be set for each series, range or area individually. However, you can also use a palette - a set of colors that mix well with each other.

The following widgets support palettes:

- **Chart**, **PieChart**, and **PolarChart**
- **CircularGauge**, **LinearGauge**, and **BarGauge**
- **VectorMap**
- **TreeMap**
- **Funnel**

The "Default" palette is used by default. To apply another palette, use the **palette** option.

    <!--JavaScript-->var chartOptions = {
        palette: 'Soft Pastel',
        //...	
    };

Below, you can see the predefined palettes.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/VizPalettes/palettes.html, /Content/Applications/18_1/DataVisualization/Guides/VizPalettes/palettes.js, /Content/Applications/18_1/DataVisualization/Guides/VizPalettes/palettes.css"></div>

The following subsections provide information about the available palette customizations:
