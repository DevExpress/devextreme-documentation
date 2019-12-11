var employeeInfo = {
    FirstName: "John",
    LastName: "",
    Skype: "",
    Email: ""
};
//<!--@Knockout-->
var viewModel = {
    employee: employeeInfo,
    formInstance: {},
    initializedHandler: function (e) {
        viewModel.formInstance = e.component;
    },
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
        {
            dataField: 'Email',
            validationRules: [
                { type: 'email' },
                { type: 'required', message: 'E-mail is required' }
            ]
        }
    ],
    validateAndSubmit: function () {
        var result = viewModel.formInstance.validate();
        if (result.isValid) {
            DevExpress.ui.notify("You have submitted the form", "success", 3000);
        }
    }
}
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.employee = employeeInfo;
    $scope.formInstance = {}
    $scope.validateAndSubmit = function () {
        var result = $scope.formInstance.validate();
        if (result.isValid) {
            DevExpress.ui.notify("You have submitted the form", "success", 3000);
        }
    };
    $scope.initializedHandler = function (e) {
        $scope.formInstance = e.component;
    }
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
        {
            dataField: 'Email',
            validationRules: [
                { type: 'email' },
                { type: 'required', message: 'E-mail is required' }
            ]
        }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myForm").dxForm({
    formData: employeeInfo,
    showValidationSummary: true,
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
        {
            dataField: 'Email',
            validationRules: [
                { type: 'email' },
                { type: 'required', message: 'E-mail is required' }
            ]
        }
    ],
    labelLocation: 'left',
    colCount: 1
});
$("#myButton").dxButton({
    text: 'Submit',
    type: 'success',
    onClick: function () {
        var result = $("#myForm").dxForm("instance").validate();
        if (result.isValid) {
            DevExpress.ui.notify("You have submitted the form", "success", 3000);
        }
    }
});
//<!--/@jQuery-->