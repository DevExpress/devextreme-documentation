### Azure Maps Support

As you know, Microsoft discontinued availability of [Bing Maps for Enterprise and associated APIs](https://www.microsoft.com/en-us/maps/bing-maps/discontinued-services). [Azure Maps](https://azure.microsoft.com/en-us/products/azure-maps/) will be Microsoft's single unified enterprise mapping platform moving forward.

Accordingly, DevExtreme Maps now supports Azure Maps (a new map [provider](/Documentation/ApiReference/UI_Components/dxMap/Types/#MapProvider)).

![DevExtreme Map with Azure provider](/images/whats-new/24-2-js-azure-map.png)

We recommend use of a supported map provider (either *'azure', 'google',* or *'googleStatic'*) in your DevExtreme-powered solution.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}

### Advanced Google Markers and mapID Support

DevExtreme Maps now supports [advanced Google markers](https://developers.google.com/maps/documentation/javascript/advanced-markers/overview). We also published a new [providerConfig](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/) configuration object that contains setting specific to *'google'* and *'googleStatic'* providers. For instance, you can now use the Google Maps [mapID](https://developers.google.com/maps/documentation/get-map-id) option to customize your Map by setting it in our [providerConfig.mapId](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#mapId).

![DevExtreme Map with Google provider, customized](/images/whats-new/24-2-js-map-id.png)