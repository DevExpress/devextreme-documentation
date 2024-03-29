Call a group's [validate()](/api-reference/10%20UI%20Components/dxValidator/3%20Methods/validate().md '/Documentation/ApiReference/UI_Components/dxValidator/Methods/#validate') method in a [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/')'s [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') event handler to validate the group. You can access the **Validation Group** via the handler's argument. The Button always validates the group to which it belongs. If the membership is not specified, the Button validates the **Default Validation Group**.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        // var loginGroup = "loginGroup";
        $("#login")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // validationGroup: loginGroup,
                validationRules: [ /* ... */ ]
            });

        $("#password")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // validationGroup: loginGroup,
                validationRules: [ /* ... */ ]
            });

        $("#loginButton").dxButton({
            text: "Sign in",
            // validationGroup: loginGroup
            onClick: function (e) {
                var result = e.validationGroup.validate();
                if (result.isValid) {
                    // ...
                }
            }
        });
    });

    <!--HTML-->
    <div id="login"></div>
    <div id="password"></div>
    <div id="loginButton"></div>

##### Angular

    <!-- tab: app.component.html -->
    <!-- <dx-validation-group> -->
        <dx-text-box [(value)]="login">
            <dx-validator>
                <!-- Login validation rules are configured here -->
            </dx-validator>
        </dx-text-box>
        <dx-text-box [(value)]="password">
            <dx-validator>
                <!-- Password validation rules are configured here -->
            </dx-validator>
        </dx-text-box>
        <dx-button text="Sign in" (onClick)="signIn($event)"></dx-button>
    <!-- </dx-validation-group> -->

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        login: string;
        password: string;
        signIn(e) {
            let result = e.validationGroup.validate();
            if (result.isValid) {
                // Submit values to the server
            }
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import {
        DxTextBoxModule,
        DxValidatorModule,
        // DxValidationGroupModule,
        DxButtonModule
    } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxValidatorModule,
            // DxValidationGroupModule,
            DxButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- <DxValidationGroup> -->
            <DxTextBox v-model:value="login" placeholder="Login">
                <DxValidator>
                    <!-- Login validation rules are configured here -->
                </DxValidator>
            </DxTextBox>
            <DxTextBox v-model:value="password" placeholder="Password">
                <DxValidator>
                    <!-- Password validation rules are configured here -->
                </DxValidator>
            </DxTextBox>
            <DxButton text="Sign in" @click="signIn" />
        <!-- </DxValidationGroup> -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxPatternRule
    } from 'devextreme-vue/validator';
    // import DxValidationGroup from 'devextreme-vue/validation-group';
    import DxButton from 'devextreme-vue/button';
    
    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxPatternRule,
            // DxValidationGroup,
            DxButton
        },
        data() {
            return {
                login: undefined,
                password: undefined
            }
        },
        methods: {
            signIn(e) {
                let result = e.validationGroup.validate();
                if (result.isValid) {
                    // Submit values to the server
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TextBox from 'devextreme-react/text-box';
    import Validator, { 
        // Validation rule types are imported here
    } from 'devextreme-react/validator';
    import ValidationGroup from 'devextreme-react/validation-group';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: undefined,
                password: undefined
            }
            this.setLogin = this.setLogin.bind(this);
            this.setPassword = this.setPassword.bind(this);
            this.signIn = this.signIn.bind(this);
        }

        setLogin(e) {
            this.setState({ login: e.value });
        }
        setPassword(e) {
            this.setState({ password: e.value });
        }

        signIn(e) {
            let result = e.validationGroup.validate();
            if (result.isValid) {
                // Submit values to the server
            }
        }

        render() {
            return (
                {/* <ValidationGroup> */}
                    <TextBox
                        value={this.state.login}
                        placeholder="Login"
                        onValueChanged={this.setLogin}>
                        <Validator>
                            {/* Login validation rules are configured here */}
                        </Validator>
                    </TextBox>
                    <TextBox
                        value={this.state.password}
                        placeholder="Password"
                        onValueChanged={this.setPassword}>
                        <Validator>
                            {/* Password validation rules are configured here */}
                        </Validator>
                    </TextBox>
                    <Button
                        text="Sign in"
                        onClick={this.signIn}
                    />
                {/* </ValidationGroup> */}
            );
        }
    }
    export default App;

