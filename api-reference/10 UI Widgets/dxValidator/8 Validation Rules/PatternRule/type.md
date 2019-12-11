---
id: PatternRule.type
acceptValues: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email'
type: String
---
---
##### shortDescription
Specifies the type of the current rule.

---
Set this field to "pattern" to define a rule that will be broken if the validated value does not match the regular expression specified by the [pattern](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/PatternRule/pattern.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/PatternRule/#pattern') configuration option.