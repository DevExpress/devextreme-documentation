---
default: undefined
type: boolean
---
---
##### shortDescription
Specifies whether tiles and groups change their style in the hover state.

---
When the user hovers the cursor over a tile or a group, this element responds by changing its style. To disable this capability, set the **hoverEnabled** option to *false*.

[note]When the user hovers the cursor over a group, the group changes its style. The tiles belonging to that group also change their style. However, the [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isHovered') method, which checks the tiles' state, will return *false* although visually they have entered the hover state.

To specify the style of the elements in the hover state, use the **group** | [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/1%20Configuration/group/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/hoverStyle/') and **tile** | [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/1%20Configuration/tile/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/hoverStyle/') objects. If you need to perform certain actions when a widget element enters/leaves the hover state, implement the [onHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onHoverChanged') event handler.