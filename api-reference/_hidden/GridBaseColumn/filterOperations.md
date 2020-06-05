---
id: GridBaseColumn.filterOperations
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between' | 'anyof' | 'noneof'
type: Array<String>
default: undefined
---
---
##### shortDescription
Specifies a set of available filter operations. Applies only if [filterRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/').**visible** and [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '{basewidgetpath}/Configuration/columns/#allowFiltering') are **true**.

---
The following table lists available filters by [data types](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). The same filters are assigned to columns of a specific data type by default.

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

The **filterOperations** option can also accept an empty array. In this case, the selected filter operation is *"="* for all data types, and a user cannot change it.

#include common-ref-enum with {
    enum: "`FilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, and `Between`"
}

#####See Also#####
- **columns[]**.[selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')