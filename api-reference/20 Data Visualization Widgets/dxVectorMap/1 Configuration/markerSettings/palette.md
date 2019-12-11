---
dep: ..\layers\palette.md
default: 'Default'
acceptValues: 'Default' | 'Soft Pastel' | 'Harmony Light' | 'Pastel' | 'Bright' | 'Soft' | 'Ocean' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Soft Blue' | 'Dark Violet' | 'Green Mist'
type: Array<String> | String
---
---
##### shortDescription
Specifies the name of a palette or a custom set of colors to be used for coloring markers of the *pie* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type').

---
If you define markers of the *pie* type on your map, use the **palette** option to colorize them. Assign a set of colors or the name of one of the predefined palettes to this option. The colors listed in the palette will be used to paint pie slices. If the number of slices is greater than the number of colors in a palette, the colors are repeated, but slightly modified.