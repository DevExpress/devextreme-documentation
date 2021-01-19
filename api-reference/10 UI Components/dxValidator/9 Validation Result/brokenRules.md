---
id: dxValidatorResult.brokenRules
type: Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
---
---
##### shortDescription
An array of the [validationRules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') that failed to pass the check.

---
The validation rules are checked in the following order:

- All the sync rules are checked in the same order as in the [validationRules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules') array. If a sync rule is broken, no further checks are performed and the **brokenRules** array contains only this rule. 

- If the sync rules successfully pass the checks, all the async rules are checked simultaneously. If any async rule is broken, it is added to the **brokenRules** array with other broken async rules.

#####See Also#####
- [pendingRules](/api-reference/10%20UI%20Widgets/dxValidator/9%20Validation%20Result/pendingRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Result/#pendingRules')
