//<!--@Knockout-->
var myViewModel = function () {
    this.tabs = [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ];
    this.disabledValue = ko.observable(false);
    this.selectedTab = ko.observable(0);
    this.tabContent = ko.computed(function () {
        return this.tabs[this.selectedTab()].content;
    }, this);
}
ko.applyBindings(new myViewModel());
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tabs = [
        { text: "user", icon: "user", content: "'User' tab content" },
        { text: "comment", icon: "comment", content: "'Comment' tab content" },
        { text: "find", icon: "find", content: "'Find' tab content" }
    ];
    $scope.disabledValue = false;
    $scope.tabContent = function () {
        return $scope.tabs[$scope.selectedTab].content;
    };
    $scope.selectedTab = 0;
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
    onItemClick: function (e) {
        $("#myTabContent").text(e.itemData.content);
    }
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTabs").dxTabs("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->
