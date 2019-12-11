Register the [required .css files](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') in the "webpack.config.vendor.js" file located in the root folder.

    entry: { 
        vendor: [ 
        ...
            'devextreme/dist/css/dx.common.css',
            'devextreme/dist/css/dx.light.css'
        ] 
    }

![Add DevExtreme css files to webpack config](/images/DevExtreme/AddDevExtremeCssToWebpackConfig.png)

After Webpack is configured, run the following command in the command prompt to update the vendor bundle.

    webpack --config webpack.config.vendor.js