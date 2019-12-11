---
EventForAction: ..\4 Events\rowValidating.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [rowValidating](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowValidating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowValidating') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.brokenRules): Array
An array of broken rules. The structure of rule objects is described in the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxValidator/Validation_Rules/">Validation Rules</a> section.

##### field(e.isValid): Boolean
Indicates whether all the rules checked for the cells in the current row are satisfied.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a data source, the whole data object is considered the key.

##### field(e.newData): Object
Data of the validated row after user changes.

##### field(e.oldData): Object
Data of the validated row as it was before user changes.

##### field(e.errorText): String
The error message to be displayed in the grid's error row.

---
When data in a cell or in several cells is changed, the [validation rules](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#validationRules') specified for these cells are checked. Before the validation result (messages on the broken rules) is displayed in the grid, you can interfere by handling the **rowValidating** event. For instance, you can provide a common text for all the cells where validation rules are not satisfied. This text will be displayed under the validated row in a specially added *error row*. To provide a common text for a row, specify the **errorText** field of the event handling function's parameter. In addition, you can change the validation result before it is displayed, by performing an additional check and setting the result to the **isValid** field of the event handling function's parameter.

In batch mode, when several row updates are committed simultaneously, the **rowValidating** error fires for each row that has changes.