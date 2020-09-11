---
id: GridBaseColumn.filterOperations
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between' | 'anyof' | 'noneof'
type: Array<String>
default: undefined
---
---
##### shortDescription
Specifies the available filter operations. Applies if [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '{basewidgetpath}/Configuration/columns/#allowFiltering') is **true** and the [filterRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/') and/or [filterPanel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterPanel '{basewidgetpath}/Configuration/filterPanel/') are visible.

---
The following table lists the available filter operations by [data types](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). Users can apply these filter operations in the filter row and nested [filterBuilder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder') component. The same operations are assigned to columns of a specific data type.

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

The nested filter builder also allows users to select from an extended set of operations that include *"anyof"*, *"noneof"*, *"isblank"*, *"isnotblank"*, and [names](/api-reference/_hidden/dxFilterBuilderCustomOperation/name.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/#name') of custom operations (if there are any).

The **filterOperations** option can also accept an empty array. In this case, the selected filter operation is *"="* for all data types, and a user cannot change it.

#include common-ref-enum with {
    enum: "`FilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, and `Between`"
}

#####See Also#####
- **columns[]**.[selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')
