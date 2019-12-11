To apply a custom theme for all widgets on the page, use the **DevExpress.viz.currentTheme** method passing the name of your theme as a parameter.

    <!--JavaScript-->DevExpress.viz.currentTheme('myCustomTheme');

<p>To use a custom theme for a particular widget only, set the theme name to the <b>theme</b> configuration option.</p>

    <!--JavaScript-->var chartOptions = {
        theme: 'myCustomTheme',
        //...	
    };

