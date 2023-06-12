---
id: dxDataGrid.Options.onRowValidating
type: function(e)
---
---
##### shortDescription
A function that is executed after cells in a row are validated against [validation rules](/api-reference/_hidden/GridBaseColumn/validationRules.md '{basewidgetpath}/Configuration/columns/#validationRules').

##### param(e): ui/data_grid:RowValidatingEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.brokenRules): Array<ValidationRule>
An array of broken rules. The structure of rule objects is described in the [Validation Rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/') section.

##### field(e.errorText): String
An error message to be displayed.

##### field(e.isValid): Boolean
Indicates whether data in all row cells satisfies the validation rules.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.newData): Object
The data of the validated row after changes.

##### field(e.oldData): any
The data of the validated row before changes.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
<!-- Description goes here -->