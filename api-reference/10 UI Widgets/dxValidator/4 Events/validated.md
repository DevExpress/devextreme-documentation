---
type: eventType
---
---
##### shortDescription
Fires after an editor value is validated against the specified [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules').

##### param(validatedInfo): object
Provides function parameters.

##### field(validatedInfo.name): string
The value of the [name](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name') option.

##### field(validatedInfo.isValid): boolean
Indicates whether all the rules checked for the value are satisfied.

##### field(validatedInfo.value): object
The validated value.

##### field(validatedInfo.validationRules): array
An array of the validation rules specified for the current **dxValidator** object.

##### field(validatedInfo.brokenRule): object
The object representing the first broken rule in the list of the specified validation rules.

---
Instead, you can use the [onValidated](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#onSelectionChanged) option to handle the event.

#####See Also#####
#include common-link-handleevents