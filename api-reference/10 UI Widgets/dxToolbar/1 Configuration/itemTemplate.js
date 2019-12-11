//<!--@Knockout-->
var myViewModel = {
    itemClickHandler: function (e) {
        DevExpress.ui.notify(e.itemData.text + " item clicked", "success", 1500);
    },
    toolbarItems: [
        { location: 'before', text: 'Back' },
        { location: 'after', text: 'Add' },
        { location: 'after', text: 'Find' },
        { location: 'before', text: 'Products', template: "title" }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.itemClickHandler = function (e) {
        DevExpress.ui.notify(e.itemData.text + " item clicked", "success", 1500);
    };
    $scope.toolbarItems = [
        { location: 'before', text: 'Back' },
        { location: 'after', text: 'Add' },
        { location: 'after', text: 'Find' },
        { location: 'before', text: 'Products', template: "title" }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var titleTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.append("<p  style='color:red;'>" + itemData.text + "</p>");
};
$("#myToolbar").dxToolbar({
    onItemClick: function (e) {
        DevExpress.ui.notify(e.itemData.text + " item clicked", "success", 1500);
    },
    items: [
        { location: 'before', text: 'Back' },
        { location: 'after', text: 'Add' },
        { location: 'after', text: 'Find' },
        { location: 'before', text: 'Products', template: titleTemplate }
    ],
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<i style='margin:0 5px 0 5px; cursor: pointer;'>" + itemData.text + "</i>");
    }
});
//<!--/@jQuery-->
