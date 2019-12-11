---
type: object
---
---
##### shortDescription
A validation rule that demands that a validated editor has a value that equals to a specified expression.

---
To specify the expression that the validated field must match, set the rule's [comparisonTarget](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CompareRule/comparisonTarget.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonTarget') configuration option. Assign a function to this option. The validated value will be compared to the function's return value. The comparison will be performed by using the operator that is set for the [comparisonType](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CompareRule/comparisonType.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonType') option.