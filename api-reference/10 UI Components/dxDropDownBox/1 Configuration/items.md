---
id: dxDropDownBox.Options.items
type: Array<Object>
---
---
##### shortDescription
An array of items displayed by the UI component.

---
The **items** array can contain objects with fields described in this section.

If you need to update the UI component items, reassign the entire **items** array as shown in the following example:

    <!--JavaScript-->
    dropDownBoxInstance.option('items', newItems);

As an alternative to **items**, you can use the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#dataSource') property. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, whose underlying [stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') provide an [API](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection. By default, the **DropDownBox** does not come with any other embedded UI components, such as the **List** or the **TreeView**. Use the **dxTemplate** directive to define the drop-down content.

[note] Do not use the **items** property if you use **dataSource**, and vice versa.