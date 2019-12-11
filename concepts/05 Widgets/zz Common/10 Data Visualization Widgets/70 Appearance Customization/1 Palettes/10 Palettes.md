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

By using the palettes, you can be sure that the colors mix well with each other and create beautiful charts. If the number of series (in **Chart**), series points (in **PieChart**), ranges (in **CircularGauge** and **LinearGauge**), bars (in **BarGauge**) or areas (in **VectorMap**) is greater than the number of colors in the palette, the palette colors are repeated with a slight modification.

The following built-in palettes are available.

<img src="/Content/images/doc/16_2/ChartJS/PaletteDefault.png" alt="Palette Default"/>
<img src="/Content/images/doc/16_2/ChartJS/PaletteSoftPastel.png" alt="Palette Soft Pastel"/>
<img src="/Content/images/doc/16_2/ChartJS/PaletteHarmonyLight.png" alt="Palette Harmony Light"/><br />
<img src="/Content/images/doc/16_2/ChartJS/PalettePastel.png" alt="Palette Pastel"/>
<img src="/Content/images/doc/16_2/ChartJS/PaletteBright.png" alt="Palette Bright"/>
<img src="/Content/images/doc/16_2/ChartJS/PaletteSoft.png" alt="Palette Soft"/><br />
<img src="/Content/images/doc/16_2/ChartJS/PaletteOcean.png" alt="Palette Ocean"/>
<img src="/Content/images/doc/16_2/ChartJS/PaletteVintage.png" alt="Palette Vintage"/>
<img src="/Content/images/doc/16_2/ChartJS/PaletteViolet.png" alt="Palette Violet"/>

<p>The "default" palette is used by default. To apply another palette, use the <b>palette</b> option.</p>

    <!--JavaScript-->var chartOptions = {
        palette: 'Soft Pastel',
        //...	
    };

The following subsections provide information about the available palette customizations.