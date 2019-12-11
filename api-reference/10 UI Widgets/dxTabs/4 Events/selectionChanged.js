var flag = false;
//<!--@Knockout-->
var myViewModel = {
    tabs: [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ],
    currentIndex: ko.observable(0),
    tabsInstance: {},
    initializedHandler: function (e) {
        myViewModel.tabsInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.tabsInstance.on(
                "selectionChanged", function (e) {
                                        DevExpress.ui.notify("Selected item: " + e.addedItems[0].text)
                                    }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            myViewModel.tabsInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
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
    $scope.currentIndex = 0;
    $scope.tabsInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.tabsInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.tabsInstance.on(
                "selectionChanged", function (e) {
                                        DevExpress.ui.notify("Selected item: " + e.addedItems[0].text)
                                    }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $scope.tabsInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    };
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
$("#indexSelector").dxNumberBox({
    min: 0,
    max: 2,
    showSpinButtons: true,
    value: 0,
    onValueChanged: function (e) {
        $("#myTabs").dxTabs("instance").option("selectedIndex", e.value);
    }
});
$("#button").dxButton({
    text: 'Subscribe to selectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTabs").dxTabs("instance").on(
                "selectionChanged", function (e) {
                                        var currentIndex = $("#myTabs").dxTabs("instance").option("selectedIndex");
                                        $("#indexSelector").dxNumberBox("instance").option("value", currentIndex);
                                        DevExpress.ui.notify("Selected item: " + e.addedItems[0].text)
                                    }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $("#myTabs").dxTabs("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
