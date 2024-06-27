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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

[note] If you use a [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template'), you need to explicitly define **Validator**. Refer to the [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') API section for more information.

#####See Also#####
- [Validate the Form Data](/concepts/05%20UI%20Components/Form/01%20Getting%20Started%20with%20Form/70%20Validate%20the%20Form%20Data.md '/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/#Validate_the_Form_Data')
- [Submit the Form](/concepts/05%20UI%20Components/Form/01%20Getting%20Started%20with%20Form/80%20Submit%20the%20Form.md '/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/#Submit_the_Form')
- [Customize a Simple Item](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/#Customize_a_Simple_Item')
