//<!--@Knockout-->
var myViewModel = {
    toolbarItems: [
        { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' },
        { locateInMenu: 'always', text: 'Add' },
        { locateInMenu: 'always', text: 'Remove' },
        { locateInMenu: 'always', text: 'Change' }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toolbarItems = [
        { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' },
        { locateInMenu: 'always', text: 'Add' },
        { locateInMenu: 'always', text: 'Remove' },
        { locateInMenu: 'always', text: 'Change' }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToolbar").dxToolbar({
    items: [
        { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' },
        { locateInMenu: 'always', text: 'Add' },
        { locateInMenu: 'always', text: 'Remove' },
        { locateInMenu: 'always', text: 'Change' }
    ],
    menuItemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<b>" + itemData.text + "</b>");
    }
});
//<!--/@jQuery-->
