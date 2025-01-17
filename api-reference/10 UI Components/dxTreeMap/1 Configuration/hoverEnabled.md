---
id: dxTreeMap.Options.hoverEnabled
type: Boolean | undefined
default: undefined
---
---
##### shortDescription
Specifies whether tiles and groups change their style when a user pauses on them.

---
[note]When the user pauses on a group, not only the group changes its style, but also tiles that belong to that group. However, the [isHovered()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isHovered') method, which checks the tiles' state, will return **false** although visually they have entered the hover state.

#####See Also#####
- **group**.[hoverStyle](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/group/hoverStyle '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/group/hoverStyle/')
- **tile**.[hoverStyle](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tile/hoverStyle '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tile/hoverStyle/')
- **group**.[hoverEnabled](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/group/hoverEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/group/#hoverEnabled')
- [onHoverChanged](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onHoverChanged')