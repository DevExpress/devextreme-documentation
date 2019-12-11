//<!--@Knockout-->
var myViewModel = {
    toolbarItems: [
      { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
      { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
      { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
      { location: 'center', text: 'Products' }
    ]
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
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToolbar").dxToolbar({
    dataSource: [
      { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
      { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
      { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
      { location: 'center', text: 'Products' }
    ]
});
//<!--/@jQuery-->
