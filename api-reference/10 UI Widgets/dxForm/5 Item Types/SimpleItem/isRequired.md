---
default: undefined
type: Boolean
---
---
##### shortDescription
Specifies whether the current form item is required.

---
[note]

If you specify validation rules using the [validationRules](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules') option, the **isRequired** option is ignored. In this case, use the [Require](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/') validation rule instead. 

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