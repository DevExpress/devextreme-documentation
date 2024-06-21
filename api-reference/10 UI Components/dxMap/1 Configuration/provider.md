---
id: dxMap.Options.provider
type: Enums.MapProvider
default: 'google'
---
---
##### shortDescription
The name of the current map data provider.

---
Use the "googleStatic" provider to connect route points directly rather than by following the street layout.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}

[important]

On May 21, 2024, Microsoft announced that [Bing Maps for Enterprise and its API will be discontinued](https://www.microsoft.com/en-us/maps/bing-maps/discontinued-services). [Azure Maps](https://azure.microsoft.com/en-us/products/azure-maps/) will be a single unified enterprise mapping platform available from Microsoft.

We are working on API compatible with Azure Maps and expect to ship it with our next major release (v24.2).
If you have an existing license to Bing Maps for Enterprise, you can continue using our existing API. You need to transition to new API until June 30, 2025 (free and basic license) or until June 30, 2028 (enterprise license).

The last date you can get a new license to Bing Maps for Enterprise is June 30, 2024. If you do not have an existing license after that date, you would not be able to use our map controls with Bing Maps or Azure Maps (until we release the new API). During that time, you can use other [map providers](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapProvider.md '/Documentation/ApiReference/UI_Components/dxMap/Types/#MapProvider') supported by our controls, such as Google or GoogleStatic.

[/important]