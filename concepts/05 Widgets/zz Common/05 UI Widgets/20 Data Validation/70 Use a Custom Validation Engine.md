Each DevExtreme editor allows changing its validation state and error message using the **isValid** and **validationError** options, which enables you to use any validation engine or custom validation logic. The following example shows a custom function called **validateLogin** validating a text box value:

---
##### jQuery

    <!--JavaScript-->$(function () {
        var validateLogin = function (params) {
            if (params.value === "") {
                params.component.option({
                    validationError: { message: "Login cannot be empty" },
                    isValid: false
                });
                return;
            }
            if (!e.value.match(/^[a-zA-Z0-9]+$/)) {
                params.component.option({
                    validationError: { message: "Login contains unexpected characters" },
                    isValid: false
                });
                return;
            }	
            params.component.option("isValid", true);
        }
        $("#login").dxTextBox({
            placeholder: "Enter login",
            onValueChanged: validateLogin
        })
    });

    <!--HTML-->
    <div id="login"></div>

##### Angular

    <!--TypeScript-->
    import { DxTextBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        login: string = "";
        isLoginValid: boolean = true;
        loginValidationError: Object = {};
        validateLogin = function (params) {
            if (login === "") {
                loginValidationError = { message: "Login cannot be empty" };
                isLoginValid = false;
                return;
            }
            if (!login.match(/^[a-zA-Z0-9]+$/)) {
                loginValidationError = { message: "Login contains unexpected characters" };
                isLoginValid = false;
                return;
            }	
            isLoginValid = true;
        };
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

    <!--HTML--><dx-text-box 
        [(value)]="login"
        placeholder="Login"
        [(isValid)]="isLoginValid"
        [(validationError)]="loginValidationError"
        (onValueChanged)="validateLogin($event)">
    </dx-text-box>

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

---
