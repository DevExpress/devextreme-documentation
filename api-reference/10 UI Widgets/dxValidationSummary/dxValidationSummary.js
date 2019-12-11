//<!--@Knockout-->
var viewModel = {
    login: ko.observable(""),
    password: ko.observable(""),
    validateAndSubmit: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are registered",
                position: {
                    my: "left top",
                    at: "left top",
                    offset: 15
                }
            }, "success", 3000);
        }
    }
};
ko.applyBindings(viewModel);

//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.login = "";
    $scope.password = "";
    $scope.validateAndSubmit = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are registered",
                position: {
                    my: "left top",
                    at: "left top",
                    offset: 15
                }
            }, "success", 3000);
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#textBox1").dxTextBox({
        value: null, placeholder: 'Login'
    }).dxValidator({
        name: 'Login',
        validationRules: [{
            type: 'required'
        }, {
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'Do not use digits.'
        }]
    });
    $("#textBox2").dxTextBox({
        mode: 'password', placeholder: 'Password'
    }).dxValidator({
        validationRules: [{
            type: 'required',
            message: 'Password is required'
        }]
    });
    $("#summary").dxValidationSummary({});
    $("#button").dxButton({
        text: 'Validate and submit',
        onClick: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify({
                    message: "You are registered",
                    position: {
                        my: "left top",
                        at: "left top",
                        offset: 15
                    }
                }, "success", 3000);
            }
        }
    });
});
//<!--/@jQuery-->