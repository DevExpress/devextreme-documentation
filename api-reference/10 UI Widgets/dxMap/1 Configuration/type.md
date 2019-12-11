---
default: 'roadmap'
acceptValues: 'hybrid' | 'roadmap' | 'satellite'
type: String
---
---
##### shortDescription
The type of a map to display.

---
The available option values are based on map types supported by the Google map provider. If you use the Bing map, the widget casts the option value to the appropriate value supported by the "Bing" provider.

- hybrid -> Aerial
- roadmap -> Road

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GeoMapType` enum. This enum accepts the following values: `Hybrid`, `Roadmap` and `Satellite`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/jQuery/Light/"
}