---
EventForAction: ..\4 Events\validated.md
type: function(validatedInfo)
---
---
##### shortDescription
A handler for the [validated](/api-reference/10%20UI%20Widgets/dxValidator/4%20Events/validated.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Events/#validated') event.

##### param(selectedRowsInfo): object
Provides function parameters.

##### field(selectedRowsInfo.name): string
The value of the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxValidator/Configuration/#name">name</a> option.

##### field(selectedRowsInfo.isValid): boolean
Indicates whether all the rules checked for the value are satisfied.

##### field(selectedRowsInfo.value): object
The validated value.

##### field(selectedRowsInfo.validationRules): array
An array of validation rules specified for the current dxValidator object.

##### field(selectedRowsInfo.brokenRule): object
The object representing the first broken rule on the list of specified validation rules.

---
Assign a function to perform a custom action after an editor value is validated against the specified [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules').