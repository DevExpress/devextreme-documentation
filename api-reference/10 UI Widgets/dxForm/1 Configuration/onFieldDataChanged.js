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
    notify: function () {
        DevExpress.ui.notify("A field value has been changed", "info", 2000);
    }
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
    $scope.employee = employeeInfo;
    $scope.notify = function () {
        DevExpress.ui.notify("A field value has been changed", "info", 2000);
    }
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
    $("#form").dxForm({
        formData: employeeInfo,
        labelLocation: 'left',
        colCount: 2,
        onFieldDataChanged: function () {
            DevExpress.ui.notify("A field value has been changed", "info", 2000);
        }
    });
});
//<!--/@jQuery-->