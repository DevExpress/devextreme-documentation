---
id: dxFunnel.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout properties.

---
The adaptive layout enables the UI component to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title '{basewidgetpath}/Configuration/title/')
2. [Export menu icon](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export/')
3. [Legend](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/legend '{basewidgetpath}/Configuration/legend/')
4. [Item labels](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/label '{basewidgetpath}/Configuration/label/') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout/#keepLabels') property to **true**)

Use the **height** and **width** properties in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

#include btn-open-codepen with {
    href: "https://codepen.io/vladaskorokhodova/pen/ExrewvB"
}

#####See Also#####
- [Adaptive Layout](/concepts/05%20UI%20Components/Funnel/89%20Adaptive%20Layout.md '/Documentation/Guide/UI_Components/Funnel/Adaptive_Layout/')