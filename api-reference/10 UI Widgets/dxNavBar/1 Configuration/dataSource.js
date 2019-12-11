
//<!--@Knockout-->
var myViewModel = {
    navItems: [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips" }
    ],
    navItemClicked: function (e) {
        DevExpress.ui.notify(e.itemData.text + " navigation item is clicked", "success", 2000);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.navItems = [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips" }
    ];
    $scope.navItemClicked = function (e) {
        DevExpress.ui.notify(e.itemData.text + " navigation item is clicked", "success", 2000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNavBar").dxNavBar({
    dataSource: [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips" }
    ],
    onItemClick: function (e) {
        DevExpress.ui.notify(e.itemData.text + " navigation item is clicked", "success", 2000);
    }
});
//<!--/@jQuery-->
