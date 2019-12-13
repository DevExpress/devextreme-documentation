---
id: dxTreeView.Options.items
type: Array<dxTreeViewItem>
inheritsType: dxTreeViewItem
---
The **TreeView** works with object collections that can have a plain or hierarchical structure. Depending on the structure, the objects should provide different data fields. Specify the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option to notify the **TreeView** of the used structure and refer to the option's description for information on the required fields.

If you need to update the widget items, reassign the entire **items** array as shown in the following example:

    <!--JavaScript-->
    {widgetName}Instance.option('items', newItems);

As an alternative to **items**, you can use the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource '{basewidgetpath}/Configuration/dataSource/') option. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, whose underlying [stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') provide an [API](/concepts/30%20Data%20Layer/5%20Data%20Layer/3%20Data%20Modification '/Documentation/Guide/Data_Layer/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection.

[note] Do not use the **items** option if you use **dataSource**, and vice versa.