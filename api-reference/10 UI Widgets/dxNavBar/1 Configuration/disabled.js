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
    navBarDisabled: ko.observable(false)
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
    $scope.navBarDisabled = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNavBar").dxNavBar({
    items: [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips" }
    ]
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myNavBar").dxNavBar("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->
