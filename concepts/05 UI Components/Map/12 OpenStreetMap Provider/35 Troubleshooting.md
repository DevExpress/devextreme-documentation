## OpenLayers Is Missing or Incompatible

[E1069](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/E1069.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#E1069') indicates that the Map cannot use the available OpenLayers API.

For a modular application, install **ol** in the application and import **devextreme/ui/map/openlayers** before creating the Map. For a browser-script application, load the complete OpenLayers browser build before initialization. The [setup examples](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/00%20Overview.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/') use version **10.10.0**.

Do not import internal **openlayers.register** modules directly. Do not replace OpenLayers with a partial object containing only a few constructors.

## Strict Package Resolution

The registration module imports OpenLayers, but **devextreme** does not declare an **ol** dependency. Some strict package managers reject this relationship even if the application installs **ol**.

For Yarn Plug'n'Play, add an application-level [packageExtensions](https://yarnpkg.com/configuration/yarnrc#packageExtensions) entry to **.yarnrc.yml**:

    <!--YAML-->
    nodeLinker: pnp
    packageExtensions:
      "devextreme@*":
        dependencies:
          ol: "10.10.0"

Also declare the same **ol** version in the application's dependencies and run **yarn install**. The extension supplies the missing package relationship; it does not replace the application's dependency declaration. Keep the two versions aligned.

This setup is needed only for an application that loads the OSM registration module in an environment that enforces package dependency ownership. Other Map providers do not import OpenLayers through this module.

## CommonJS Applications

OpenLayers is distributed as ES modules. A CommonJS consumer must use a bundler that can process these imports; do not assume that a direct **require** in every Node.js runtime works.

A bundled entry can use:

    <!--JavaScript-->
    require('ol/ol.css');
    require('devextreme/ui/map/openlayers');
    const Map = require('devextreme/ui/map');

Configure the bundler to handle CSS and OpenLayers ES modules. The example repository contains a Webpack CommonJS application and a strict Yarn PnP application with the required setup.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-openstreetmap"
}

## Tiles or Controls Are Not Visible

Check the following:

- The map container has a nonzero width and height. Initialize a hidden container only when it can be laid out, or update its size after it becomes visible.
- The page loads both a DevExtreme theme and **ol.css**. For Shadow DOM, load both stylesheets inside the ShadowRoot.
- **providerConfig.tileServer** supplies a valid URL template. **W1030** indicates a missing configuration; it does not enable a fallback public tile service.
- Tile requests succeed. Check credentials, mixed content, Content Security Policy, CORS where applicable, and the tile service's supported zoom levels.
- **controls: false** intentionally hides the OSM zoom control.

## Locations or Routes Are Missing

Use the warning code to find the missing integration:

| Code | Action |
| --- | --- |
| [W1031](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1031.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1031') | Configure **calculateLocation**, or use coordinates instead of place names. |
| [W1032](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1032.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1032') | Specify the tile source's required attribution. |
| [W1033](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1033.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1033') | Configure **calculateRoute** to return geometry. |
| [W1006](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1006.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1006') | Inspect callback failures and validate the returned coordinates or geometry. |

Map coordinate arrays use **[latitude, longitude]**. GeoJSON LineString positions use **[longitude, latitude]**. A routing response must contain at least two valid positions. Extract the geometry from your service response rather than returning a Feature or FeatureCollection.

See [Calculate Locations](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/10%20Calculate%20Locations.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Locations/') and [Calculate Routes](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/15%20Calculate%20Routes.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Routes/') for skipped-route and unresolved-location behavior.
