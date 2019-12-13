---
id: CustomRule.validationCallback
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object defining validation parameters.

##### field(options.column): Object
The column to which the cell being validated belongs. Exists only when you validate a built-in editor in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid') or [TreeList](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Widgets/dxTreeList').

##### field(options.data): Object
The current row's data. Exists only when you validate a **DataGrid** or **TreeList** cell's value.

##### field(options.formItem): Object
The form item being validated. Exists only when you validate a built-in editor in the [Form](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/') widget.

##### field(options.rule): Object
The rule being checked.

##### field(options.validator): Object
The [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator') object that initiated the validation.

##### field(options.value): String | Number
The validated value.

##### return: Boolean
**true** if the value is valid; otherwise, **false**.

---
The following code shows a **validationCallback** example. The function accepts a number and returns **true** if the number is even and **false** if it is odd:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#numberBoxContainer").dxNumberBox({
            value: 4
        }).dxValidator({
            validationRules: [{
                type: "custom",
                validationCallback: validateNumber,
                message: "An even number is expected"
            }]
        });
    });
    function validateNumber (e) {
        return e.value % 2 == 0;
    }


##### Angular

    <!--HTML-->
    <dx-number-box [value]="4">
        <dx-validator>
            <dxi-validation-rule type="custom" 
                [validationCallback]="validateNumber" 
                message="An even number is expected">
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
        <dx-number-box :value="4">
            <dx-validator>
                <dx-custom-rule
                    :validation-callback="validateNumber"
                    message="An even number is expected"
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
                <NumberBox defaultValue={4}>
                    <Validator>
                        <CustomRule
                            validationCallback={this.validateNumber}
                            message="An even number is expected"
                        />
                    </Validator>
                </NumberBox>
            );
        }
    }
    export default App;

---
