---
id: CollectionWidget.Options.items
type: Array<String, CollectionWidgetItem, any>
firedEvents: optionChanged
inheritsType: CollectionWidgetItem
---
---
##### shortDescription
An array of items displayed by the UI component.

---
The **items** array can contain:

- Strings
- Objects with fields described in this section
- Objects with any other fields. In this case, specify the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '{basewidgetpath}/Configuration/#itemTemplate').

If you need to update the UI component items, reassign the entire **items** array as shown in the following example:

    <!--JavaScript-->
    {widgetName}Instance.option('items', newItems);

As an alternative to **items**, you can use the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') option. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, whose underlying [stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') provide an [API](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection.

[note] Do not use the **items** option if you use **dataSource**, and vice versa.