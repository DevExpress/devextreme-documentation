---
id: dxValidationGroupResult.brokenRules
type: Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
---
---
##### shortDescription
An array of the [validation rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/'Validation_Rules/') that failed.

---
This array contains broken rules from all [Validators](/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/') in the validation group.

The validation rules are checked in the following order:

- All the sync rules are checked in the same order as in the [validationRules](/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/'Configuration/#validationRules) array. If a sync rule is broken, no further checks are performed and the **brokenRules** array contains only this rule. 

- If the sync rules successfully pass the checks, all the async rules are checked simultaneously. If any async rule is broken, it is added to the **brokenRules** array with other broken async rules.
