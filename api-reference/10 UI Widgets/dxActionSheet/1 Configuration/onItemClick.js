//<!--@Knockout-->
var myViewModel = {
    actionSheetVisible: ko.observable(false),
    actionSheetData: [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ],
    showActionSheet: function () {
        this.actionSheetVisible(true);
    },
    itemClicked: function (e) {
        DevExpress.ui.dialog.alert("\"" + e.itemData.text + "\" has been clicked", "Action executed");
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.actionSheetVisible = false;
    $scope.actionSheetData = [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ];
    $scope.showActionSheet = function () {
        $scope.actionSheetVisible = true;
    };
    $scope.itemClicked = function (e) {
        DevExpress.ui.dialog.alert("\"" + e.itemData.text + "\" has been clicked", "Action executed");
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#showButton").dxButton({
    text: 'Show action sheet',
    onClick: function () {
        $("#myActionSheet").dxActionSheet("instance").show();
    }
});
$("#myActionSheet").dxActionSheet({
    dataSource: [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ],
    title: 'Choose action',
    showTitle: true,
    onItemClick: function (e) {
        DevExpress.ui.dialog.alert("\"" + e.itemData.text + "\" has been clicked", "Action executed");
    }
});
//<!--/@jQuery-->
