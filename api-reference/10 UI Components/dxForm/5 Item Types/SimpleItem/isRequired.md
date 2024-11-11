---
id: dxFormSimpleItem.isRequired
type: Boolean | undefined
default: undefined
---
---
##### shortDescription
Specifies whether the current form item is required.

---
[note]

If you specify validation rules using the [validationRules](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#validationRules') property, the **isRequired** property is ignored. In this case, use the [Require](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/') validation rule instead. 

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...>
            <DxSimpleItem ...>
                <DxRequiredRule .../>
            </DxSimpleItem>
        </DxForm>
    </template>
    <script>
    import DxForm, { DxSimpleItem, DxRequiredRule } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxRequiredRule
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Form, { SimpleItem, RequiredRule } from 'devextreme-react/form';

    const App = () => {
        return (
            <Form ...>
                <SimpleItem ...>
                    <RequiredRule ... />
                </SimpleItem>
            </Form>
        );
    };

    export default App;

---

[/note]

#####See Also#####
- [Customize a Simple Item](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/#Customize_a_Simple_Item')
