---
default: undefined
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'isblank' | 'isnotblank'
type: Array<String>
---
---
##### shortDescription
Specifies a set of available filter operations.

---
The following table lists default operations by [data type](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/dataType.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataType'):

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
    <td>[ "contains", "notcontains", "startswith", "endswith", "=", "<>", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"numeric"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"date", "datetime"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"boolean"</td>
    <td>[ "=", "<>", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"object"</td>
    <td>[ "isblank", "isnotblank" ]</td>
  </tr>
  </tbody>
</table>
</div>

The *"isblank"* operation returns null values only; *"isnotblank"* - non-null values.

[note] [Lookup](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/lookup '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/')'s default operations are [ "=", "<>", "isblank", "isnotblank" ] regardless of the data type.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `FilterBuilderFieldFilterOperations` enum. This enum accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, `IsBlank` and `IsNotBlank`.