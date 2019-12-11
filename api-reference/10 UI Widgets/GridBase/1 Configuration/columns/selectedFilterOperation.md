---
default: undefined
acceptValues: '<' | '<=' | '<>' | '=' | '>' | '>=' | 'between' | 'contains' | 'endswith' | 'notcontains' | 'startswith'
type: String
---
---
##### shortDescription
Specifies the selected filter operation for the column.

---
By default, the selected filter operation depends on the [data type](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '{basewidgetpath}/Configuration/columns/#dataType') of the column as follows.

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th><th>Default filter operation</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>"string"</td><td>"contains"</td>
  </tr>
  <tr>
    <td>"number"</td><td>"="</td>
  </tr>
  <tr>
    <td>"date"</td><td>"="</td>
  </tr>
  </tbody>
</table>
</div>

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `FilterOperations` enum. This enum accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- [Filtering API](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/5%20API '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API')