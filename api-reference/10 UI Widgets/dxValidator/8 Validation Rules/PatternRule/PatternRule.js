//<!--@Knockout-->
var myViewModel = {
    login: ko.observable(""),
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
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.login = "";
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
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#login").dxTextBox({
        value: null, placeholder: 'Login'
    }).dxValidator({
        validationRules: [
            { type: 'required', message: 'Login is required' },
            { type: 'pattern', pattern: '^[a-zA-Z]+$', message: 'Do not use digits in your login!' }
        ]
    });
    $("#password").dxTextBox({
        value: null, mode: 'password', placeholder: 'Password'
    }).dxValidator({
        validationRules: [{ type: 'required', message: 'Password can not be empty.' }]
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