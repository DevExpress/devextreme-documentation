---
id: GridBaseColumn.filterOperations
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between' | 'anyof' | 'noneof'
type: Array<String>
default: undefined
---
---
##### shortDescription
Specifies available filter operations. Applies if [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '{basewidgetpath}/Configuration/columns/#allowFiltering') is **true** and the [filterRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/'), [filterPanel]({basewidgetpath}/Configuration/filterPanel/), or both are visible.

---
The following table lists available filter operations by [data types](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). Users can apply these filter operations both in the filter row and nested [filterBuilder]({basewidgetpath}/Configuration/#filterBuilder) component. The same filters are assigned to columns of a specific data type by default.

<table class="dx-table">
  <tr>
    <th>dataType</th>
    <th>filterOperations</th>
  </tr>
  <tr>
    <td>"string"</td>
    <td>[ "contains", "notcontains", "startswith", "endswith", "=", "<>" ]</td>
  </tr>
  <tr>
    <td>"numeric"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between" ]</td>
  </tr>
  <tr>
    <td>"date"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between" ]</td>
  </tr>
</table>

The following table contains filter operations that users can apply only in the nested filter builder:
<table class="dx-table">
  <tr>
    <th>dataType</th>
    <th>filterOperations</th>
  </tr>
  <tr>
    <td>"string"</td>
    <td>[ "custom operation's <a href="/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#name" target="_blank">name</a>" ]</td>
  </tr>
  <tr>
    <td>"all data types"</td>
    <td>[ "anyof", "noneof", "isblank", "isnotblank" ]</td>
  </tr>
</table>

The **filterOperations** option can also accept an empty array. In this case, the selected filter operation is *"="* for all data types, and a user cannot change it.

#include common-ref-enum with {
    enum: "`FilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, and `Between`"
}

#####See Also#####
- **columns[]**.[selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')
