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
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.navBarInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.navBarInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
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
    $scope.navInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.navInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.navInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.navInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
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
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myNavBar").dxNavBar("instance")
                .on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myNavBar").dxNavBar("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->