---

---
##### jQuery

Alternatively, you can use the [DevExpress.validationEngine.validateGroup](/api-reference/50%20Common/utils/validationEngine/validateGroup().md '/Documentation/ApiReference/Common/utils/validationEngine/#validateGroup') method to validate a group. 

    <!-- tab: index.js -->
    $(function() {
        $("#login").dxTextBox({})
            .dxValidator({
                validationGroup: "loginGroup",
                validationRules: [{
                    type: "required"
                }]
            });
            
        $("#password").dxTextBox({})
            .dxValidator({
                validationGroup: "loginGroup",
                validationRules: [{
                    type: "required"
                }]
            });
    
        $("#button").dxButton({
            text: "Sign in",
            onClick: function() {
                DevExpress.validationEngine.validateGroup("loginGroup");
            }
        });
    });

##### Angular

Alternatively, you can get a group's instance and call its [validate](/api-reference/10%20UI%20Components/dxValidationGroup/3%20Methods/validate().md '/Documentation/ApiReference/UI_Components/dxValidationGroup/Methods/#validate') method to validate this group:


    <!-- tab: app.component.html -->
    <dx-validation-group #targetGroup>
        <dx-text-box>
            <dx-validator>
                <dxi-validation-rule type="required">
                </dxi-validation-rule>
            </dx-validator>
        </dx-text-box>

        <dx-text-box>
            <dx-validator>
                <dxi-validation-rule type="required">
                </dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
    </dx-validation-group>

    <dx-button
        text="Sign in"
        (onClick)="validateGroup($event)">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxValidationGroupComponent } from 'devextreme-angular/ui/validation-group';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('targetGroup', {static: false}) validationGroup: DxValidationGroupComponent

        validateGroup() {
            this.validationGroup.instance.validate();
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    
    import { 
        DxTextBoxModule, 
        DxButtonModule, 
        DxValidatorModule, 
        DxValidationGroupModule
    } from "devextreme-angular";

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonModule,
            DxTextBoxModule, 
            DxValidatorModule,
            DxValidationGroupModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

Alternatively, you can get a group's instance and call its [validate](/api-reference/10%20UI%20Components/dxValidationGroup/3%20Methods/validate().md '/Documentation/ApiReference/UI_Components/dxValidationGroup/Methods/#validate') method to validate this group:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxValidationGroup
                :ref="groupRefKey">
                <DxTextBox>
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>

                <DxTextBox>
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </DxValidationGroup>

            <DxButton
                text="Sign in"
                @click="validateGroup"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator';
    import DxValidationGroup from 'devextreme-vue/validation-group';
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxValidationGroup,
            DxButton
        },
        data() {
            groupRefKey: 'targetGroup'
        },
        methods: {
            validateGroup() {
                this.validationGroup.validate();
            }
        },
        computed: {
            validationGroup: function() {
                return this.$refs[this.groupRefKey].instance;
            }
        }
    }
    </script>

##### React

Alternatively, you can get a group's instance and call its [validate](/api-reference/10%20UI%20Components/dxValidationGroup/3%20Methods/validate().md '/Documentation/ApiReference/UI_Components/dxValidationGroup/Methods/#validate') method to validate this group:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TextBox } from 'devextreme-react/text-box';
    import { Button } from 'devextreme-react/button';
    import { ValidationGroup } from 'devextreme-react/validation-group';
    import {
        Validator,
        RequiredRule
    } from 'devextreme-react/validator';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.validateGroup = this.validateGroup.bind(this);
            this.validationGroup = null;
        };
        
        validateGroup() {
            this.validationGroup.instance.validate();
        }

        render() {
            return (
                <React.Fragment>
                    <ValidationGroup
                        ref={ref => this.validationGroup = ref}>
                        <TextBox>
                            <Validator>
                                <RequiredRule />
                            </Validator>
                        </TextBox>

                        <TextBox>
                            <Validator>
                                <RequiredRule />
                            </Validator>
                        </TextBox>

                        <Button
                            text="Sign in"
                            onClick={this.validateGroup}
                        />
                    </ValidationGroup>
                <React.Fragment>
            );
        }
    }
    export default App;

---
