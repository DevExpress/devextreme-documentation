---
id: dxTreeList.Options.selection
type: ui\tree_list:Selection
inheritsType: ui\tree_list:Selection
---
---
##### shortDescription
Configures runtime selection.

---
A user can select rows in a single or multiple [mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '{basewidgetpath}/Configuration/selection/#mode'). In multiple mode, a user can select all rows at once. To disable this feature, assign **false** to the [allowSelectAll](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/allowSelectAll.md '{basewidgetpath}/Configuration/selection/#allowSelectAll').

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SingleRowSelection/",
    name: "Single Row Selection"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/MultipleRowSelection/",
    name: "Multiple Row Selection"
}

#####See Also#####
- [Selection](/concepts/05%20UI%20Components/TreeList/50%20Selection '/Documentation/Guide/UI_Components/TreeList/Selection/')
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')