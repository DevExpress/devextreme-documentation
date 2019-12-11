Use the ["custom"](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/') validation rule that allows you to implement a [custom validation function](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule/validationCallback.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#validationCallback') for server-side validation. In this function, perform an AJAX request and, when it succeeds, update the validation state and error message.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var validateLogin = function (params) {
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
        $("#login").dxTextBox({
            value: "",
            placeholder: 'Login'
        }).dxValidator({
            validationRules: [{
                type: 'required',
                message: 'Login is required'
            }, {
                type: 'custom',
                validationCallback: validateLogin
            }]
        });
    });

    <!--HTML--><div id="login"></div>

##### Angular

    <!--TypeScript-->
    import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        var validateLogin = function (params) {
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
        login: string = "";
        loginRules = [{
            type: 'required',
            message: 'Login is required'
        }, {
            type: "custom",
            validationCallback: validateLogin
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule,
            DxValidatorModule
        ],
        // ...
    })

    <!--HTML--><dx-text-box [(value)]="login" placeholder="Login">
        <dx-validator [validationRules]="loginRules"></dx-validator>
    </dx-text-box>

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
        <div dx-text-box="{ placeholder: 'Login' bindingOptions: { value: login } }",
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

---
