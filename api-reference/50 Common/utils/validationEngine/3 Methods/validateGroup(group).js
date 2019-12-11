//<!--@Knockout-->
var myViewModel = {
    validateSampleGroup: function () {
        DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));
    },
    validateDefaultGroup: function (e) {
        DevExpress.validationEngine.validateGroup(myViewModel);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.validateSampleGroup = function () {
        DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));
    };
    $scope.validateDefaultGroup = function (e) {
        DevExpress.validationEngine.validateGroup($scope);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#sampleGroup").dxValidationGroup();
$("#myTextBox").dxTextBox({
    placeholder: 'Enter text'
})
.dxValidator({
    validationRules: [{
        type: 'required',
        message: 'Text is required'
    }]
});
$("#myTextBox1").dxTextBox({
    placeholder: 'Enter text'
})
.dxValidator({
    validationRules: [{
        type: 'required',
        message: 'Text is required'
    }]
});
$("#validateSampleButton").dxButton({
    text: 'Validate \'Sample\' group',
    onClick: function () {
        DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));
    }
});
$("#validateDefaultButton").dxButton({
    text: 'Validate default group',
    onClick: function () {
        DevExpress.validationEngine.validateGroup();
    }
});
//<!--/@jQuery-->
