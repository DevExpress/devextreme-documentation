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
The available property values are based on map types supported by the Google map provider. If you use the Bing map, the UI component casts the property value to the appropriate value supported by the "Bing" provider.

- hybrid -> Aerial
- roadmap -> Road

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}