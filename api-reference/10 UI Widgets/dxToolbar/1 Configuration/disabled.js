//<!--@Knockout-->
var myViewModel = {
    toolbarItems: [
        { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' }
    ],
    toolbarDisabled: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toolbarItems = [
        { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' }
    ];
    $scope.toolbarDisabled = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToolbar").dxToolbar({
    items: [
        { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' }
    ]
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myToolbar").dxToolbar("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->
