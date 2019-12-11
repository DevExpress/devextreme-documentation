---
type: eventType
---
---
##### shortDescription
Fires when a cell(s) in a row is validated.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.brokenRules): array
An array of broken rules. The structure of rule objects is described in the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxValidator/Validation_Rules/">Validation Rules</a> section.

##### field(e.isValid): boolean
Indicates whether all the rules checked for the cells in the current row are satisfied.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a data source, the whole data object is considered the key.

##### field(e.newData): object
Data of the validated row after user changes.

##### field(e.oldData): object
Data of the validated row as it was before user changes.

##### field(e.errorText): string
The error message to be displayed in the grid's error row.

---
Instead, you can use the [onRowValidating](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowValidating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowValidating') option to handle the event.

When data in a cell or in several cells is changed, the [validation rules](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#validationRules') specified for these cells are checked. Before the validation result (messages on the broken rules) is displayed in the grid, you can interfere by handling the **rowValidating** event. For instance, you can provide a common text for all the cells where validation rules are not satisfied. This text will be displayed under the validated row in a specially added *error row*. To provide a common text for a row, specify the **errorText** field of the event handler's parameter. In addition, you can change the validation result before it is displayed by performing an additional check and setting the result to the **isValid** field of the event handler's parameter.

In batch mode, when several row updates are committed simultaneously, the **rowValidating** error fires for each row that has changes.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')