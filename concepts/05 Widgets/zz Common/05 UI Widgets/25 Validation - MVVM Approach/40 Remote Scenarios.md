When validation requires a request to a server, some time may pass until a response from the server comes. Thus, validation should be performed with a delay. Therefore, we recommend that you use the ['custom'](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/') rule for such remote scenarios. The 'custom' rule allows you to define a function where you can validate the editor value yourself.

Below, you can see an example where two fields must be validated. One of these fields demands a request to a server. Thus, this field will be validated within the [validationCallback](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule/validationCallback.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#validationCallback') function of a 'custom' rule.

To emulate a request to a server, a validation will be performed after the specified timeout. While waiting for the specified timeout, the editor value can be considered either valid or invalid (this depends on the value returned by the **validationCallback** function). Choose the scenario that is most appropriate for your application.

#####AngularJS#####

    <!--HTML-->
    <div ng-controller="demoController">
        <div dx-text-box="{ value: login, placeholder: 'Login' }",
            dx-validator="{
                validationRules: [
                    { type: 'required', message: 'Login is required' },
                    { type: 'custom', validationCallback: checkLoginAvailable,
                        message: 'This login is not available, please choose another one.' }
                ]
            }">   
        </div>
        <div dx-text-box="{ value: password, mode: 'password', placeholder: 'Password' }"
            dx-validator="{ 
                validationRules: [
                    { type: 'required', message: 'Password can not be empty.' }
                ]
            }">   
        </div>
        <div dx-validation-summary="{ }"></div>
        <div dx-button="{ text: 'Register', onClick: register }"></div>
    </div>        

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
           .controller('demoController', function ($scope) {
                $scope.login = "";
                $scope.password = "";
                $scope.register = function (params) {
                    var result = params.validationGroup.validate();
                    if (result.isValid) {
                        DevExpress.ui.notify({
                            message: "You are logged in as " + $scope.login,
                            position: {
                                my: "left top",
                                at: "left top"
                            }
                        }, "success", 3000);
                    }
                };
                $scope.checkLoginAvailable = function (params) {
                    // Emulates response from a server
                    setTimeout(function () {
                        // Checks if username is already used
                        if (params.value === "Alex") {
                            params.rule.isValid = false;
                            params.validator.validate();
                        } else {
                            params.rule.isValid = true;
                            params.validator.validate();
                        }
                    }, 1000);
                    // While waiting for server response 
                    // the editor value is considered invalid 
                    return false;
                }
           });

#####Knockout#####

    <!--HTML-->
    <div data-bind="dxTextBox: { value: login, placeholder: 'Login' },
        dxValidator: {
            validationRules: [
                { type: 'required', message: 'Login is required' },
                { type: 'custom', validationCallback: checkLoginAvailable,
                    message: 'This login is not available, please choose another one.' }
            ]
        }">
    </div>
    <img style="position: absolute; right:10px; top: 9px;" data-bind="visible: loginRemoteCheckTimeout" src="../Images/preloader.gif" />
    <div data-bind="dxTextBox: { value: password, mode: 'password', placeholder: 'Password' },
        dxValidator: {
            validationRules: [
                { type: 'required', message: 'Password can not be empty.' }
            ]
        }"> 
    </div>
    <div data-bind="dxValidationSummary: { }"></div>
    <div data-bind="dxButton: { text: 'Register', onClick: register }"></div>

    <!--JavaScript-->
    var viewModel = {
        login: ko.observable(""),
        password: ko.observable(""),
        register: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify({
                    message: "You are logged in as " + this.login(),
                    position: {
                        my: "left top",
                        at: "left top"
                    }
                }, "success", 3000);
            }
        },
        checkLoginAvailable: function (params) {
           // Emulates response from a server
           setTimeout(function () {
                // Checks if username is already used
                if (params.value === "Alex") {
                    params.rule.isValid = false;
                    params.validator.validate();
                } else {
                    params.rule.isValid = true;
                    params.validator.validate();
                }
            }, 1000);
            // While waiting for server response 
            // the editor value is considered invalid 
            return false;
        }
    }
    ko.applyBindings(viewModel);