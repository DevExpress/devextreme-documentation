---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: Array | String
---
---
##### shortDescription
Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart.

---
<p>Use this property to set a predefined or custom palette. The colors listed in the specified palette will be used to draw series points (chart slices), their labels and tooltips. If the number of points is greater than the number of colors in a palette, the palette colors are repeated, but slightly modified.<br/>
You can define a custom palette and use it in your charts. To learn how to do this, refer to the <a href="/Documentation/16_2/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization#Palettes">Palettes</a> topic.</p>

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage` and `Violet`.