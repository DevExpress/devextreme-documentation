---
id: GridBaseColumn.filterValue
type: any
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the column's filter value displayed in the [filter row](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Filter_Row').

---
This value is applied using the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation'). If you need to filter dates, you should convert date strings into JavaScript [Date](https://www.w3schools.com/js/js_dates.asp) objects. The filter does not support dates specified as strings.

#include datagrid-filtering-rowandheaderconflicts