//<!--@Knockout-->
var myViewModel = {
    dropDownMenuData: [
        "Copy",
        "Cut",
        "Clear"
    ],
    menuItemClicked: function(e){
        DevExpress.ui.notify( e.itemData + " item clicked", "success", 2000 );
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.dropDownMenuData = [
        "Copy",
        "Cut",
        "Clear"
    ];
    $scope.menuItemClicked = function (e) {
        DevExpress.ui.notify(e.itemData + " item clicked", "success", 2000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myDropDownMenu").dxDropDownMenu({
    buttonText: 'Show menu',
    dataSource: [
        "Copy",
        "Cut",
        "Clear"
    ],
    onItemClick: function (e) {
        DevExpress.ui.notify(e.itemData + " item clicked", "success", 2000);
    }
});
//<!--/@jQuery-->
