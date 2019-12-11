---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: Array | String
---
---
##### shortDescription
Sets the array of colors to be used for coloring subvalue indicators.

---
Use this option to color subvalue indicators. If the number of colors in the specified array is less than the number of subvalue indicators, the colors are repeated, but slightly modified.

If you need to draw all subvalue indicators in one color, specify the **subvalueIndicator** | **color** option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage` and `Violet`.