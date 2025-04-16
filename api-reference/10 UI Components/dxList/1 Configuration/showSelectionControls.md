---
id: dxList.Options.showSelectionControls
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether or not to display controls used to select list items. Not available if [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') is set to *'none'*.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

[note] If this setting is enabled, [displayExpr](/api-reference/10%20UI%20Components/dxList/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#displayExpr') is not defined, and no [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/#text') field exists for an item, List cannot identify the display data and specifies aria-label as `List item content`. To set another aria-label, define **displayExpr**.

#####See Also#####
- [List - Selection - User Interaction](/concepts/05%20UI%20Components/List/25%20Selection/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Selection/#User_Interaction')