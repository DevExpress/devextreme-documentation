---
id: dxMap.Options.type
acceptValues: 'hybrid' | 'roadmap' | 'satellite'
type: String
default: 'roadmap'
---
---
##### shortDescription
The type of a map to display.

---
The available option values are based on map types supported by the Google map provider. If you use the Bing map, the widget casts the option value to the appropriate value supported by the "Bing" provider.

- hybrid -> Aerial
- roadmap -> Road

#include common-ref-enum with {
    enum: "`GeoMapType`",
    values: "`Hybrid`, `Roadmap`, and `Satellite`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}