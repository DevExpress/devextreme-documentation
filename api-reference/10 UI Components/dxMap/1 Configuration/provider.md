---
id: dxMap.Options.provider
acceptValues: 'bing' | 'google' | 'googleStatic'
type: String
default: 'google'
---
---
##### shortDescription
The name of the current map data provider.

---
Use the "googleStatic" provider to connect route points directly rather than by following the street layout.

#include common-ref-enum with {
    enum: "`GeoMapProvider`",
    values: "`Bing`, `Google`, and `GoogleStatic`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}