To use a custom palette in different charts, gauges and maps, define and register that palette in the following way.

    <!--JavaScript-->var myPalette = {
        simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart", "BarGauge", "Funnel",
                                                                            // and "TreeMap" with a gradient or range colorizer 
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
        gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap" and "TreeMap" with a gradient or range colorizer 
    };
    DevExpress.viz.registerPalette('myCustomPalette', myPalette);

Note that different palettes apply to different widgets. **Simple set** is used to color chart series in **Chart** and **PieChart** and bars in **BarGauge**. **Indicating set** is used to color ranges in **CircularGauge** and **LinearGauge**. **Gradient set** is used to color map areas in **VectorMap**.

To use the registered palette, assign the palette name to the **palette** option of the required widgets.