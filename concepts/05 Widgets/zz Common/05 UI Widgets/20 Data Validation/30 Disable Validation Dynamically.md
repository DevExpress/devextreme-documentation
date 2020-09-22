All the [rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/'), except the [CustomRule](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/') and [AsyncRule](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/'), are always applied and cannot be disabled at runtime. 

If you need to disable validation dynamically, implement a **CustomRule** or **AsyncRule** in which you should simulate the validation logic of a target rule but apply it only under certain conditions.

The following example illustrates this case. A page contains two [TextBoxes](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') and a [CheckBox](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Widgets/dxCheckBox/'). The first **TextBox** has proper [RequiredRule](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/'); the second **TextBox** has a **CustomRule** that simulates the **RequiredRule** logic but applies it only when the **CheckBox** is selected. The [reevaluate](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule/reevaluate.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#reevaluate') option is enabled to re-check the **TextBox** value after the **CheckBox** value was changed.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#firstName").dxTextBox({ })
            .dxValidator({
                validationRules: [{
                    type: "required"
                }]
            });

        $("#lastName").dxTextBox({ })
            .dxValidator({
                validationRules: [{
                    type: "custom",
                    message: "Required",
                    reevaluate: true,
                    validationCallback: function(e) {
                        if ($("#checkBox").dxCheckBox("option", "value")) {
                            return !!e.value;
                        }
                        return true; 
                    }        
                }]
            });

        $("#validationButton").dxButton({
            text: "Validate",
            onClick: function (params) {
                params.validationGroup.validate();
            }
        });

        $("#checkBox").dxCheckBox({
            text: "Validate last name",
            value: false
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule type="required">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule 
                type="custom"
                message="Required" 
                [validationCallback]="customCallback"
                [reevaluate]="true">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <dx-button
        text="Validate group"
        (onClick)="validateGroup($event)">
    </dx-button>

    <dx-check-box
        [(value)]="checkBoxValue">
    </dx-check-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            this.customCallback = this.customCallback.bind(this);
        }
        
        checkBoxValue = false;

        customCallback(e) {
            if (this.checkBoxValue) {
                return !!e.value;
            }
            return true;
        }

        validateGroup(params) {
            params.validationGroup.validate();
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';

    import { 
        DxTextBoxModule, 
        DxButtonModule, 
        DxCheckBoxModule, 
        DxValidatorModule 
    } from "devextreme-angular";

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxCheckBoxModule,
        DxButtonModule,
        DxTextBoxModule, 
        DxValidatorModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="root">
            <DxTextBox>
                <DxValidator>
                    <DxRequiredRule />                
                </DxValidator>
            </DxTextBox>

            <DxTextBox>
                <DxValidator>
                    <DxCustomRule 
                        message="Required" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
                </DxValidator>
            </DxTextBox>

            <DxButton
                text="Validate group"
                @click="validateGroup"
            />

            <DxCheckBox 
                v-model:value="checkBoxValue" 
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextBox, DxButton, DxCheckBox } from 'devextreme-vue';
    import {
        DxValidator,
        DxRequiredRule,
        DxCustomRule
    } from 'devextreme-vue/validator';

    export default {
        components: {
            DxTextBox,
            DxButton,
            DxCheckBox,
            DxValidator,        
            DxRequiredRule,
            DxCustomRule
        },
        data() {
            return {
                checkBoxValue: false
            };
        },
        methods: {
            customCallback(e) {
                if (this.checkBoxValue) {
                    return !!e.value;
                }
                return true;
            },

            validateGroup(params) {
                params.validationGroup.validate();
            }
        }    
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { 
        CheckBox, 
        TextBox, 
        Button 
    } from 'devextreme-react';
    import {
        Validator,
        RequiredRule,
        CustomRule
    } from 'devextreme-react/validator';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.synchronizeValues = this.synchronizeValues.bind(this);
            this.customCallback = this.customCallback.bind(this);
            this.validateGroup = this.validateGroup.bind(this);
            this.state = { checkBoxValue: false };
        };

        handleCheckBoxChange(e) {
            this.setState({ checkBoxValue: e.value });
        }

        render() {
            return (
                <div id="root">
                    <TextBox>
                        <Validator>
                            <RequiredRule />
                        </Validator>
                    </TextBox>

                    <TextBox>
                        <Validator>
                            <CustomRule 
                                message="Required" 
                                validationCallback={this.customCallback}
                                reevaluate={true}
                            />
                        </Validator>
                    </TextBox>

                    <Button
                        text="Validate group"
                        onClick={this.validateGroup}
                    />

                    <CheckBox
                        value={this.state.checkBoxValue}
                        onValueChanged={this.handleCheckBoxChange}
                    />
                </div>
            );
        }

        customCallback(e) {
            if (this.state.checkBoxValue) {
                return !!e.value;
            }
            return true;
        }

        validateGroup(params) {
            params.validationGroup.validate();
        }
    }

    export default App;

---
