---
id: OsmTileServerConfig.attribution
type: String
---
---
##### shortDescription
Specifies the attribution displayed on the map.

---
Supply the copyright notice and links required by your tile and data providers. The Map passes this string to OpenLayers as HTML and does not add attribution automatically. Missing or empty attribution produces [W1032](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1032.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1032').

Use trusted HTML or sanitize it before assignment. The **controls** option does not remove attribution. See [Accessibility and Security](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/30%20Accessibility%20and%20Security.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Accessibility_and_Security/').
