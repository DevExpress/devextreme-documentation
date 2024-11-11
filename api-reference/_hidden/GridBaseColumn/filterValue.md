---
id: GridBaseColumn.filterValue
type: any | undefined
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the value to display in the [filter row](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Filter_Row').

---
When DevExtreme loads the grid, it passes the value of the `filterValue` property to the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation') method.

Note: Convert date strings into [Date](https://www.w3schools.com/js/js_dates.asp) objects before you pass them to the filter expression.

#include datagrid-filtering-rowandheaderconflicts