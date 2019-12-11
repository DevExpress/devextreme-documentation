---
type: array
---
---
##### shortDescription
An array of items displayed by the widget.

---
[note]The widget requires each data item to have a key field whose value is unique within the entire array.

You can use the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') option instead. Unlike the **items** option, the **dataSource** option can take on the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object as well as a simple array.

[note]If you need to modify the data source specified using the **items** option at runtime, do it only with the help of the **items** option. Updating data items using the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template '{basewidgetpath}/Default_Item_Template/') section of the widget's API. Alternatively, you can implement a custom item template. For details, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance') topic.