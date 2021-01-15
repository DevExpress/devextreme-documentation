---
id: dxFormSimpleItem.validationRules
type: Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
default: undefined
---
---
##### shortDescription
An array of validation rules to be checked for the form item editor.

---
There are several predefined rule types. Each rule type demands a specific set of rule properties. Refer to the [Validation Rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/') section of the [Validator](/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/') API reference to learn how to define rules of different types.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#####See Also#####
- [Validate and Submit the Form](/concepts/05%20UI%20Components/Form/40%20Validate%20and%20Submit%20the%20Form.md '/Documentation/Guide/UI_Components/Form/Validate_and_Submit_the_Form/')