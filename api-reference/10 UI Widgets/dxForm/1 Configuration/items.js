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
    formOptions: {
        formData: employeeInfo,
        labelLocation: 'left',
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colCount: 2,
                items: [
                    'FirstName',
                    { itemType: 'empty' },
                    'LastName',
                    'BirthDate'
                ]
            },
            {
                itemType: 'group',
                caption: 'Other information',
                items: [
                    {
                        itemType: 'tabbed',
                        tabs: [
                            {
                                title: 'Company info',
                                items: [
                                    'Position',
                                    'HireDate',
                                    'City'
                                ]
                            },
                            {
                                title: 'Contacts',
                                items: [
                                    'Phone',
                                    'Email'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
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
    $scope.formOptions = {
        formData: employeeInfo,
        labelLocation: 'left',
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colCount: 2,
                items: [
                    'FirstName',
                    { itemType: 'empty' },
                    'LastName',
                    'BirthDate'
                ]
            },
            {
                itemType: 'group',
                caption: 'Other information',
                items: [
                    {
                        itemType: 'tabbed',
                        tabs: [
                            {
                                title: 'Company info',
                                items: [
                                    'Position',
                                    'HireDate',
                                    'City'
                                ]
                            },
                            {
                                title: 'Contacts',
                                items: [
                                    'Phone',
                                    'Email'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
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
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colCount: 2,
                items: [
                    'FirstName',
                    { itemType: 'empty' },
                    'LastName',
                    'BirthDate'
                ]
            },
            {
                itemType: 'group',
                caption: 'Other information',
                items: [
                    {
                        itemType: 'tabbed',
                        tabs: [
                            {
                                title: 'Company info',
                                items: [
                                    'Position',
                                    'HireDate',
                                    'City'
                                ]
                            },
                            {
                                title: 'Contacts',
                                items: [
                                    'Phone',
                                    'Email'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
});
//<!--/@jQuery-->