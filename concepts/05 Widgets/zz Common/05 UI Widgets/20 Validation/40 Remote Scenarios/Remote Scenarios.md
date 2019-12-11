When validation requires a request to a server, some time may pass until a response from the server comes. Thus, validation should be performed with a delay. Therefore, we recommend that you use the ['custom'](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/') rule for such remote scenarios. The 'custom' rule allows you to define a function where you can validate the editor value yourself.

Below, you can see an example where two fields must be validated. One of these fields demands a request to a server. Thus, this field will be validated within the [validationCallback](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule/validationCallback.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#validationCallback') function of a 'custom' rule.

To emulate a request to a server, a validation will be performed after the specified timeout. While waiting for the specified timeout, the editor value can be considered either valid or invalid. Choose the scenario that is most appropriate for your application.

    <!--HTML--><div id="login"></div>
    <img id="image" style="position: absolute; right:10px; top: 9px; visibilty: hidden" src="../Images/preloader.gif" />
    <div id="password"></div>
    <div id="summary"></div>
    <div id="button"></div>

    <!--JavaScript-->$(function() {
        var checkLoginAvailable,
            register;
        var checkLoginAvailable = function (params) {
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
        };

        $("#login").dxTextBox({
            value: null,
            placeholder: 'Login'
        }).dxValidator({
            validationRules: [{
                type: 'required',
                message: 'Login is required'
            }, {
                type: 'custom',
                validationCallback: checkLoginAvailable,
                message: 'This login is not available, please choose another one.'
            }]
        });

        $("#password").dxTextBox({
            value: null,
            mode: 'password',
            placeholder: 'Password'
        }).dxValidator({
            validationRules: [{
                type: 'required',
                message: 'Password can not be empty.'
            }]
        });

        $("#summary").dxValidationSummary({});

        $("#button").dxButton({
            text: 'Register', onClick: register
        });        
    });