$(function () {
    var loginRemoteCheckTimeout = null;
    var changeImageVisibility = function (param) {
        if (param) {
            $("#image").show();
        } else { $("#image").hide(); }
    };
    changeImageVisibility(false);
    var checkLoginAvailable = function (params) {
        if (loginRemoteCheckTimeout) {
            clearTimeout(loginRemoteCheckTimeout);
        }
        var timeoutId = setTimeout(function () {
            loginRemoteCheckTimeout = null;
            changeImageVisibility(loginRemoteCheckTimeout);
            //just came back from a server...
            if (params.value === "Alex") {
                params.rule.message = "User name " + params.value + " is already used. Please choose another one.";
                params.rule.isValid = false;
                params.validator.validate();
            } else {
                params.rule.isValid = true;
                params.validator.validate();
            }
        }, 1000);
        loginRemoteCheckTimeout = timeoutId;
        changeImageVisibility(loginRemoteCheckTimeout);
        return true;
    };
    var register = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are logged in as " + $("#login").dxTextBox('instance').option('value'),
                position: {
                    my: "left top",
                    at: "left top"
                }
            }, "success", 3000);
        }
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