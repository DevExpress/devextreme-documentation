---
id: GridBaseColumn.selectedFilterOperation
type: Enums.SelectedFilterOperation | undefined
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies a filter operation that applies when users use the [filter row](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/') to filter the column.

---
The following table lists default selected filter operations by [data type](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'):

<table class="dx-table">
  <tr>
    <th>dataType</th><th>Default filter operation</th>
  </tr>
  <tr>
    <td>"string"</td><td>"contains"</td>
  </tr>
  <tr>
    <td>"number"</td><td>"="</td>
  </tr>
  <tr>
    <td>"date"</td><td>"="</td>
  </tr>
</table>

#####See Also#####
- [Filtering API](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/6%20API '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#API')