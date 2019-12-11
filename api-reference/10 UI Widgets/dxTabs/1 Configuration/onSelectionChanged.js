//<!--@Knockout-->
var myViewModel = {
    tabs: [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ],
    tabContent: ko.observable("Select a tab"),
    selectionChanged: function (e) {
        this.tabContent(e.addedItems[0].content);
        DevExpress.ui.notify("Selection has changed");
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
    $scope.tabContent = "Select a tab";
    $scope.selectionChanged = function (e) {
        $scope.tabContent = e.addedItems[0].content;
        DevExpress.ui.notify("Selection has changed");
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
    ],
    selectedIndex: 0,
    onSelectionChanged: function (e) {
        $("#myTabContent").text(e.addedItems[0].content);
        DevExpress.ui.notify("Selection has changed");
    }
});
//<!--/@jQuery-->
