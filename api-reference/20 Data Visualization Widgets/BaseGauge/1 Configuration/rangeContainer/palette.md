---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: Array | String
---
---
##### shortDescription
Sets the name of the palette or an array of colors to be used for coloring the gauge range container.

---
Use this option to set a predefined or custom palette. The colors listed in the specified palette will be used to draw ranges of the range container. If the number of the ranges is greater than the number of colors in the palette, palette colors are repeated, but slightly modified.

You can override the color of an individual range by specifying the **color** option of this range's configuration object. In addition, you can declare an array of colors and use it as a palette. Refer to the [Palettes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes') topic for more information on palettes.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `VizPalette` enum. This enum accepts the following values: `Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage` and `Violet`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementspaletteforranges/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>