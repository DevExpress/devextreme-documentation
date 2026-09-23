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

Each provider offers different functionality that you can integrate. Refer to the following examples to learn about functionality offered by Google Maps:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-autocomplete-functionality-for-addresses"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-add-draggable-markers"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-add-marker-with-label"
}

Set **provider** to **"osm"** to use OpenLayers. See [OpenStreetMap Provider](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/00%20Overview.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/') for setup instructions.