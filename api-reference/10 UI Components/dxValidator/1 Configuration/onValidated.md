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

##### field(validatedInfo.brokenRule): RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule
The object that represents the first broken rule on the list of specified validation rules.

##### field(validatedInfo.brokenRules): Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
An array of [validationRules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/') that failed to pass the check.

##### field(validatedInfo.isValid): Boolean
Indicates whether the value satisfies all rules.

##### field(validatedInfo.name): String
The value of the [name](/api-reference/10%20UI%20Components/dxValidator/1%20Configuration/name.md '/Documentation/ApiReference/UI_Components/dxValidator/Configuration/#name') property.

##### field(validatedInfo.status): 'valid' | 'invalid' | 'pending'
Indicates the validation [status](/api-reference/10%20UI%20Components/dxValidator/9%20Validation%20Result/status.md '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Result/#status').

##### field(validatedInfo.validationRules): Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
An array of validation rules specified for the current **dxValidator** object.

##### field(validatedInfo.value): Object
The validated value.

---
