//<!--@Knockout-->
var processClick = function (name) {
    DevExpress.ui.notify(name + " clicked", "success", 3000);
};
var myViewModel = {
    actionSheetVisible: ko.observable(false),
    actionSheetData: [
        { text:"Reply", onClick: function(){ processClick("Reply")}},
        { text: "ReplyAll", onClick: function () { processClick("ReplyAll") } },
        { text: "Forward", onClick: function () { processClick("Forward") } },
        { text: "Delete", onClick: function () { processClick("Delete") } }
    ],
    showActionSheet: function () {
        this.actionSheetVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    var processClick = function (name) {
        DevExpress.ui.notify(name + " clicked", "success", 3000);
    };
    $scope.actionSheetVisible = false;
    $scope.actionSheetData = [
        {text:"Reply", onClick: function(){ processClick("Reply")}},
        { text: "ReplyAll", onClick: function () { processClick("ReplyAll") } },
        { text: "Forward", onClick: function () { processClick("Forward") } },
        { text: "Delete", onClick: function () { processClick("Delete") } }
    ];
    $scope.showActionSheet = function () {
        $scope.actionSheetVisible = true;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#showButton").dxButton({
    text:'Show action sheet', 
    onClick: function () {
        $("#myActionSheet").dxActionSheet("instance").show();
    }
});
$("#myActionSheet").dxActionSheet({
    dataSource: [
        { text: "Reply", onClick: function () { processClick("Reply") } },
        { text: "ReplyAll", onClick: function () { processClick("ReplyAll") } },
        { text: "Forward", onClick: function () { processClick("Forward") } },
        { text: "Delete", onClick: function () { processClick("Delete") } }
    ],
    title: 'Choose action',
    showTitle: true
});
var processClick = function(name){
    DevExpress.ui.notify( name + " clicked", "success", 3000 );
};
//<!--/@jQuery-->