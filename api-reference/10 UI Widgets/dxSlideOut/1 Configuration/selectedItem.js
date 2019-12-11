var items = [
    { text: "item 1" },
    { text: "item 2" },
    { text: "item 3" },
    { text: "item 4" },
    { text: "item 5" }
];
//<!--@Knockout-->
var viewModel = {
    slideOutItems: items,
    showMenu: ko.observable(false),
    changeMenuVisibility: function (e) {
        viewModel.showMenu(!viewModel.showMenu());
    },
    selectedItem: ko.observable(items[2])
};
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.slideOutItems = items;
    $scope.showMenu = false;
    $scope.changeMenuVisibility = function () {
        $scope.showMenu = !$scope.showMenu;
    }
    $scope.selectedItem = items[2];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#mySlideOut").dxSlideOut({
        dataSource: items,
        onItemClick: function (e) {
            $("#mySlideOut").dxSlideOut("instance").hideMenu();
        },
        selectedItem: items[2],
        itemTemplate: function (itemData, itemIndex, itemElement) {
            var button = $("<div>").dxButton({
                text: 'Show Menu',
                onClick: function () {
                    $("#mySlideOut").dxSlideOut("instance").option('menuVisible', true);
                }
            });
            itemElement.append(button);
            itemElement.append("<p>Selected item: <b>" + $("#mySlideOut").dxSlideOut("instance").option("selectedItem").text + "</b></p>");
        }
    });
});
//<!--/@jQuery-->
