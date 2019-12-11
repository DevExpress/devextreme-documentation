
//<!--@Knockout-->
var myViewModel = {
    navItems: [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites", badge: "New" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips", badge: "!" }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.navItems = [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites", badge: "New" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips", badge: "!" }
    ];
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
        { text: "favorites", icon: "favorites", badge: "New" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips", badge: "!" }
    ]
});
//<!--/@jQuery-->
