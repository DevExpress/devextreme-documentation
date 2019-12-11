//<!--@Knockout-->
var employeeInfo = {
    FirstName: "John",
    LastName: "Heart",
    Skype: "JohnnyHeart",
    Email: "jheart@dx-email.com"
};

var viewModel = {
    employee: employeeInfo,
    itemsOptions: [
        {
            dataField: 'FirstName',
            isRequired: true
        },
        {
            dataField: 'LastName',
            isRequired: true
        },
        'Skype',
        'Email'
    ],
    optionalMark: ko.observable('(optional)'),
    showOptionalMark: ko.observable(false),
    requiredMark: ko.observable('*'),
    showRequiredMark: ko.observable(true)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var employeeInfo = {
    FirstName: "John",
    LastName: "Heart",
    Skype: "JohnnyHeart",
    Email: "jheart@dx-email.com"
};

var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.employee = employeeInfo;
    $scope.itemsOptions = [
        {
            dataField: 'FirstName',
            isRequired: true
        },
        {
            dataField: 'LastName',
            isRequired: true
        },
        'Skype',
        'Email'
    ];
    $scope.optionalMark = '(optional)';
    $scope.showOptionalMark = false;
    $scope.requiredMark = '*';
    $scope.showRequiredMark = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var employeeInfo = {
    FirstName: "John",
    LastName: "Heart",
    Skype: "JohnnyHeart",
    Email: "jheart@dx-email.com"
};

$(function () {
    $("#optionalMarkCheckBox").dxCheckBox({
        text: 'Show optional mark',
        value: false,
        onValueChanged: function (e) {
            $("#form").dxForm("instance").option('showOptionalMark', e.value);
        }
    });
    $("#optionalMarkTextBox").dxTextBox({
        placeholder: 'Enter optional mark',
        width: 200,
        value: '(optional)',
        onValueChanged: function (e) {
            $("#form").dxForm("instance").option('optionalMark', e.value);
        }
    });
    $("#requiredMarkCheckBox").dxCheckBox({
        text: 'Show required mark',
        value: true,
        onValueChanged: function (e) {
            $("#form").dxForm("instance").option('showRequiredMark', e.value);
        }
    });
    $("#requiredMarkTextBox").dxTextBox({
        placeholder: 'Enter required mark',
        width: 200,
        value: '*',
        onValueChanged: function (e) {
            $("#form").dxForm("instance").option('requiredMark', e.value);
        }
    });
    $("#form").dxForm({
        formData: employeeInfo,
        items: [
            {
                dataField: 'FirstName',
                isRequired: true
            },
            {
                dataField: 'LastName',
                isRequired: true
            },
            'Skype',
            'Email'
        ],
        optionalMark: '(optional)',
        labelLocation: 'left',
        colCount: 2
    });
});
//<!--/@jQuery-->