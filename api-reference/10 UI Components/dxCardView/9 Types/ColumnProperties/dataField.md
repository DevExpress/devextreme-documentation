---
id: ColumnProperties.dataField
type: String | undefined
---
---
##### shortDescription
Binds the column to a field of the [dataSource]({basewidgetpath}/Configuration/#dataSource).

---
[note]

Review the following notes about data binding:

- If you create an unbound column (use the [calculateFieldValue](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#calculateFieldValue) function), specify the **columns[]**.[name](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#name) property instead of **dataField**.

- Data field names cannot be equal to `this` and should not contain the following characters: `.`, `:`, `[`, and `]`.

- Column caption is generated from the **dataField** value. If you want to use a custom caption, specify it in the [caption](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#caption) property. Unlike **dataField**, **caption** can contain any characters.

[/note]