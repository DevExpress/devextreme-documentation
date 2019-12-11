//<!--@Knockout-->
var myViewModel = {
    age: ko.observable(""),
    submit: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "Your age is submitted.",
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
    $scope.age = "";
    $scope.submit = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "Your age is submitted.",
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
    $("#age").dxTextBox({
        value: null, placeholder: 'Input your age...'
    }).dxValidator({
        validationRules: [
            { type: 'required' },
            { type: 'range', min: 25, max: 35, message: 'Sorry, we submit only the age from 25 to 35.' }
        ]
    });
    $("#summary").dxValidationSummary({});
    $("#button").dxButton({
        text: 'Submit',
        onClick: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify({
                    message: "Your age is submitted.",
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