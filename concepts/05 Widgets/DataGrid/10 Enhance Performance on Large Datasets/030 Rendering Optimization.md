If your DataGrid performance is low, we recommend that you apply the following settings to improve it:

* Disable [showEditorAlways](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showEditorAlways) for columns of [dataType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType) *"boolean"*         
This will substitute checkboxes for `true` or `false` text values.

* Enable [renderAsync](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#renderAsync)         
As a result, filter row, command columns, and columns with showEditorAlways set to **true** will render after other elements. Additionally, enable the **columns[]**.[renderAsync](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#renderAsync) property for columns with a complex [template](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate).

* Disable [columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth)         
Thus, columns will not adjust to the content and will be of the same width. Still, you can can set a custom width for all or individual columns in the [columnWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnWidth) and **columns[]**.[width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) properties.

* Specify width for all [command columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/)         

* If you use conditional formatting in an Angular, React, or Vue application, implement [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared) instead of [cellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate)
