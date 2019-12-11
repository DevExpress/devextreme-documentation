var groupedData = [
    {
        key: 'group 1',
        items: ['item11', 'item12', 'item13', 'item14']
    },
    {
        key: 'group 2',
        items: ['item21', 'item22', 'item23', 'item24']
    },
    {
        key: 'group 3',
        items: ['item31', 'item32', 'item33', 'item34']
    }
];
//<!--@Knockout-->
viewModel = {
    slideOutItems: groupedData,
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
    $scope.slideOutItems = groupedData;
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
    items: groupedData,
    onItemClick: function () {
        $("#mySlideOut").dxSlideOut("instance").hideMenu();
    },
    menuGrouped: true,
    contentTemplate: function (contentElement) {
        var button = $("<div>").dxButton({
            text: 'Show Menu',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").showMenu();
            }
        });
        contentElement.append(button);
    },
    menuGroupTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<div style='color: blue;'>" + itemData.key + "</div>");
    }
});
//<!--/@jQuery-->
