---
id: dxTabs.Options.items
type: Array<String, dxTabsItem, any>
firedEvents: optionChanged
inheritsType: dxTabsItem
---
The **items** array can contain:

- Strings
- Objects with fields described in this section. If you want use other fields, specify the [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '{basewidgetpath}/Configuration/#itemTemplate').

If you need to update the UI component items, reassign the **items** array as shown in the following example:

    <!--JavaScript-->
    {widgetName}Instance.option('items', newItems);

[note] If you use this method, all tabs are re-rendered. To prevent this, set [repaintChangesOnly](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#repaintChangesOnly) to `true`.

As an alternative to **items**, you can use the [dataSource](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') property. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, whose underlying [stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') provide an [API](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection.

[note] Do not use the **items** property if you use **dataSource**, and vice versa.