---
id: dxTreeMap.Options.colorizer.range
type: Array<Number>
default: undefined
---
---
##### shortDescription
Allows you to paint tiles with similar values uniformly. Applies only if the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type') option is *"gradient"* or *"range"*.

---
When you use the *"gradient"* colorization algorithm, assign an array of strictly two values to the **range** option. Tiles whose values fall into this range will have a tint of one of the two [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#palette') colors.

When you use the *"range"* colorization algorithm, assign an array of several values to the **range** option. For example, imagine that the array is [0, 1, 2, 3]. As a result, there will be three ranges: 0-1, 1-2, 2-3. Each of them will be assigned a color. The color of a tile will depend on the range its value fall into.

In both algorithms, the tiles that match neither range will have the color specified by the **tile**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color') option.