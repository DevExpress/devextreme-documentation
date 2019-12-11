You can find all the required stylesheets in your DevExtreme package (see [DevExtreme Packages](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/')).

To provide the required stylesheets for your application, place them into your project and provide links to them within the application page.

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="/css/dx.ios7.default.css" />

[note] An application should include a link to only one theme stylesheet. Otherwise, widgets can be displayed incorrectly.

If you use UI widgets within a [DevExtreme application](/concepts/Common/05%20Introduction%20to%20DevExtreme/10%20Mobile%20Development/10%20Overview/20%20SPA%20Framework.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework'), the application automatically selects the appropriate theme depending on the platform it is working in. Therefore, a DevExtreme application should include links to stylesheets for all desired [themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/'). Note that a stylesheet theme link looks like the following in this case.

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
    <link rel="dx-theme" data-theme="ios.default" href="/css/dx.ios7.default.css" />

[note]The "dx-theme" links must go before DevExtreme scripts.

Icons provided by built-in themes are stored in *.eot*, *.woff* and *.ttf* font files. If these files are stored on your server, ensure that server configuration contains definition for the following MIME types. Otherwise, icon fonts can be unavailable.

- *application/x-font-eot*
- *application/x-font-woff*
- *application/x-font-ttf*

In addition, the **css** folder must include the **icons** folder with font icons.

For details on linking DevExtreme themes, refer to the [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') article.