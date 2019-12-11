---
type: array
---
---
##### shortDescription
An array of items displayed by the widget.

---
[note]The widget requires each data item to have a key field whose value is unique within the entire array.

You can use the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') option instead. Unlike the **items** option, the **dataSource** option can take on the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object as well as a simple array.

[note]If you need to modify the data source specified using the **items** option at runtime, do it only with the help of the **items** option. Updating data items using the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource') option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/') section of the widget's API. Alternatively, you can implement a custom item template. For details, refer to the [Customize Node Appearance](/concepts/05%20Widgets/TreeView/30%20Customize%20Node%20Appearance.md '/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance/') topic.