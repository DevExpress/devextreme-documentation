Set [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') to **"osm"** to render a map with OpenLayers. Use the existing Map options and methods for the viewport, markers, and routes. The sections below describe OSM setup and provider-specific behavior.

DevExtreme does not host tiles, geocoding, or routing services. You can use self-hosted services or third-party services that meet your application's requirements. A DevExtreme map API key is not required for this provider; configure any service-specific credentials in your tile URLs or request callbacks.

## Connect OpenLayers

OpenLayers is not a dependency of the **devextreme** package. Install or load it explicitly for applications that use the **osm** provider. Applications that use only other providers do not need OpenLayers.

The examples below use OpenLayers **10.10.0**. Load its stylesheet in addition to your DevExtreme theme. A map container must have a nonzero width and height.

### Modular Applications

Install OpenLayers in the application that creates the map:

    <!--Text-->
    npm install ol@10.10.0

Import the registration module before you initialize the Map:

    <!--TypeScript-->
    import 'ol/ol.css';
    import 'devextreme/ui/map/openlayers';

The registration module has no exports. Use it for Angular, React, Vue, or a bundled JavaScript application. See [Troubleshooting](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/35%20Troubleshooting.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Troubleshooting/') for strict package managers and CommonJS bundlers.

### Browser Scripts

For a nonmodular jQuery or ASP.NET Core application, load the OpenLayers browser build, which exposes **window.ol**, before you initialize the Map. For example, copy **dist/ol.js** and **ol.css** from the OpenLayers package to your application's static assets.

    <!--HTML-->
    <link rel="stylesheet" href="/lib/ol/ol.css">
    <script src="/lib/ol/ol.js"></script>

Keep the application's existing jQuery, DevExtreme script, and DevExtreme theme references. Do not add the modular registration import to this setup.

## Create a Map

The following examples use a placeholder tile service. Replace its URL, attribution, and maximum source zoom with values supplied by your service. They intentionally do not request tiles from the public OpenStreetMap tile server.

---
##### jQuery

    <!--HTML-->
    <div id="map"></div>

    <!--JavaScript-->
    $(function() {
        $("#map").dxMap({
            provider: "osm",
            height: 400,
            width: "100%",
            center: { lat: 40.7484, lng: -73.9857 },
            zoom: 14,
            providerConfig: {
                tileServer: {
                    url: "https://tiles.example.com/{z}/{x}/{y}.png",
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
                    maxZoom: 19
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxMapModule } from 'devextreme-angular/ui/map';
    import type { DxMapTypes } from 'devextreme-angular/ui/map';
    import 'devextreme/ui/map/openlayers';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxMapModule],
        templateUrl: './app.component.html'
    })
    export class AppComponent {
        center = [40.7484, -73.9857];
        tileServer: DxMapTypes.OsmTileServerConfig = {
            url: 'https://tiles.example.com/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
            maxZoom: 19
        };
    }

    <!-- tab: app.component.html -->
    <dx-map
        provider="osm"
        [height]="400"
        width="100%"
        [center]="center"
        [zoom]="14">
        <dxo-map-provider-config
            [tileServer]="tileServer">
        </dxo-map-provider-config>
    </dx-map>

    <!-- tab: styles.css -->
    @import 'devextreme/dist/css/dx.fluent.blue.light.css';
    @import 'ol/ol.css';

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import 'ol/ol.css';
    import 'devextreme/ui/map/openlayers';
    import DxMap, { DxProviderConfig } from 'devextreme-vue/map';
    import type { DxMapTypes } from 'devextreme-vue/map';

    const center = { lat: 40.7484, lng: -73.9857 };
    const tileServer: DxMapTypes.OsmTileServerConfig = {
        url: 'https://tiles.example.com/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 19
    };
    </script>

    <template>
        <DxMap
            provider="osm"
            :height="400"
            width="100%"
            :center="center"
            :zoom="14">
            <DxProviderConfig :tile-server="tileServer" />
        </DxMap>
    </template>

##### React

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import 'ol/ol.css';
    import 'devextreme/ui/map/openlayers';
    import Map, { ProviderConfig } from 'devextreme-react/map';
    import type { MapTypes } from 'devextreme-react/map';

    const center = { lat: 40.7484, lng: -73.9857 };
    const tileServer: MapTypes.OsmTileServerConfig = {
        url: 'https://tiles.example.com/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 19
    };

    export default function App() {
        return (
            <Map
                provider="osm"
                height={400}
                width="100%"
                defaultCenter={center}
                defaultZoom={14}>
                <ProviderConfig tileServer={tileServer} />
            </Map>
        );
    }

##### ASP.NET Core Controls

    <!--Razor-->
    @using DevExtreme.AspNet.Mvc

    <script>
        const tileServer = {
            url: "https://tiles.example.com/{z}/{x}/{y}.png",
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
            maxZoom: 19
        };
    </script>

    @(Html.DevExtreme().Map()
        .ID("map")
        .Provider(GeoMapProvider.Osm)
        .Height(400)
        .Width("100%")
        .Center(new JS("{ lat: 40.7484, lng: -73.9857 }"))
        .Zoom(14)
        .ProviderConfig(config => config
            .TileServer(new JS("tileServer"))
        )
    )

---

The ASP.NET Core builder accepts a tile URL string or a JavaScript expression through **new JS(...)**. Use the latter for a configuration object or a tile source selection function. Load **ol.js** and **ol.css** in the layout before the component initializes.

## Add Services and Map Features

- [Configure a Tile Service](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/05%20Configure%20a%20Tile%20Service.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Configure_a_Tile_Service/'): tile templates, attribution, subdomains, and map types.
- [Calculate Locations](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/10%20Calculate%20Locations.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Locations/'): use addresses and place names.
- [Calculate Routes](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/15%20Calculate%20Routes.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Routes/'): connect a routing service and display its geometry.
- [Customize Marker Tooltips](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/20%20Customize%20Marker%20Tooltips.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Customize_Marker_Tooltips/'): configure a marker's Popover through public API.
- [Access the OpenLayers API](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/25%20Access%20the%20OpenLayers%20API.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Access_the_OpenLayers_API/'): work with native map, marker, and route objects.
- [Accessibility and Security](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/30%20Accessibility%20and%20Security.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Accessibility_and_Security/'): keyboard behavior, safe content, and service policies.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-openstreetmap"
}
