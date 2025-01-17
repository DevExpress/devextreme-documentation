---
id: GridBaseColumn.filterOperations
type: Array<Enums.FilterOperation, String>
default: undefined
---
---
##### shortDescription
Specifies available filter operations. Applies if [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '{basewidgetpath}/Configuration/columns/#allowFiltering') is **true** and the [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/') and/or [filterPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel '{basewidgetpath}/Configuration/filterPanel/') are visible.

---
The following table lists available filter operations by [data type](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). Users can apply these filter operations in the filter row and nested [filterBuilder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder') component.

[note] The default filter operations for each data type are listed in the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation') API section.

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

[note] Filter row operations depend on the column [data type]({basewidgetpath}/Configuration/columns/#dataType). If a column starts with empty values, {WidgetName} cannot assign the data type automatically. You must assign the column data type for the filter row to function correctly.

The nested filter builder also allows users to select from an extended set of operations that include *"anyof"*, *"noneof"*, *"isblank"*, *"isnotblank"*, and [names](/api-reference/_hidden/dxFilterBuilderCustomOperation/name.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/customOperations/#name') of custom operations (if any).

The **filterOperations** property can also accept an empty array. In this case, the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation') applies, and users cannot change it.

#####See Also#####
- **columns[]**.[selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')
