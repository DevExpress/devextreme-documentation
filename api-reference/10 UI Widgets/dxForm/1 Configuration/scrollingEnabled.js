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
    scrollingEnabled: ko.observable(false)
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
        $scope.scrollingEnabled = false;
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
        $("#scrollingEnabledCheckBox").dxCheckBox({
            text: 'scrollingEnabled',
            value: false,
            onValueChanged: function (e) {
                $("#form").dxForm("instance").option('scrollingEnabled', e.value);
            }
        });
        $("#form").dxForm({
            formData: employeeInfo,
            height: 200,
            colCount: 1,
            labelLocation: 'left'
        });
    });
//<!--/@jQuery-->