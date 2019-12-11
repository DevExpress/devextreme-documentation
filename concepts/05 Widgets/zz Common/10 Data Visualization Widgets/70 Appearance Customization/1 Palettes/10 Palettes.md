Certain charts contain several series at a time. Similarly, the gauge range container can contain several ranges, and a vector map consists of several areas. In such instances, a color would need to be set for each series, range or area individually. Instead, you can use built-in palettes - sets of colors.

Palettes can be specified and used in the following widgets.

- Chart
- PieChart
- PolarChart
- CircularGauge
- LinearGauge
- BarGauge
- VectorMap
- TreeMap
- Funnel

By using the palettes, you can be sure that the colors mix well with each other and create beautiful charts. If the number of series (in **Chart**), series points (in **PieChart**), ranges (in **CircularGauge** and **LinearGauge**), bars (in **BarGauge**) or areas (in **VectorMap**) is greater than the number of colors in the palette, the palette colors are repeated with a slight modification.

<p>The "default" palette is used by default. To apply another palette, use the <b>palette</b> option.</p>

    <!--JavaScript-->var chartOptions = {
        palette: 'Soft Pastel',
        //...	
    };

Below, you can try out the predefined palettes in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/DataVisualization/Guides/VizPalettes/palettes.html, /Content/Applications/17_2/DataVisualization/Guides/VizPalettes/palettes.js, /Content/Applications/17_2/DataVisualization/Guides/VizPalettes/palettes.css"></div>

The following subsections provide information about the available palette customizations.