var flag = false;
//<!--@Knockout-->
var myViewModel = {
    tabs: [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ],
    tabsInstance: {},
    initializedHandler: function (e) {
        myViewModel.tabsInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.tabsInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.tabsInstance.off("itemClick");
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
    $scope.tabs = [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ];
    $scope.tabsInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.tabsInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.tabsInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.tabsInstance.off("itemClick");
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
$("#myTabs").dxTabs({
    dataSource: [
        { text: "User", icon: "user", content: "'User' tab content" },
        { text: "Comment", icon: "comment", content: "'Comment' tab content" },
        { text: "Find", icon: "find", content: "'Find' tab content" }
    ]
});
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTabs").dxTabs("instance")
                .on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.text + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myTabs").dxTabs("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
