var flag = false;
//<!--@Knockout-->
var myViewModel = {
    navItems: [
        { text: "user", icon: "user" },
        { text: "find", icon: "find" },
        { text: "favorites", icon: "favorites", badge: "New" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips", badge: "!" }
    ],
    navBarInstance: {},
    initializedHandler: function (e) {
        myViewModel.navBarInstance = e.component;
    },
    currentIndex: ko.observable(0),
    maxIndex: 5,
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.navBarInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].text + "\" item is selected", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            myViewModel.navBarInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
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
        { text: "favorites", icon: "favorites", badge: "New" },
        { text: "about", icon: "info" },
        { text: "home", icon: "home" },
        { text: "URI", icon: "tips", badge: "!" }
    ];
    $scope.currentIndex = 0;
    $scope.maxIndex = 5;
    $scope.navInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.navInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.navInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("The \"" + e.addedItems[0].text + "\" item is selected", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $scope.navInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
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
$("#indexSelector").dxNumberBox({
    min: 0,
    max: 5,
    showSpinButtons: true,
    value: 0,
    onValueChanged: function (e) {
        $("#myNavBar").dxNavBar("instance").option("selectedIndex", e.value);
    }
});
$("#myButton").dxButton({
    text: 'Subscribe to selectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myNavBar").dxNavBar("instance")
                .on(
                    "selectionChanged", function (e) {
                        var currentIndex = $("#myNavBar").dxNavBar("instance").option("selectedIndex");
                        $("#indexSelector").dxNumberBox("instance").option("value", currentIndex);
                        DevExpress.ui.notify("The \"" + e.addedItems[0].text + "\" item is selected", "success", 1500);
                    }
                );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $("#myNavBar").dxNavBar("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->