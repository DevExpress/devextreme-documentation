---
id: dxFormSimpleItem.validationRules
type: Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
default: undefined
---
---
##### shortDescription
An array of validation rules to apply to the item's editor.

---
Refer to the following topic for information about predefined validation rules: [Validation Rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

[note]

- When an item [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') is configured, do not specify this property. Configure a [Validator](/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator/') within the template and specify **Validator**.[validationRules](/api-reference/10%20UI%20Components/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Components/dxValidator/Configuration/#validationRules') instead.
- The Form is repainted when you update **validationRules** as follows:    
    - When you add or remove [RequiredRule](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/').
    - When you set **validationRules** to an empty array or add a rule to an empty **validationRules** array. 

[/note]

#####See Also#####
- [Validate the Form Data](/concepts/05%20UI%20Components/Form/01%20Getting%20Started%20with%20Form/70%20Validate%20the%20Form%20Data.md '/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/#Validate_the_Form_Data')
- [Submit the Form](/concepts/05%20UI%20Components/Form/01%20Getting%20Started%20with%20Form/80%20Submit%20the%20Form.md '/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/#Submit_the_Form')
- [Customize a Simple Item](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/#Customize_a_Simple_Item')
