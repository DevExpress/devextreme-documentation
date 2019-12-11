---
id: dxValidator.Options.onValidated
type: function(validatedInfo)
EventForAction: dxValidator.validated
---
---
##### shortDescription
A function that is executed after a value is validated.

##### param(validatedInfo): Object
Information about the event.

##### field(validatedInfo.brokenRule): RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule
The object representing the first broken rule on the list of specified validation rules.

##### field(validatedInfo.isValid): Boolean
Indicates whether all the [rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules') checked for the value are satisfied.

##### field(validatedInfo.name): String
The value of the [name](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name') option.

##### field(validatedInfo.validationRules): Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule>
An array of validation rules specified for the current **dxValidator** object.

##### field(validatedInfo.value): Object
The validated value.

---
