---
id: OsmTileServerConfig.url
type: String
---
---
##### shortDescription
The tile URL template.

---
This field is required. The Map replaces the following placeholders in the template:

- `{z}`: The zoom level
- `{x}`: The tile column
- `{y}`: The tile row
- `{s}`: A value from the [subdomains](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/subdomains.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#subdomains') field

For example: *"https://{s}.tiles.example.com/{z}/{x}/{y}.png"*

#####See Also#####
- [OpenStreetMap Provider - Security](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/20%20Security.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/#Security')
