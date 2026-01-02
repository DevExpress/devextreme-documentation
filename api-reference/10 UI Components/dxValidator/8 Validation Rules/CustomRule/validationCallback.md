---
id: CustomRule.validationCallback
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object that defines validation parameters.

##### field(options.column): Object
The column to which the cell being validated belongs. Exists only when you validate a built-in editor in [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid') or [TreeList](/api-reference/10%20UI%20Components/dxTreeList '/Documentation/ApiReference/UI_Components/dxTreeList').

##### field(options.data): Object
Current row data. Exists only when you validate DataGrid or TreeList cell values.

##### field(options.formItem): Object
The form item being validated. Exists only when you validate a built-in editor in the [Form](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/') UI component.

##### field(options.rule): Object
The rule being checked.

##### field(options.validator): Object
The [Validator](/api-reference/10%20UI%20Components/dxValidator '/Documentation/ApiReference/UI_Components/dxValidator') object that initiated the validation.

##### field(options.value): String | Number
The validated value. Note that the value type depends on the validated editor.

##### return: Boolean
**true** if the value is valid; otherwise, **false**.

---
The following code sample shows a **validationCallback** example. The **validateNumber** function accepts a number and returns **true** if the number is even and **false** if it is odd:

---
##### jQuery

    <!-- tab: index.js -->
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

    <!-- tab: app.component.html -->
    <dx-number-box [value]="4">
        <dx-validator>
            <dxi-validator-validation-rule type="custom" 
                [validationCallback]="validateNumber" 
                message="An even number is expected">
            </dxi-validator-validation-rule>
        </dx-validator>
    </dx-number-box>

    <!-- tab: app.component.ts  -->
    import { DxNumberBoxModule, DxValidatorModule } from "devextreme-angular";
    import { ValidationCallbackData } from 'devextreme-angular/common';
    // ...
    export class AppComponent {
        validateNumber(e: ValidationCallbackData) {
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
        <DxNumberBox :value="4">
            <DxValidator>
                <DxCustomRule
                    :validation-callback="validateNumber"
                    message="An even number is expected"
                />
            </DxValidator>
        </DxNumberBox>
    </template>

    <script>
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
                            validationCallback={validateNumber}
                            message="An even number is expected"
                        />
                    </Validator>
                </NumberBox>
            );
        }
    }
    export default App;

---

The code snippet below demonstrates how to implement multiple validation messages in one CustomRule:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#numberBoxContainer").dxNumberBox({}).dxValidator({
            validationRules: [{
                type: "custom",
                validationCallback: validateNumber,
            }]
        });
    });
    function validateNumber (e) {
        switch (true) {
            case (e.value < 0):
                e.rule.message = "Enter a number greater than 0";
                return false;
            case (e.value > 100):
                e.rule.message = "Enter a number less than 100";
                return false;
            case (e.value % 2 !=0):
                e.rule.message = "Enter an even number";
                return false;
            default:
                return true;
        }
    }


##### Angular

    <!-- tab: app.component.html -->
    <dx-number-box>
        <dx-validator>
            <dxi-validator-validation-rule
                type="custom" 
                [validationCallback]="validateNumber" 
            >
            </dxi-validator-validation-rule>
        </dx-validator>
    </dx-number-box>

    <!-- tab: app.component.ts  -->
    import { DxNumberBoxModule, DxValidatorModule } from "devextreme-angular";
    import { ValidationCallbackData } from 'devextreme-angular/common';
    // ...
    export class AppComponent {
        validateNumber(e: ValidationCallbackData) {
            switch (true) {
                case (e.value < 0):
                    e.rule.message = "Enter a number greater than 0";
                    return false;
                case (e.value > 100):
                    e.rule.message = "Enter a number less than 100";
                    return false;
                case (e.value % 2 !=0):
                    e.rule.message = "Enter an even number";
                    return false;
                default:
                    return true;
            }
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
        <DxNumberBox>
            <DxValidator>
                <DxCustomRule
                    :validation-callback="validateNumber"
                />
            </DxValidator>
        </DxNumberBox>
    </template>

    <script>
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
                switch (true) {
                    case (e.value < 0):
                        e.rule.message = "Enter a number greater than 0";
                        return false;
                    case (e.value > 100):
                        e.rule.message = "Enter a number less than 100";
                        return false;
                    case (e.value % 2 !=0):
                        e.rule.message = "Enter an even number";
                        return false;
                    default:
                        return true;
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import NumberBox from 'devextreme-react/number-box';
    import Validator, {
        CustomRule
    } from 'devextreme-react/validator';

    class App extends React.Component {
        function validateNumber(e) {
            switch (true) {
                case (e.value < 0):
                    e.rule.message = "Enter a number greater than 0";
                    return false;
                case (e.value > 100):
                    e.rule.message = "Enter a number less than 100";
                    return false;
                case (e.value % 2 !=0):
                    e.rule.message = "Enter an even number";
                    return false;
                default:
                    return true;
            }
        }

        render() {
            return (
                <NumberBox>
                    <Validator>
                        <CustomRule
                            validationCallback={validateNumber}
                        />
                    </Validator>
                </NumberBox>
            );
        }
    }
    export default App;

---