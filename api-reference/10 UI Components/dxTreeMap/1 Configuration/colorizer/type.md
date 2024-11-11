---
id: dxTreeMap.Options.colorizer.type
type: Enums.TreeMapColorizerType | undefined
default: undefined
---
---
##### shortDescription
Specifies the colorizing algorithm.

---
The TreeMap UI component provides three algorithms for tile colorization: *"discrete"*, *"gradient"* and *"range"*.

The *"discrete"* algorithm is the simplest of all. It paints each tile within a group in a color taken from the [palette](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer/palette.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/#palette'). When there are several groups, colorization begins from scratch in each. Alternatively, you can force the UI component to continue colorization across groups. For this purpose, set the [colorizeGroups](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer/colorizeGroups.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/#colorizeGroups') property to **true**. It will colorize not each tile, but each group of tiles in a single color taken from the palette.

If you choose the *"gradient"* algorithm, the palette should contain only two colors that will be used to colorize the smallest and the largest tile respectively. The other tiles will have a tint of either the first or the second color depending on their size. In order to use the *"gradient"* algorithm, you need to set the [range](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer/range.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/#range') property to an array of strictly two values. Tiles whose values fall out of the range will be painted in the color specified by the **tile**.[color](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/#color') property.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'gradient',
            palette: ['red', 'blue'],
            range: [0, 1000]
        }
    };
    
The *"range"* algorithm is similar to *"gradient"*, but the array assigned to the **range** property should contain more than two values. For example, consider the following code.

    <!--JavaScript-->var treeMapOptions = {
        colorizer: {
            // ...
            type: 'range',
            palette: ['red', 'blue'],
            range: [0, 300, 700, 1000]
        }
    };
    
As a result, tile values will be split up into three ranges: 0 to 300, 300 to 700 and 700 to 1000. The palette of two colors will generate three tints - one for each range. Thus, tiles of the range 0 - 300 will be colored red, tiles of the range 700 - 1000 will be colored blue, and tiles of the range 300 - 700 - a color in between. Tiles whose values match neither range will be painted in the color specified by the **tile**.[color](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tile/color.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/#color') property.
