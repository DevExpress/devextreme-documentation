---
id: dxFilterBuilderField.filterOperations
type: Array<Enums.FilterBuilderOperation, String>
default: undefined
---
---
##### shortDescription
Specifies a set of available filter operations.

---
The following table lists available filter operations by [data type](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataType'). The {WidgetName} uses the first operation in each array as the default operation for the specified data type.

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

[note] [Lookup](/api-reference/_hidden/dxFilterBuilderField/lookup '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/lookup/')'s default operations are [ "=", "<>", "isblank", "isnotblank" ] regardless of the data type.
