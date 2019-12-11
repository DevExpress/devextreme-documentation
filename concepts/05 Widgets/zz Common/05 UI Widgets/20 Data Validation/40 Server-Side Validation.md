Use the ["custom"](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/') validation rule that allows you to implement a [custom validation function](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule/validationCallback.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#validationCallback') for server-side validation. In this function, perform an HTTP request and, when it succeeds, update the validation state and error message.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var validateLogin = function(params) {
            $.ajax({
                url: "https://www.example.com/services/validate-login",
                method: "POST",
                data: JSON.stringify({
                    login: params.value
                }),
                dataType: "json",
                contentType: "application/json",
                success: function(result) {
                    params.rule.isValid = result.Result;
                    params.rule.message = result.Message;
                    params.validator.validate();
                }
            })
            // Validation result until the response is received
            return false;
        };
        $("#login").dxTextBox({
            placeholder: "Login"
        }).dxValidator({
            validationRules: [{
                type: "required",
                message: "Login is required"
            }, {
                type: "custom",
                validationCallback: validateLogin
            }]
        });
    });

    <!--HTML--><div id="login"></div>

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';

    const requestConfig = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        login: string;

        constructor(private http:HttpClient) {
            this.validateLogin = this.validateLogin.bind(this);
        }

        validateLogin(params) {
            this.http.post(
                'https://www.example.com/services/validate-login',
                JSON.stringify({
                    login: params.value
                }),
                requestConfig
            ).subscribe(response => {
                params.rule.isValid = response['result'];
                params.rule.message = response['message'];
                params.validator.validate();
            })
            return false;
        }
    }

    <!-- tab: app.component.html -->
    <dx-text-box 
        [(value)]="login"
        placeholder="Login">
        <dx-validator>
            <dxi-validation-rule
                type="required"
                message="Login is required">
            </dxi-validation-rule>
            <dxi-validation-rule
                type="custom"
                [validationCallback]="validateLogin">
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

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

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('demoController', function ($scope) {
            $scope.validateLogin = function (params) {
                $.ajax({
                    url: "http://www.example.com/services/validate-login",
                    method: "POST",
                    data: {
                        login: params.value
                    },
                    success: function (result) {
                        params.rule.isValid = result.Result;
                        params.rule.message = result.Message;
                        params.validator.validate();
                    }
                })
                // Validation result until the response is recieved
                return false;
            };
            $scope.login = "";
            $scope.loginRules = [{
                type: 'required',
                message: 'Login is required'
            }, {
                type: "custom",
                validationCallback: validateLogin
            }];
        });

    <!--HTML-->
    <div ng-controller="demoController">
        <div dx-text-box="{ placeholder: 'Login' bindingOptions: { value: 'login' } }",
            dx-validator="{ validationRules: loginRules }">   
        </div>
    </div>

##### Knockout#####

    <!--JavaScript-->
    var viewModel = {
        validateLogin: function (params) {
            $.ajax({
                url: "http://www.example.com/services/validate-login",
                method: "POST",
                data: {
                    login: params.value
                },
                success: function (result) {
                    params.rule.isValid = result.Result;
                    params.rule.message = result.Message;
                    params.validator.validate();
                }
            })
            // Validation result until the response is recieved
            return false;
        },
        login: ko.observable(""),
        loginRules: [{
            type: 'required',
            message: 'Login is required'
        }, {
            type: "custom",
            validationCallback: validateLogin
        }]
    }
    ko.applyBindings(viewModel);

    <!--HTML-->
    <div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
        dxValidator: { validationRules: loginRules }">
    </div>

##### Vue

#include common-note-axios

    <!-- tab: App.vue -->
    <template>
        <dx-text-box
            :value.sync="login"
            placeholder="Login">
            <dx-validator>
                <dx-required-rule message="Login is required" />
                <dx-custom-rule :validation-callback="validateLogin" />
            </dx-validator>
        </dx-text-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxCustomRule
    } from 'devextreme-vue/validator';
    import axios from 'axios';

    const requestConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxCustomRule
        },
        data() {
            return {
                login: undefined
            };
        },
        methods: {
            validateLogin(params) {
                axios.post(
                    'https://www.example.com/services/validate-login',
                    JSON.stringify({
                        login: params.value
                    }),
                    requestConfig
                ).then(response => {
                    params.rule.isValid = response.data['result'];
                    params.rule.message = response.data['message'];
                    params.validator.validate();
                })
                return false;
            }
        }
    }
    </script>

##### React

#include common-note-axios

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TextBox from 'devextreme-react/text-box';
    import Validator, {
        RequiredRule,
        CustomRule
    } from 'devextreme-react/validator';
    import axios from 'axios';

    const requestConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.login = undefined;
        }

        validateLogin(params) {
            axios.post(
                'https://www.example.com/services/validate-login',
                JSON.stringify({
                    login: params.value
                }),
                requestConfig
            ).then(response => {
                params.rule.isValid = response.data['result'];
                params.rule.message = response.data['message'];
                params.validator.validate();
            })
            return false;
        }

        render() {
            return (
                <TextBox
                    value={this.login}
                    placeholder="Login">
                    <Validator>
                        <RequiredRule message="Login is required" />
                        <CustomRule validationCallback={this.validateLogin} />
                    </Validator>
                </TextBox>
            );
        }
    }

---
