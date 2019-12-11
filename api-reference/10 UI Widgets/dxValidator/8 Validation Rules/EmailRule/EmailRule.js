//<!--@Knockout-->
var myViewModel = {
    email: ko.observable(""),
    password: ko.observable(""),
    validateAndLogin: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are logged in by the '" + this.email() + "' email.",
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
    $scope.email = "";
    $scope.password = "";
    $scope.validateAndLogin = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are logged in by the '" + $scope.email + "' email.",
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
    $("#email").dxTextBox({
        value: null, mode: 'email', placeholder: 'Email'
    }).dxValidator({
        validationRules: [
            { type: 'required', message: 'Email is required' },
            { type: 'email' }
        ]
    });
    $("#password").dxTextBox({
        value: null, mode: 'password', placeholder: 'Password'
    }).dxValidator({
        validationRules: [ { type: 'required', message: 'Password can not be empty.' } ]
    });
    $("#summary").dxValidationSummary({});
    $("#button").dxButton({
        text: 'Register',
        onClick: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                var email = $("#email").dxTextBox('instance').option('value');
                DevExpress.ui.notify({
                    message: "You are logged in by the '" + email + "' email.",
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