---
id: dxDataGrid.Options.selectionFilter
type: Filter expression
default: []
firedEvents: optionChanged
---
---
##### shortDescription
Specifies [filters](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') for the rows that must be selected initially. Applies only if **selection**.[deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '{basewidgetpath}/Configuration/selection/#deferred') is **true**.

---
This option also allows you to obtain [filter expressions](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') for the currently selected rows. Note that if all records are selected, the **selectionFilter** value is **null**. If there are no selected records, the value contains an empty array.

#####See Also#####
- [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '{basewidgetpath}/Methods/#getSelectedRowKeys')
- [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '{basewidgetpath}/Methods/#getSelectedRowsData')