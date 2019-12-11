//<!--@Knockout-->
var myViewModel = {
    tabs: [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ],
    tabContent: ko.observable("Select a tab"),
    selectedTab: ko.observable(-1),
    selectionChanged: function (e) {
        if(e.addedItems.length === 0)
            this.tabContent("Select a tab");
        else
            this.tabContent(e.addedItems[0].content);
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
        if (e.addedItems.length === 0)
            $scope.tabContent = "Select a tab";
        else
            $scope.tabContent = e.addedItems[0].content;
    }
    $scope.selectedTab = -1;
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
    selectedIndex: -1,
    onSelectionChanged: function (e) {
        if (e.addedItems.length === 0)
            $("#myTabContent").text("Select a tab");
        else
            $("#myTabContent").text(e.addedItems[0].content);
        $("#indexBox").dxNumberBox("instance").option("value", $("#myTabs").dxTabs("instance").option("selectedIndex"));
    }
});
$("#indexBox").dxNumberBox({
    min: -1,
    max: 2,
    showSpinButtons: true,
    value: -1,
    onValueChanged: function (e) {
        $("#myTabs").dxTabs("instance").option("selectedIndex", e.value);
    }
});
//<!--/@jQuery-->
