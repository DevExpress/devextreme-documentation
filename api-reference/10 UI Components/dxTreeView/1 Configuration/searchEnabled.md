[important] The UI component only searches loaded nodes, which can yield incorrect results if the UI component loads nodes on demand (for example, in [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled') or when the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren') function is used). Permitting the search functionality in these cases is not recommended.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/TreeViewWithSearchBar/"
}

#####See Also#####
- [Search Nodes](/concepts/05%20Widgets/TreeView/15%20Search%20Nodes.md '/Documentation/Guide/UI_Components/TreeView/Search_Nodes/')