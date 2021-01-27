---
id: dxSankey.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout properties.

---
The adaptive layout enables the UI component to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/title/')
1. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/export/')
1. [Labels](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/label/') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/adaptiveLayout/keepLabels.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/adaptiveLayout/#keepLabels') property to **true**)

Use the **height** and **width** properties in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.