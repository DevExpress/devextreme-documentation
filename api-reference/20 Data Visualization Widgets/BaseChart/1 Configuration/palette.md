---
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet'
type: array | string
---
---
##### shortDescription
Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart.

---
Use this property to set a predefined or custom palette. The colors listed in the specified palette will be used to draw chart series, their points, labels and tooltips. If the number of a series is greater than the number of colors in the palette, palette colors are repeated, but slightly modified.

You can override the color of individual series and their points, labels and tooltips by setting the **color** property of the corresponding object. In addition, you can define a custom palette to use in your charts. To learn how to do this, refer to the [Palettes](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') topic.