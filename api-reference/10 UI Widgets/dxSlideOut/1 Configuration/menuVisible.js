//<!--@Knockout-->
viewModel = {
    slideOutItems: [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" }
    ],
    showMenu: ko.observable(false),
    changeMenuVisibility: function () {
        viewModel.showMenu(!viewModel.showMenu());
    }
};
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.slideOutItems = [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" }
    ];
    $scope.showMenu = false;
    $scope.changeMenuVisibility = function () {
        $scope.showMenu = !$scope.showMenu;
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlideOut").dxSlideOut({
    dataSource: [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" }
    ],
    onItemClick: function () {
        $("#mySlideOut").dxSlideOut("instance").hideMenu();
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var button = $("<div>").dxButton({
            text: 'Show Menu',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").option('menuVisible', true);
            }
        });
        itemElement.append(button);
    }
});
//<!--/@jQuery-->
