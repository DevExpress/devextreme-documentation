Each DevExtreme editor allows changing its validation state and error message using the **isValid** and **validationError** options, which enables you to use any validation engine or custom validation logic. The following example shows a custom function called **validateLogin** validating a text box value:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var validateLogin = function (e) {
            if (!e.value) {
                e.component.option({
                    validationError: { message: "Login is required" },
                    isValid: false
                });
                return;
            }
            if (!e.value.match(/^[a-zA-Z0-9]+$/)) {
                e.component.option({
                    validationError: { message: "Login can contain only numbers and letters" },
                    isValid: false
                });
                return;
            }	
            e.component.option("isValid", true);
        }
        $("#login").dxTextBox({
            placeholder: "Login",
            onValueChanged: validateLogin
        })
    });

    <!--HTML-->
    <div id="login"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box 
        [(value)]="login"
        placeholder="Login"
        [isValid]="isLoginValid"
        [validationError]="loginValidationError"
        (onValueChanged)="validateLogin()">
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
        isLoginValid: boolean;
        loginValidationError: { message?: string };

        constructor() {
            this.isLoginValid = true;
            this.loginValidationError = {};
        }

        validateLogin() {
            if (!this.login) {
                this.loginValidationError = { message: "Login is required" };
                this.isLoginValid = false;
                return;
            }
            if (!this.login.match(/^[a-zA-Z0-9]+$/)) {
                this.loginValidationError = { message: "Login can contain only numbers and letters" };
                this.isLoginValid = false;
                return;
            }   
            this.isLoginValid = true;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### AngularJS

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('demoController', function ($scope) {
            $scope.login = "";
            $scope.isLoginValid = true;
            $scope.loginValidationError = {};
            $scope.validateLogin = function (params) {
                if ($scope.login === "") {
                    $scope.loginValidationError = { message: "Login cannot be empty" };
                    $scope.isLoginValid = false;
                    return;
                }
                if (!$scope.login.match(/^[a-zA-Z0-9]+$/)) {
                    $scope.loginValidationError = { message: "Login contains unexpected characters" };
                    $scope.isLoginValid = false;
                    return;
                }	
                $scope.isLoginValid = true;
            };
        });

    <!--HTML-->
    <div ng-controller="demoController">
        <div dx-text-box="{
            placeholder: 'Login',
            onValueChanged: 'validateLogin($event)'
            bindingOptions: {
                value: 'login',
                isValid: 'isLoginValid',
                validationError: 'loginValidationError'
            }
        }"></div>
    </div>

##### Knockout#####

    <!--JavaScript-->
    var viewModel = {
        login: ko.observable(""),
        isLoginValid: ko.observable(true),
        loginValidationError: ko.observable({}),
        validateLogin: function (params) {
            if (this.login () === "") {
                this.loginValidationError({ message: "Login cannot be empty" });
                this.isLoginValid(false);
                return;
            }
            if (!this.login ().match(/^[a-zA-Z0-9]+$/)) {
                this.loginValidationError({ message: "Login contains unexpected characters" });
                this.isLoginValid(false);
                return;
            }	
            this.isLoginValid(true);
        }
    }
    ko.applyBindings(viewModel);

    <!--HTML-->
    <div data-bind="dxTextBox: {
        value: login,
        placeholder: 'Login',
        onValueChanged: validateLogin
        isValid: isLoginValid,
        validationError: loginValidationError
    }">
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-text-box
            :value.sync="login"
            placeholder="Login"
            :isValid="isLoginValid"
            :validation-error="loginValidationError"
            @value-changed="validateLogin">
        </dx-text-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from 'devextreme-vue/text-box';

    export default {
        components: {
            DxTextBox
        },
        data() {
            return {
                login: undefined,
                isLoginValid: true,
                loginValidationError: {}
            }
        },
        methods: {
            validateLogin() {
                if (!this.login) {
                    this.loginValidationError = { message: "Login is required" };
                    this.isLoginValid = false;
                    return;
                }
                if (!this.login.match(/^[a-zA-Z0-9]+$/)) {
                    this.loginValidationError = { message: "Login can contain only numbers and letters" };
                    this.isLoginValid = false;
                    return;
                }   
                this.isLoginValid = true;
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

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: undefined,
                isLoginValid: true,
                loginValidationError: {}
            }
            this.setLogin = this.setLogin.bind(this);
        }

        setLogin(e) {
            if (!e.value) {
                this.setState({
                    login: e.value,
                    isLoginValid: false,
                    loginValidationError: { message: "Login is required" }
                });
                return;
            }
            if (!e.value.match(/^[a-zA-Z0-9]+$/)) {
                this.setState({
                    login: e.value,
                    isLoginValid: false,
                    loginValidationError: { message: "Login can contain only numbers and letters" }
                });
                return;
            }   
            this.setState({
                login: e.value,
                isLoginValid: true,
                loginValidationError: {}
            });
        }

        render() {
            return (
                <TextBox
                    value={this.state.login}
                    placeholder="Login"
                    isValid={this.state.isLoginValid}
                    validationError={this.state.loginValidationError}
                    onValueChanged={this.setLogin}
                />
            );
        }
    }
    export default App;

---
