---
##### shortDescription
Specifies available filter operations. Applies if [allowFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering) is **true** and the [filterRow](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/) is visible.

---
The following table lists available filter operations by [data type](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#dataType). Users can apply these filter operations in the filter row. The Gantt uses the first operation in each array as the default operation for the specified data type.

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

The nested filter builder also allows users to select from an extended set of operations that include *"anyof"*, *"noneof"*, *"isblank"*, *"isnotblank"*, and [names](/api-reference/_hidden/dxFilterBuilderCustomOperation/name.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/customOperations/#name') of custom operations (if any).

The **filterOperations** property can also accept an empty array. In this case, the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation') applies, and users cannot change it.

#####See Also#####
- **columns[]**.[selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')
