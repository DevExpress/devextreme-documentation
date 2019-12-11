---
##### shortDescription
Adds a new [column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns') to a grid.

##### param(columnOptions): object|string
The options of the added column or the name of a data field.

---
To add a column to a grid, call the **addColumn(columnOptions)** method of the grid instance. Pass the options of the added column as the **columnOptions** argument. Refer to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option description for the full list of available options.

There may be cases, when no options, except the [dataField](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField'), are required to be specified. In this instance, pass the name of the data field as the argument to the **addColumn(columnOptions)** method instead of the object with column options.