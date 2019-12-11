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

var alignLabelsInAllGroups = ko.observable(true);

var viewModel = {
    formOptions: {
        formData: employeeInfo,
        labelLocation: 'left',
        colCount: 2,
        alignItemLabelsInAllGroups: alignLabelsInAllGroups,
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colSpan: 2,
                colCount: 2,
                items: [
                    'FirstName',
                    'LastName',
                    'BirthDate',
                    'City'
                ]
            },
            {
                itemType: 'group',
                caption: 'Company Info',
                items: [
                    'Position',
                    'HireDate'
                ]
            },
            {
                itemType: 'group',
                caption: 'Contacts',
                items: [
                    'Phone',
                    'Email'
                ]
            }
        ]
    },
    alignLabelsInAllGroupsOptions: {
        text: 'Align labels in all groups',
        value: alignLabelsInAllGroups
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
    $scope.alignLabelsInAllGroups = true;
    $scope.formOptions = {
        formData: employeeInfo,
        labelLocation: 'left',
        colCount: 2,
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colSpan: 2,
                colCount: 2,
                items: [
                    'FirstName',
                    'LastName',
                    'BirthDate',
                    'City'
                ]
            },
            {
                itemType: 'group',
                caption: 'Company Info',
                items: [
                    'Position',
                    'HireDate'
                ]
            },
            {
                itemType: 'group',
                caption: 'Contacts',
                items: [
                    'Phone',
                    'Email'
                ]
            }
        ],
        bindingOptions: {
            alignItemLabelsInAllGroups: 'alignLabelsInAllGroups'
        }
    };
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
    $("#alignLabelsInAllGroupsCheckBox").dxCheckBox({
        text: 'Align labels in all groups',
        value: true,
        onValueChanged: function(e){
            $("#form").dxForm("instance").option('alignItemLabelsInAllGroups', e.value);
        }
    });
    $("#form").dxForm({
        formData: employeeInfo,
        labelLocation: 'left',
        colCount: 2,
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colSpan: 2,
                colCount: 2,
                items: [
                    'FirstName',
                    'LastName',
                    'BirthDate',
                    'City'
                ]
            },
            {
                itemType: 'group',
                caption: 'Company Info',
                items: [
                    'Position',
                    'HireDate'
                ]
            },
            {
                itemType: 'group',
                caption: 'Contacts',
                items: [
                    'Phone',
                    'Email'
                ]
            }
        ],
    });
});
//<!--/@jQuery-->