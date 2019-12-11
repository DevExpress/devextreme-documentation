//<!--@Knockout-->
var myViewModel = {
    login: ko.observable("Alex"),
    password: ko.observable(""),
    validateAndLogin: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are logged in as '" + this.login() + "'",
                position: {
                    my: "left top",
                    at: "left top",
                }
            }, "Success", 3000);
        }
    },
    checkPasswordLength: function (options) {
        if (options.value.length < 4) {
            options.rule.message = "The password is too short. The password length must be more than 4.";
            return false;
        } else {return true;}
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.login = "Alex";
    $scope.password = "";
    $scope.validateAndLogin = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are logged in as '" + $scope.login + "'",
                position: {
                    my: "left top",
                    at: "left top",
                }
            }, "Success", 3000);
        }
    };
    $scope.checkPasswordLength = function (options) {
        
        if (options.value.length < 4) {
            options.rule.message = "The password is too short. The password length must be more than 4.";
            return false;
        } else { return true; }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
$("#login").dxTextBox({
    value: 'Alex', placeholder: 'Login'
}).dxValidator({
    validationRules: [{ type: 'required', message: 'Login is required' }]
});
$("#password").dxTextBox({
    value: null, mode: 'password', placeholder: 'Password'
}).dxValidator({
    validationRules: [
        { type: 'required', message: 'Password can not be empty' },
        { type: 'custom', validationCallback: function (options) {
                if (options.value.length < 4) {
                    options.rule.message = "The password is too short. The password length must be more than 4.";
                    return false;
                } else { return true; }
            }
        }
    ]
});
$("#summary").dxValidationSummary({});
$("#button").dxButton({
    text: 'Register',
    onClick: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            var login = $("#login").dxTextBox('instance').option('value');
            DevExpress.ui.notify({
                message: "You are logged in as '" + login + "'",
                position: {
                    my: "left top",
                    at: "left top",
                }
            }, "Success", 3000);
        }
    }
});
});
//<!--/@jQuery-->