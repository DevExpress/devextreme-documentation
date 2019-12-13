---
id: dxSankey.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
The adaptive layout enables the widget to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/title/')
1. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/export/')
1. [Labels](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/adaptiveLayout/keepLabels.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/adaptiveLayout/#keepLabels') option to **true**)

Use the **height** and **width** options in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.