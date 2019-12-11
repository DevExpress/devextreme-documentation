---
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object defining validation parameters.

##### field(options.value): String|Number
The validated value.

##### field(options.rule): Object
The current rule object that exposes user-defined options, the **isValid** and **message** fields, and the rule type specific fields.

##### field(options.validator): Object
The [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator') object that caused the validation.

##### return: Boolean
A Boolean value that indicates whether the validated value is valid against the checked rule.

---
