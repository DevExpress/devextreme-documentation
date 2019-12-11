<article data-show="Content/Applications/16_1/UIWidgets/dxMap/Providers/markup.html,
        Content/Applications/16_1/UIWidgets/dxMap/Providers/script.js,
        Content/Applications/16_1/UIWidgets/dxMap/Providers/styles.css">

The widget supports [Bing](https://www.microsoft.com/maps) and [Google](https://developers.google.com/maps) map providers to display the map. Use the [provider](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#provider') option to specify the required map provider. You can assign one of the following values to the **provider** option.

- "bing"  
 Uses the bing maps API.

- "google"  
 Uses the Google maps API.
 
- "googleStatic"  
 Uses the Google static maps API.
 
<!---->

    <!--JavaScript-->
    var mapOptions = {
        provider: "bing"
    }

The supported map providers require the API key used to identify your application. You can specify the key using the key option, which takes an object containing any of the **bing**, **google** and **googleStatic** properties. Each of these properties holds the API key for the corresponding map provider.

    <!--JavaScript-->
    var mapOptions = {
        key:{
            bing: BING_API_KEY,
            google: GOOGLE_API_KEY,
            googleStatic: GOOGLE_STATIC_API_KEY
        }
    }

For more information on API keys, refer to the required map provider documentation.
</article>