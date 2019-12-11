---
default: undefined
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'between'
type: Array<String>
---
---
##### shortDescription
Specifies a set of available filter operations. Applies only if [filterRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/').**visible** and [allowFiltering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowFiltering.md '{basewidgetpath}/Configuration/columns/#allowFiltering') are **true**.

---
The following table lists available filters by [data types](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). The same filters are assigned to columns of a specific data type by default.

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th>
    <th>filterOperations</th>
  </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
</div>

The **filterOperations** option can also accept an empty array. In this case, the selected filter operation is *"="* for all data types, and a user cannot change it.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `FilterOperations` enum. This enum accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- **columns[]**.[selectedFilterOperation](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')