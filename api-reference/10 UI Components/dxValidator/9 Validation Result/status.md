---
id: dxValidatorResult.status
acceptValues: 'valid' | 'invalid' | 'pending'
type: String
---
---
##### shortDescription
Indicates the validation status.

---
This option can have one of the following values:

- *"valid"* - all validation checks passed
- *"pending"* - there are pending (not fulfilled or rejected) [async rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/')
- *"invalid"* - all validation checks are completed, but there are broken rules
