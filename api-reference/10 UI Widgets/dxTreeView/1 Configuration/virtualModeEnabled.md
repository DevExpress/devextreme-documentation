---
default: false
type: Boolean
---
---
##### shortDescription
Specifies if the virtual mode is enabled.

---
If the option is set to *true*, the widget initially loads only root items. Child items are loaded when their parent is being expanded.

[note]You can use the virtual mode only if the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSpource) option holds the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance able to filter items by [parent ID](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr'), and the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option is set to "plain". Otherwise, the **virtualModeEnabled** option is ignored.

Use this option to improve the widget performance when working with a huge data source.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/VirtualMode/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') - allows you to load nodes manually.