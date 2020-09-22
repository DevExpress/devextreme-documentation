Associate a DevExtreme editor with the [Validator](/api-reference/10%20UI%20Widgets/dxValidator '/Documentation/ApiReference/UI_Widgets/dxValidator/') widget and specify [validationRules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules') to validate the editor. The full list of predefined validation rules is available in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') Reference section.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#login").dxTextBox({
            placeholder: 'Login'
        }).dxValidator({
            validationRules: [{
                type: 'required'
            }, {
                type: 'pattern',
                pattern: '^[a-zA-Z]+$',
                message: 'Do not use digits.'
            }]
        });
    });

    <!--HTML-->
    <div id="login"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box [(value)]="login" placeholder="Login">
        <dx-validator>
            <dxi-validation-rule
                type="required">
            </dxi-validation-rule>
            <dxi-validation-rule
                type="pattern"
                pattern="^[a-zA-Z]+$"
                message="Do not use digits.">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        login: string;
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxValidatorModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--JavaScript-->function Controller ($scope) {
        $scope.login = '';
        $scope.loginRules = [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }];
    }

    <!--HTML--><div dx-text-box="{ value: login, placeholder: 'Login' }",
        dx-validator="{ validationRules: loginRules }">   
    </div>

##### Knockout

    <!--JavaScript-->var viewModel = {
        login: ko.observable(""),
        loginRules: [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }]
    };
    ko.applyBindings(viewModel);

    <!--HTML--><div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
        dxValidator: { validationRules: loginRules }">
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox v-model:value="login" placeholder="Login">
            <DxValidator>
                <DxRequiredRule />
                <DxPatternRule pattern="^[a-zA-Z]+$" message="Do not use digits." />
            </DxValidator>
        </DxTextBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxPatternRule
    } from 'devextreme-vue/validator';
    
    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxPatternRule
        },
        data() {
            return {
                login: undefined
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
        RequiredRule,
        PatternRule
    } from 'devextreme-react/validator';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: undefined
            }
            this.setLogin = this.setLogin.bind(this);
        }

        setLogin(e) {
            this.setState({ login: e.value });
        }
        render() {
            return (
                <TextBox
                    value={this.state.login}
                    placeholder="Login"
                    onValueChanged={this.setLogin}>
                    <Validator>
                        <RequiredRule />
                        <PatternRule
                            pattern="^[a-zA-Z]+$"
                            message="Do not use digits."
                        />
                    </Validator>
                </TextBox>
            );
        }
    }
    export default App;

---

