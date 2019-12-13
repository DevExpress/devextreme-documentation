Validating the view model object rather than the editors allows you to separate validation logic from the UI, reuse it between multiple views and unit-test the implementation. To validate a view model's observable, extend it with an object whose **dxValidator** field contains the validator configuration. After that, associate a target editor with the validator using the **isValid** and **validationError** options.

    <!--JavaScript-->$(function () {
        var viewModel = {
            login: ko.observable("").extend({
                dxValidator: {
                    validationRules: [{ type: 'required', message: 'Login is required' }]
                }
            }),
            password: ko.observable("").extend({
                dxValidator: {
                    name: "Password",
                    validationRules: [{ type: 'required' }]
                }
            })
        };
        ko.applyBindings(viewModel);
    });

    <!--HTML--><div data-bind="dxTextBox: {
        value: login,
        placeholder: 'Login',
        isValid: login.dxValidator.isValid,
        validationError: login.dxValidator.validationError
    }"></div>
    <div data-bind="dxTextBox: {
        value: password,
        mode: 'password',
        placeholder: 'Password',
        isValid: password.dxValidator.isValid,
        validationError: password.dxValidator.validationError
    }"></div>

Finally, pass the to the [DevExpress.validationEngine.registerModelForValidation(model)](/api-reference/50%20Common/utils/validationEngine/registerModelForValidation(model).md '/Documentation/ApiReference/Common/utils/validationEngine/#registerModelForValidationmodel') method to register it in the validation engine. The registered view model can be validated at any point in your application by calling the [DevExpress.validationEngine.validateModel(model)](/api-reference/50%20Common/utils/validationEngine/validateModel(model).md '/Documentation/ApiReference/Common/utils/validationEngine/#validateModelmodel') method.

    <!--JavaScript-->var viewModel = {
        //...
        validateAndLogin: function (params) {
            var result = DevExpress.validationEngine.validateModel(this);
            if (result.isValid) {
                // ...
            }
        }
    };
    
    DevExpress.validationEngine.registerModelForValidation(viewModel);
    ko.applyBindings(viewModel);
