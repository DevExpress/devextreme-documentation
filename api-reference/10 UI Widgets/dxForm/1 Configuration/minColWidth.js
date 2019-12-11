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
    minColumnWidth: ko.observable(170)
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
    $scope.minColumnWidth = 170;
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
    $("#minColumnWidthSlider").dxSlider({
        min: 170,
        max: 400,
        step: 10,
        value: 170,
        width: 200,
        onValueChanged: function (e) {
            $("#form").dxForm("instance").option('minColWidth', e.value);
            $("#minColValue").text(e.value);
        }
    });
    $("#form").dxForm({
        formData: employeeInfo,
        colCount: 'auto',
        labelLocation: 'left',
        minColWidth: 170
    });
});
//<!--/@jQuery-->