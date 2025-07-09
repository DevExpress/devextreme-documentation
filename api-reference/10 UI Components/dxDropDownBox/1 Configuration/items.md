---
id: dxDropDownBox.Options.items
type: Array<any>
---
---
##### shortDescription
An array of items used to synchronize the DropDownBox with an embedded UI component.

---
The DropDownBox uses other UI components to render **items**. Use the [contentTemplate](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#contentTemplate') to embed a UI component such as the [List](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/') or the [TreeView](/api-reference/10%20UI%20Components/dxTreeView '/Documentation/ApiReference/UI_Components/dxTreeView/'). In this case, **items** are displayed in accordance with the configuration and functionality of the embedded UI component.

If you need to update UI component items, reassign the **items** array as shown in the following example:

    <!--JavaScript-->
    dropDownBoxInstance.option('items', newItems);

You can use the [dataSource](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#dataSource') property instead of **items**. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object whose underlying [stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') include [API](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/0%20Data%20Modification.md '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection. 

[note] Do not use the **items** property if you use **dataSource** (and vice versa).
