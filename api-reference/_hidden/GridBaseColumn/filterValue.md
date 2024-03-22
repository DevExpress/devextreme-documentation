---
id: GridBaseColumn.filterValue
type: any
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the value to display in the [filter row](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Filter_Row').

---
DevExtreme uses the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation') method to apply the value.

Note: Convert date strings into [Date](https://www.w3schools.com/js/js_dates.asp) objects before you pass them to the filter expression.

#include datagrid-filtering-rowandheaderconflicts