//<!--@Knockout-->
var myViewModel = {
    contextMenuVisible: ko.observable(false),
    menuItems: [
        { text: "Hide" },
        { text: "Delete" },
        {
            text: "Clipboard",
            items: [
                { text: "Copy text" },
                { text: "Clear text" },
                { text: "Paste text" }
            ]
        }
    ],
    itemClicked: function (data) {
        DevExpress.ui.notify("The \"" + data.itemData.text + "\" item is clicked", "success", 1500);
    }
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.contextMenuVisible = false,
    $scope.menuItems = [
        { text: "Hide" },
        { text: "Delete" },
        {
            text: "Clipboard",
            items: [
                { text: "Copy text" },
                { text: "Clear text" },
                { text: "Paste text" }
            ]
        }
    ],
    $scope.showContextMenu = function(){
        $scope.contextMenuVisible = true;
    }
    $scope.itemClicked = function (data) {
        DevExpress.ui.notify("The \"" + data.itemData.text + "\" item is clicked", "success", 1500);
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myContextMenu").dxContextMenu({
    items: [
        { text: "Hide" },
        { text: "Delete" },
        {
            text: "Clipboard",
            items: [
                { text: "Copy text" },
                { text: "Clear text" },
                { text: "Paste text" }
            ]
        }
    ],
    onItemClick: function (data) {
        DevExpress.ui.notify("The \"" + data.itemData.text + "\" item is clicked", "success", 1500);
    },
    target: '#targetElement'
});
//<!--/@jQuery-->
