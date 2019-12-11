---
id: CustomRule.validationCallback
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object defining validation parameters.

##### field(options.data): Object
The current row data. Exists only when you validate a [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid') or [TreeList](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Widgets/dxTreeList') cell's value.

##### field(options.rule): Object
The current rule object that exposes user-defined options, the **isValid** and **message** fields, and the rule type-specific fields.

##### field(options.validator): Object
The [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator') object that initiated the validation.

##### field(options.value): String | Number
The validated value.

##### return: Boolean
A Boolean value that indicates whether the validated value is valid against the checked rule.

---
In the following code, only odd numbers are considered valid:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#numberBoxContainer").dxNumberBox({
            value: 3
        }).dxValidator({
            validationRules: [{
                type: "custom",
                validationCallback: validateNumber,
                message: "An odd number is expected"
            }]
        });
    });
    function validateNumber (e) {
        return e.value % 2 == 0;
    }


##### Angular

    <!--HTML-->
    <dx-number-box [value]="3">
        <dx-validator>
            <dxi-validation-rule type="custom" 
                [validationCallback]="validateNumber" 
                message="An odd number is expected">
            </dxi-validation-rule>
        </dx-validator>
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule, DxValidatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        validateNumber(e) {
            return e.value % 2 == 0;
        }
    }
    @NgModule({
        imports: [
            DxNumberBoxModule,
            DxValidatorModule,
            // ...
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-number-box :value="3">
            <dx-validator>
                <dx-custom-rule
                    :validation-callback="validateNumber"
                    message="An odd number is expected"
                />
            </dx-validator>
        </dx-number-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxNumberBox from 'devextreme-vue/number-box';
    import DxValidator, {
        DxCustomRule
    } from 'devextreme-vue/validator';

    export default {
        components: {
            DxNumberBox,
            DxValidator,
            DxCustomRule
        },
        methods: {
            validateNumber(e) {
                return e.value % 2 == 0;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import NumberBox from 'devextreme-react/number-box';
    import Validator, {
        CustomRule
    } from 'devextreme-react/validator';

    class App extends React.Component {
        validateNumber(e) {
            return e.value % 2 == 0;
        }

        render() {
            return (
                <NumberBox defaultValue={3}>
                    <Validator>
                        <CustomRule
                            validationCallback={this.validateNumber}
                            message="An odd number is expected"
                        />
                    </Validator>
                </NumberBox>
            );
        }
    }
    export default App;

---

See [this](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/40%20Server-Side%20Validation.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Server-Side_Validation') topic for a server-side validation example.