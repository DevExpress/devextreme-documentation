---
id: dxFilterBuilderField.filterOperations
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between'
type: Array<String>
default: undefined
---
---
##### shortDescription
Specifies a set of available filter operations.

---
The following table lists default operations by [data type](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#dataType'):

<table class="dx-table">
  <tr>
    <th>dataType</th>
    <th>filterOperations</th>
  </tr>
  <tr>
    <td>"string"</td>
    <td>[ "contains", "notcontains", "startswith", "endswith", "=", "<>", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"numeric"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"date", "datetime"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"boolean"</td>
    <td>[ "=", "<>", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"object"</td>
    <td>[ "isblank", "isnotblank" ]</td>
  </tr>
</table>

The *"isblank"* operation returns null values and empty strings; *"isnotblank"* returns other values.

[note] [Lookup](/api-reference/_hidden/dxFilterBuilderField/lookup '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/lookup/')'s default operations are [ "=", "<>", "isblank", "isnotblank" ] regardless of the data type.

#include common-ref-enum with {
    enum: "`FilterBuilderFieldFilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `Between`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, `IsBlank`, and `IsNotBlank`"
}