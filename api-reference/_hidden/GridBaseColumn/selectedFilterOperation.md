---
id: GridBaseColumn.selectedFilterOperation
acceptValues: '<' | '<=' | '<>' | '=' | '>' | '>=' | 'between' | 'contains' | 'endswith' | 'notcontains' | 'startswith'
type: String
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies a filter operation that applies when users use the [filter row](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/) to filter the column.

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

#include common-ref-enum with {
    enum: "`FilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, and `Between`"
}

#####See Also#####
- [Filtering API](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/6%20API '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#API')