Editors belonging to a single **Validation Group** can be validated together. All editors on a page are automatically collected in a **Default Validation Group**, which is suitable when you do not need to validate collections of editors separately. In other cases, define **Validation Groups** as shown in the following code:

---

##### jQuery

    <!--JavaScript-->$(function () {
        var loginGroup = "loginGroup";
        $("#login")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // ...
                validationGroup: loginGroup
            }); 
        $("#password")
            .dxTextBox({ /* ... */ })
            .dxValidator({
                // ...
                validationGroup: loginGroup
            });
    });

    <!--HTML-->
    <div id="login"></div>
    <div id="password"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-validation-group name="loginGroup">
        <dx-text-box [(value)]="login" placeholder="Login">
            <dx-validator>
                <!-- Login validation rules are configured here -->
            </dx-validator>
        </dx-text-box>
        <dx-text-box [(value)]="password" placeholder="Password">
            <dx-validator>
                <!-- Password validation rules are configured here -->
            </dx-validator>
        </dx-text-box>
    </dx-validation-group>

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
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTextBoxModule, DxValidatorModule, DxValidationGroupModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxValidatorModule,
            DxValidationGroupModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--HTML-->
    <div id="loginGroup" dx-validation-group="{ }">
        <div dx-text-box="{ value: login, ... }",
            dx-validator="{ ... }">
        </div>
        <div dx-text-box="{ value: password, ... }",
            dx-validator="{ ... }">   
        </div>
    </div>

##### Knockout

    <!--HTML-->
    <div id="loginGroup" data-bind="dxValidationGroup: { }">
        <div data-bind="dxTextBox: { value: login, ... },
            dxValidator: { ... }">
        </div>
        <div data-bind="dxTextBox: { value: password, ... },
            dxValidator: { ... }">   
        </div>
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxValidationGroup name="loginGroup">
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
        </DxValidationGroup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxPatternRule
    } from 'devextreme-vue/validator';
    import DxValidationGroup from 'devextreme-vue/validation-group';
    
    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxPatternRule,
            DxValidationGroup
        },
        data() {
            return {
                login: undefined,
                password: undefined
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TextBox from 'devextreme-react/text-box';
    import Validator, { 
        // Validation rule types are imported here
    } from 'devextreme-react/validator';
    import ValidationGroup from 'devextreme-react/validation-group';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: undefined,
                password: undefined
            }
            this.setLogin = this.setLogin.bind(this);
            this.setPassword = this.setPassword.bind(this);
        }

        setLogin(e) {
            this.setState({ login: e.value });
        }
        setPassword(e) {
            this.setState({ password: e.value });
        }
        render() {
            return (
                <ValidationGroup name="loginGroup">
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
                </ValidationGroup>
            );
        }
    }
    export default App;

---
