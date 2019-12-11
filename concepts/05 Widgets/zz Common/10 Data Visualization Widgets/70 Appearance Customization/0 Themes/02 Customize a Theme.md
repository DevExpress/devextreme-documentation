If you are satisfied with the majority of option values in the applied predefined theme, but need a few of the option values changed, customize the theme. For this purpose, do the following.

- Introduce an object for a new theme and give a name to it.

        <!--JavaScript-->var myTheme = {
            name: 'myCustomTheme',    
        };

- Specify the required settings for each widget you use within separate objects.

        <!--JavaScript-->var myTheme = {
            name: 'myCustomTheme',
            chart: {
                // Theme options for "Chart"
            },
            pie: {
                // Theme options for "PieChart"
            },
            gauge: {
                // Theme options for "CircularGauge" and "LinearGauge"
            },
            barGauge: {
                // Theme options for "BarGauge"
            },
            rangeSelector: {
                // Theme options for "RangeSelector"
            },
            bullet: {
                // Theme options for "Bullet"
            },
            sparkline: {
                // Theme options for "Sparkline"
            },
            map: {
                // Theme options for "VectorMap"
            },
            treemap: {
                // Theme options for "TreeMap"
            },
            funnel: {
                // Theme options for "Funnel"
            }
        };

    The options that can be set in a theme are described in the [Reference](/Documentation/ApiReference/) section.

- Register your theme, indicating the theme that your theme is based on. For this purpose, use the <b>registerTheme</b> method.

        <!--JavaScript-->DevExpress.viz.registerTheme(myTheme,'generic.light');

