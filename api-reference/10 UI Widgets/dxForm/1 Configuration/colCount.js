//<!--@Knockout-->
var employeeInfo = {
    FirstName: "John",
    LastName: "Heart",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    City: "Los Angeles",
    Phone: "+1(213) 555-9392",
    Email: "jheart@dx-email.com"
};

var viewModel = {
    employee: employeeInfo,
    columnCount: ko.observable(1)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var employeeInfo = {
    FirstName: "John",
    LastName: "Heart",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    City: "Los Angeles",
    Phone: "+1(213) 555-9392",
    Email: "jheart@dx-email.com"
};

var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.columnCount = 1;
    $scope.employee = employeeInfo;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var employeeInfo = {
    FirstName: "John",
    LastName: "Heart",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    City: "Los Angeles",
    Phone: "+1(213) 555-9392",
    Email: "jheart@dx-email.com"
};

$(function () {
    $("#columnsCountNumberBox").dxNumberBox({
        value: 1,
        min: 1,
        max: 4,
        showSpinButtons: true,
        width: 150,
        onValueChanged: function(e) {
            $("#form").dxForm("instance").option('colCount', e.value);
        }
    });
    $("#form").dxForm({
        formData: employeeInfo,
        labelLocation: 'top'
    });
});
//<!--/@jQuery-->