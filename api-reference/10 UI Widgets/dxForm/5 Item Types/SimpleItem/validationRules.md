---
default: undefined
type: Array
---
---
##### shortDescription
An array of validation rules to be checked for the form item editor.

---
There are several predefined rule types. Each rule type demands a specific set of rule options. Refer to the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section of the [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') API reference to learn how to define rules of different types.

[note]

If you specify validation rules, the [isRequired](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired') option is ignored. In this case, use the [Require](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/') validation rule instead. 

    <!--JavaScript-->
    var formOptions = {
        // ...
        items: [
            //...
            {
                itemType: 'simple',
                // ...
                validationRules: [
                    //...
                    { type: 'required' }
                ]
            }
        ]
    }

[/note]