---
id: dxSplitter.Options.items
firedEvents: optionChanged
type: Array<dxSplitterItem>
inheritsType: dxSplitterItem
---
---
##### shortDescription
An array of items (panes) displayed by the UI component.

---
The **items** array can contain:

- Objects with fields described in this section.
- Objects with any other fields. In this case, specify the [itemTemplate](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#itemTemplate').

As an alternative to **items**, you can use the [dataSource](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') property. It accepts the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, whose underlying [stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') supply an [API](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/0%20Data%20Modification.md '//Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification') that allows you to update individual items without reassigning the entire item collection.

[note] Do not use the **items** property if you use **dataSource**, and vice versa.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}