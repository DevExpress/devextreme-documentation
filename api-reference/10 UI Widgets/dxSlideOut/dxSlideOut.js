//<!--@Knockout-->
var myViewModel = {
    currentIndex: ko.observable(0),
    showMenu: ko.observable(false),
    slideOutData: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ],
    changeMenuVisibility: function () {
        myViewModel.showMenu(!myViewModel.showMenu());
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentIndex = 0;
    $scope.showMenu = false;
    $scope.slideOutData = [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ];
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
    items: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ],
    selectedIndex: 0,
    onItemClick: function(){
        $("#mySlideOut").dxSlideOut("instance").hideMenu();
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var button = $("<div>").dxButton({
            text: 'Show Menu',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").showMenu();
            }
        });
        itemElement.append(button)
        itemElement.append("<p>Currently selected menu item is: <b>" + itemData.text + "</b>.</p>")
    }
});
//<!--/@jQuery-->