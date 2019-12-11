---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Soft Blue' | 'Dark Violet' | 'Green Mist'
type: Array<String> | String
---
---
##### shortDescription
Sets the palette to be used for colorizing funnel items.

---
This option accepts either the name of a [predefined palette](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes') or an array of colors in one of the following formats.

* Hexadecimal colors        
* RGB colors        
* RGBA colors       
* Predefined/cross-browser color names      
* [Predefined SVG colors](https://www.w3.org/TR/SVG/types.html#ColorKeywords)

If the funnel has more items than the palette has colors, the colors are repeated with slight modification.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet` and `GreenMist`.