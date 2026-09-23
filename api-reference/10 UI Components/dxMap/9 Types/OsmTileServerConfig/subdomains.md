---
id: OsmTileServerConfig.subdomains
type: String | Array<String>
---
---
##### shortDescription
Specifies the values that replace **{s}** in the tile URL template.

---
A string supplies one subdomain per character: **"abc"** represents **"a"**, **"b"**, and **"c"**. An array supports complete values, such as **["tiles1", "tiles2"]**.

This setting applies only to URLs that contain **{s}**. The provider uses **"a"**, **"b"**, and **"c"** if the setting is omitted or empty. Use subdomains only if your tile service supports them.
