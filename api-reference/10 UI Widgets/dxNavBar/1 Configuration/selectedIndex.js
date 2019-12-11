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
    currentIndex: ko.observable(-1),
    maxIndex: 5
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
    $scope.currentIndex = -1;
    $scope.maxIndex = 5;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var navBarItems = [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips" }
];
$("#myNavBar").dxNavBar({
    dataSource: navBarItems,
    onSelectionChanged: function () {
        var currentIndex = $("#myNavBar").dxNavBar("instance").option("selectedIndex");
        $("#indexSelector").dxNumberBox("instance").option("value", currentIndex);
    }
});
$("#indexSelector").dxNumberBox({
    min: -1,
    max: 5,
    showSpinButtons: true,
    value: -1,
    onValueChanged: function (e) {
        $("#myNavBar").dxNavBar("instance").option("selectedIndex", e.value);
    }
});
//<!--/@jQuery-->
