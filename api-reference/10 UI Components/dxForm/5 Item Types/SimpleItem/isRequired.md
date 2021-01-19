---
id: dxFormSimpleItem.isRequired
type: Boolean
default: undefined
---
---
##### shortDescription
Specifies whether the current form item is required.

---
[note]

If you specify validation rules using the [validationRules](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules') option, the **isRequired** option is ignored. In this case, use the [Require](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/') validation rule instead. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                // ...
                validationRules: [
                    { type: "required" }
                ]
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-item ... >
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

[/note]

#####See Also#####
- [Customize a Simple Item](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item')