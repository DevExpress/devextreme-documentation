---
id: GridBase.rowValidating
type: eventType
---
---
##### shortDescription
Raised after cells in a row are validated against [validation rules](/api-reference/_hidden/GridBaseColumn/validationRules.md '{basewidgetpath}/Configuration/columns/#validationRules').

##### param(e): Object
Information about the event.

##### field(e.brokenRules): Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
An array of broken rules. The structure of rule objects is described in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.errorText): String
An error message to be displayed.

##### field(e.isValid): Boolean
Indicates whether data in all cells of the row satisfies the validation rules.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newData): Object
The data of the validated row after changes.

##### field(e.oldData): Object
The data of the validated row before changes.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
Main article: [onRowValidating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowValidating.md '{basewidgetpath}/Configuration/#onRowValidating')

#####See Also#####
#include common-link-handleevents
