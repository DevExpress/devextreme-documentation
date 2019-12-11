---
default: false
type: Boolean
---
---
##### shortDescription
Specifies if the virtual mode is enabled.

---
If the option is set to **true**, the widget initially loads only root items. Child items are loaded when their parent is being expanded.

[note]You can use the virtual mode only if the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSpource) option holds the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance able to filter items by [parent ID](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr'), and the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option is set to "plain". Otherwise, the **virtualModeEnabled** option is ignored.

Use this option to improve the widget performance when working with a huge data source.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/VirtualMode/jQuery/Light/"
}

#####See Also#####
- [Enhance Performance on Large Datasets](/concepts/05%20Widgets/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/')
- [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') - allows you to load nodes manually.