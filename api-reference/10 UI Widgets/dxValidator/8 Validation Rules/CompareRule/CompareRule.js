//<!--@Knockout-->
var myViewModel = {
    password: ko.observable(""),
    confirmedPassword: ko.observable(""),
    comparisonTarget: function () {
        if (myViewModel.password()) {
            return myViewModel.password();
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.password = "";
    $scope.confirmedPassword = "";
    $scope.comparisonTarget = function () {
        if ($scope.password) {            
            return $scope.password;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
    $("#password1").dxTextBox({
        value: null, mode: 'password', placeholder: 'Password'
    }).dxValidator({
        validationRules: [{ type: 'required', message: 'Password can not be empty.' }]
    });
    $("#password2").dxTextBox({
        value: null, mode: 'password', placeholder: 'Confirm your password' 
    }).dxValidator({
        validationRules: [{
            type: 'compare',
            comparisonTarget: function () {
                var password1 = $("#password1").dxTextBox('instance').option('value');
                if (password1) {
                    return password1;
                }
            }
        }]
    });
//<!--/@jQuery-->