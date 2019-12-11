//<!--@Knockout-->
var myViewModel = {
    tabs: [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ],
    tabContent: ko.observable("Select a tab"),
    selectionMode: ko.observable('single'),
    selectedItems: ko.observableArray([]),
    selectionChanged: function (e) {
        var text = "";
        if (this.selectedItems().length === 0)
            text = "Select a tab";
        else
            for (var i = 0; i < this.selectedItems().length; i++)
                text += "<p>" + this.selectedItems()[i].content + "</p>";
        this.tabContent(text);
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
    $scope.selectionMode = "single";
    $scope.selectedItems = [];
    $scope.selectionChanged = function (e) {
        var text = "";
        if ($scope.selectedItems.length === 0)
            text = "Select a tab";
        else
            for (var i = 0; i < $scope.selectedItems.length; i++)
                text += "<p>" + $scope.selectedItems[i].content + "</p>";
        $scope.tabContent = text;
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
    selectionMode: 'single',
    onSelectionChanged: function (e) {
        var selectedItems = $("#myTabs").dxTabs("instance").option("selectedItems");
        var text = "";
        if (selectedItems.length === 0)
            text = "Select a tab";
        else
            for (var i = 0; i < selectedItems.length; i++)
                text += "<p>" + selectedItems[i].content + "</p>";
        $("#myTabContent").html(text);
    }
});
$("#modeSelector").dxSelectBox({
    items: ['single', 'multi'],
    value: 'single',
    onValueChanged: function (e) {
        $("#myTabs").dxTabs("instance").option("selectionMode", e.value);
    }
});
//<!--/@jQuery-->
