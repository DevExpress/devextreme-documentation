---
id: OsmTileServerConfig.url
type: String
---
---
##### shortDescription
The tile URL template.

---
This field is required. Map replaces the following placeholders in the template:

- `{z}`: The zoom level
- `{x}`: The tile column
- `{y}`: The tile row
- `{s}`: A value from the [subdomains](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#subdomains) field

For example: *"https://{s}.tiles.example.com/{z}/{x}/{y}.png"*
