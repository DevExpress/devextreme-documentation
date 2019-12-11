---
type: function
---
---
##### shortDescription
A function that validates the target value.

##### param(options): object
An object defining validation parameters.

##### field(options.value): string|number
The validated value.

##### field(options.rule): object
The current rule object that exposes user-defined options, the <b>isValid</b> and <b>message</b> fields, and the rule type specific fields.

##### field(options.validator): object
The <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxValidator">dxValidator</a> object that caused the validation.

##### return: true|false
A Boolean value that indicates whether the validated value is valid against the checked rule.

---
In this function, you should indicate whether or not the validated value breaks the current rule. To access the validated value, use the **value** field of the parameter passed to the function. To access the current rule, use the **rule** field of the function parameter. Set the rule's **isValid** field. In addition, you can specify the rule's **message** field, as well as other fields that are specific for the current rule type, which is specified by the rule's **type** field.

As an alternative to the rule's **isValid** field, you can use the function's return value to specify the validation result.