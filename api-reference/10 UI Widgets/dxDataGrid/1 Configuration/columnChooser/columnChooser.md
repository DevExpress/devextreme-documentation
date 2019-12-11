---
type: Object
---
---
##### shortDescription
Specifies the options of a [column chooser](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/120%20Column%20Chooser.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Column_Chooser').

---
A column chooser is a grid element that allows a user to hide specific grid columns. This element represents a panel that appears when the user clicks <img src="/Content/images/doc/16_2/DataGrid/icons/columnChooser.png" alt="DevExtreme DataGrid ColumnChooser" style="vertical-align:middle"/>, or when the [showColumnChooser()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/showColumnChooser().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#showColumnChooser') method is called.

A grid column must have the [allowHiding](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowHiding.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHiding') option set to *true* so that a user can drag it onto the column chooser panel.

By default, the column chooser is disabled. To enable it, set the **enabled** option of the **columnChooser** object to *true*. Using the **width** and **height** options of this object, you can define the size of the column chooser panel.

In addition, you can customize the text displayed by the panel when it is empty using the **emptyPanelText** option and the text displayed in the title of the panel using the **title** option.