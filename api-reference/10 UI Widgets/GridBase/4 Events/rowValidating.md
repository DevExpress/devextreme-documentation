---
type: eventType
---
---
##### shortDescription
Raised after cells in a row are validated against [validation rules](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/validationRules.md '{basewidgetpath}/Configuration/columns/#validationRules').

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.brokenRules): array
An array of broken rules. The structure of rule objects is described in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

##### field(e.isValid): boolean
Indicates whether data in all cells of the row satisfies the validation rules.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.newData): object
The data of the validated row after changes.

##### field(e.oldData): object
The data of the validated row before changes.

##### field(e.errorText): string
An error message to be displayed.

---
Main article: [onRowValidating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowValidating.md '{basewidgetpath}/Configuration/#onRowValidating')

#####See Also#####
#include common-link-handleevents