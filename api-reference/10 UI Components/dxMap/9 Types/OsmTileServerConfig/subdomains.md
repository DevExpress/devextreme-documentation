---
id: OsmTileServerConfig.subdomains
type: String | Array<String>
---
---
##### shortDescription
Values for the `{s}` placeholder in the [url](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#url) template.

---
Specify subdomains in one of the following formats:

- A string with one character per subdomain (for example, *"abc"*)
- An array of subdomain names (for example, *"tiles1"* and *"tiles2"*)

If this field is empty or not specified, the Map uses *"a"*, *"b"*, and *"c"*. The Map ignores **subdomains** if the **url** template does not contain `{s}`.