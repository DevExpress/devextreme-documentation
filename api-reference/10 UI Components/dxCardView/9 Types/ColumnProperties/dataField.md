---
id: ColumnProperties.dataField
type: String | undefined
---
---
##### shortDescription
Binds the column to a field of the [dataSource](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

---
[note]

Review the following notes about data binding:

- If you create an unbound column (use the [calculateFieldValue](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/calculateFieldValue.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#calculateFieldValue') function), specify the **columns[]**.[name](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/name.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#name') property instead of **dataField**.

- Data field names cannot be equal to `this` and should not contain the following characters: `.`, `:`, `[`, and `]`.

- Column caption is generated from the **dataField** value. If you want to use a custom caption, specify it in the [caption](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/caption.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#caption') property. Unlike **dataField**, **caption** can contain any characters.

[/note]