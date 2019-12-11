---
EventForAction: ..\4 Events\validated.md
type: function(validatedInfo)
---
---
##### shortDescription
A handler for the [validated](/api-reference/10%20UI%20Widgets/dxValidator/4%20Events/validated.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Events/#validated') event.

##### param(validatedInfo): Object
Provides function parameters.

##### field(validatedInfo.name): String
The value of the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxValidator/Configuration/#name">name</a> option.

##### field(validatedInfo.isValid): Boolean
Indicates whether all the rules checked for the value are satisfied.

##### field(validatedInfo.value): Object
The validated value.

##### field(validatedInfo.validationRules): Array
An array of validation rules specified for the current **dxValidator** object.

##### field(validatedInfo.brokenRule): Object
The object representing the first broken rule on the list of specified validation rules.

---
Assign a function to perform a custom action after an editor value is validated against the specified [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules').