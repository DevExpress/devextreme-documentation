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
The current rule object that exposes user-defined options, the <b>isValid</b> and <b>message</b> fields, and the rule type specific fields.

##### field(options.validator): Object
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxValidator">dxValidator</a> object that caused the validation.

##### return: Boolean
A Boolean value that indicates whether the validated value is valid against the checked rule.

---
