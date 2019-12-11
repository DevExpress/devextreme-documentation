It is not always necessary to deliver stylesheets with a published application. There are times when it is best to use a link to these libraries from a Content Delivery Network (CDN). This can improve the performance of your applications.

The DevExpress CDN hosts DevExtreme stylesheets and enables you to easily add them to your applications. Links to the required files should be added in the following manner.

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_1/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_1/css/dx.ios7.default.css" />


[note] An application should include a link to only one theme stylesheet. Otherwise, widgets can be displayed incorrectly.

If you use UI widgets within a [DevExtreme application](/concepts/Common/05%20Introduction%20to%20DevExtreme/10%20Mobile%20Development/10%20Overview/20%20SPA%20Framework.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework'), the application automatically selects the appropriate theme depending on the platform it is working in. Therefore, a DevExtreme application should include links to stylesheets for all desired [themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/'). Note that a stylesheet theme link looks like the following in this case.

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_1/css/dx.common.css" />
    <link rel="dx-theme" data-theme="ios.default" href="https://cdn3.devexpress.com/jslib/minor_16_1/css/dx.ios7.default.css" />

[note]The "dx-theme" links must go before DevExtreme scripts.

[note][Font icons](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') that are linked in CSS themes are also located on CDN.

For details on linking DevExtreme themes, refer to the [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') article.
