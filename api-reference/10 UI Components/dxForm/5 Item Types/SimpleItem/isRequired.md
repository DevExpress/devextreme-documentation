---
id: dxFormSimpleItem.isRequired
type: Boolean | undefined
default: undefined
---
---
##### shortDescription
Specifies if the current form item is required.

---
When this property is enabled, Form uses [RequiredRule](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/') to validate the current item. The following values break **RequiredRule**:

- [Falsy JavaScript values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) except `0`, `-0`, `0n`, and `NaN`.
- Invalid values for the target editor (for example, a non-numeric string for the [NumberBox](/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/') component).

[note]

If you specify [validationRules](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#validationRules'), Form ignores the **isRequired** property. To implement **isRequired** functionality, specify a **RequiredRule** validation rule:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#formContainer').dxForm({
            items: [{
                validationRules: [
                    { type: 'required' }
                ]
            }, ... ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-form-item ... >
            <dxi-form-validation-rule type="required"></dxi-form-validation-rule>
        </dxi-form-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular/ui/form';
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
        <DxForm ... >
            <DxSimpleItem ... >
                <DxRequiredRule ... />
            </DxSimpleItem>
        </DxForm>
    </template>
    <script>
    import { DxForm, DxSimpleItem, DxRequiredRule } from 'devextreme-vue/form';

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
    import { Form, SimpleItem, RequiredRule } from 'devextreme-react/form';

    function App () {
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
