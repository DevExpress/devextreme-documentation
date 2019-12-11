//<!--@Knockout-->
var viewModel = {
    login: ko.observable(""),
    password: ko.observable(""),
    phone: ko.observable(""),
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
    },
    submit: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "Your phone number is submitted.",
                position: {
                    my: "left top",
                    at: "left top",
                }
            }, "Success", 3000);
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
    $scope.phone = "";
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
    };
    $scope.submit = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "Your phone number is submitted.",
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
var validationGroup1 = "group1";
var validationGroup2 = "group2";
$("#login").dxTextBox({
    value: null, placeholder: 'Login'    
}).dxValidator({
    name: 'Login',
    validationRules: [{
        type: 'required'
    }, {
        type: 'pattern',
        pattern: '^[a-zA-Z]+$',
        message: 'Do not use digits.'
    }],
    validationGroup: validationGroup1
});
$("#password").dxTextBox({
    mode: 'password', placeholder:'Password'
}).dxValidator({
    validationRules: [{
        type: 'required',
        message: 'Password is required'
    }],
    validationGroup: validationGroup1
});
$("#summary1").dxValidationSummary({
    validationGroup: validationGroup1
});
$("#button1").dxButton({
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
    },
    validationGroup: validationGroup1
});
$("#phone").dxTextBox({
    value: null, placeholder: 'Input your phone...'
}).dxValidator({
    name: 'Phone',
    validationRules: [{ type: 'required' }, { type: 'numeric' }],
    validationGroup: validationGroup2
});
$("#summary2").dxValidationSummary({
    validationGroup: validationGroup2
});
$("#button2").dxButton({
    text: 'Submit',
    onClick: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "Your phone number is submitted.",
                position: {
                    my: "left top",
                    at: "left top",
                }
            }, "Success", 3000);
        }
    },
    validationGroup: validationGroup2
});
//<!--/@jQuery-->