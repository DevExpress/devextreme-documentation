---
id: dxTreeView.Options.virtualModeEnabled
type: Boolean
default: false
---
---
##### shortDescription
Enables the virtual mode in which nodes are loaded on demand. Use it to enhance the performance on large datasets.

---
If this option is **true**, the widget initially loads only the root nodes. Child nodes are loaded when their parent is being expanded.

The virtual mode has the following restrictions:

- The [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/dataSource/') option should be set to a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance able to filter items by [parent ID](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr').

- The [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option should be set to *"plain"*.

- Since the [search](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled') will be performed on loaded nodes only and thus produce incorrect results, it is not recommended that you enable this functionality.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/VirtualMode/"
}

#####See Also#####
- [Enhance Performance on Large Datasets](/concepts/05%20Widgets/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/')
- [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren')