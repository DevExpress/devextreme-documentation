---
id: dxSplitter.Options.items
firedEvents: optionChanged
type: Array<String, dxSplitterItem, any>
---
---
##### shortDescription
An array of items (panes) displayed by the UI component.

---
The **items** array can contain:

- Objects with fields described in this section.
- Objects with any other fields. In this case, specify the [itemTemplate](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#itemTemplate).

As an alternative to **items**, you can use the [dataSource]({basewidgetpath}/Configuration/#dataSource) property. It accepts the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object, whose underlying [stores](/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores) supply an [API](//Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification) that allows you to update individual items without reassigning the entire item collection.

[note] Do not use the **items** property if you use **dataSource**, and vice versa.