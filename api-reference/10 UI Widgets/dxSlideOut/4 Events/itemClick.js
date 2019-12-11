//<!--@Knockout-->
var viewModel = {
    currentIndex: ko.observable(0),
    showMenu: ko.observable(false),
    slideOutData: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ],
    changeMenuVisibility: function () {
        viewModel.showMenu(!viewModel.showMenu());
    },
    initializedHandler: function (e) {
        e.component.on(
            "itemClick", function (e) {
                DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500);
                viewModel.showMenu(!viewModel.showMenu);
            }
        );
    }
};
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentIndex = 0;
    $scope.showMenu = false;
    $scope.changeMenuVisibility = function () {
        $scope.showMenu = !$scope.showMenu;
    }
    $scope.slideOutData = [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ];
    $scope.slideOutInstance = {};
    $scope.initializedHandler = function (e) {
        e.component.on(
            "itemClick", function (e) {
                DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500);
                $scope.showMenu = !$scope.showMenu;
            }
        );
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlideOut").dxSlideOut({
    items: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ],
    selectedIndex: 0,
    onInitialized: function () {
        $("#mySlideOut").dxSlideOut("instance").on(
            "itemClick", function (e) {
                DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500);
                $("#mySlideOut").dxSlideOut("instance").hideMenu();
            }
        );
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var button = $("<div>").dxButton({
            text: 'Show Menu',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").showMenu();
            }
        });
        itemElement.append(button)
    }
});
//<!--/@jQuery-->
