---
id: dxFunnel.Options.algorithm
acceptValues: 'dynamicHeight' | 'dynamicSlope'
type: String
default: 'dynamicSlope'
---
---
##### shortDescription
Specifies the algorithm for building the funnel.

---
Two algorithms are available:

- *"dynamicSlope"*

    The each funnel item's form depends on the ratio between the current and the next item's value.

- *"dynamicHeight"*

    The height of each funnel item is proportional to the item's value. This algorithm produces a pyramid which is upturned by default. You can return it to normal by assigning **true** to the [inverted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/inverted.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#inverted') property. You can also transform the pyramid's peak into a funnel's neck using the [neckHeight](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/neckHeight.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#neckHeight') and [neckWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/neckWidth.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#neckWidth') properties.

#####See Also#####
- [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/argumentField.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#argumentField')
- [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/valueField.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#valueField')
- [colorField](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/colorField.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#colorField')