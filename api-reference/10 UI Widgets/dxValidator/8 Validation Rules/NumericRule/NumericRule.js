//<!--@Knockout-->
var myViewModel = {
    phone: ko.observable(""),
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
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.phone = "";
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
$(function () {
    $("#phone").dxTextBox({
        value: null, placeholder: 'Input your phone...'
    }).dxValidator({
        validationRules: [ { type: 'numeric' } ]
    });
    $("#summary").dxValidationSummary({});
    $("#button").dxButton({
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
        }
    });
});
//<!--/@jQuery-->