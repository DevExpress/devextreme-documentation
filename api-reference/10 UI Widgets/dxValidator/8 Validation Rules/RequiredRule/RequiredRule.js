//<!--@Knockout-->
var myViewModel = {
    name: ko.observable(""),
    age: ko.observable(),
    validateAndSubmit: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are registered",
                position: {
                    my: "top",
                    at: "top",
                    offset: 15
                }
            }, "success", 3000);
        }
    },
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.name = "";
    $scope.age = "";
    $scope.validateAndSubmit = function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are registered",
                position: {
                    my: "top",
                    at: "top",
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
    $("#Name").dxTextBox({
        value: null, placeholder: 'Name'
    }).dxValidator({
        name: 'Name', validationRules: [{ type: 'required' }]
    });
    $("#Floor").dxSelectBox({
        dataSource: ['Ground', '1','2','3'], placeholder: 'Floor #'
    }).dxValidator({
        name: 'Floor', validationRules: [{ type: 'required' }]
    });
    $("#Age").dxNumberBox({
        value: null, placeholder: 'Age'
    }).dxValidator({
        name: 'Age', validationRules: [{ type: 'required' }]
    });
    $("#RoomType").dxAutocomplete({
        placeholder: 'Room Type',
        dataSource: ['Suite', 'One-Bedroom Suite','Two-Bedroom King Suite','King Room']
    }).dxValidator({
        name: 'Room Type', validationRules: [{ type: 'required' }]
    });
    $("#RoomView").dxRadioGroup({
        dataSource: [{ text: 'Ocean' }, { text: 'Mountains' }, { text: 'Slave market' }], layout:'vertical'
    }).dxValidator({
        name: 'Room View', validationRules: [{ type: 'required', message: 'Room View is not chosen' }]
    });
    $("#Building").dxLookup({ searchEnabled: false, displayExpr: 'name', valueExpr: 'this', title: 'States',
        dataSource: [{ id: 1, name: 'South' }, { id: 2, name: 'North' }, { id: 3, name: 'North-East' }] 
    }).dxValidator({
        name: 'Building', validationRules: [{ type: 'required' }]
    });
    $("#CheckInDate").dxCalendar({}).dxValidator({
        name: 'Check in Date', validationRules: [{ type: 'required' }]
    });
    $("#CheckOutDate").dxDateBox({
        value: null, pickerType: 'calendar', placeholder: 'Check Out', width: 200
    }).dxValidator({
        name: 'Check out Date', validationRules: [{ type: 'required' }]
    });
    $("#Agreement").dxCheckBox({
        value: false, text: 'I accept the terms'
    }).dxValidator({
        name: 'Agreement', validationRules: [{ type: 'required' }]
    });
    $("#summary").dxValidationSummary({});
    $("#button").dxButton({
        text: 'Validate and submit',
        onClick: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify({
                    message: "You are registered",
                    position: {
                        my: "top",
                        at: "top",
                    }
                }, "Success", 3000);
            }
        }
    });
});
//<!--/@jQuery-->
