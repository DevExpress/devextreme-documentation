---
type: function(columns)
---
---
##### shortDescription
Specifies a function that customizes grid columns after they are created.

##### param(columns): Array
Grid columns.

---
Usually, each column in **DataGrid** is configured individually using options within the objects of the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. In most cases, configuring grid columns in this fashion is sufficient to make them appear appropriately. However, there may be scenarios when columns are generated on the base of a data source and you need to adjust a few of their options. In that case, you do not need to declare the **columns** array. Instead, change the required options within a callback function assigned to the **customizeColumns** option. An array of grid columns can be accessed using the function parameter. Fields of each object in this array represent column options identical to the options described in the **columns** reference section.