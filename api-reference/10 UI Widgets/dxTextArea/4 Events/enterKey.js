var flag = false;
//<!--@Knockout-->
var myViewModel = {
    text: ko.observable(""),
    textAreaInstance: {},
    initializedHandler: function (e) {
        myViewModel.textAreaInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.textAreaInstance.on(
                "enterKey", function (e) {
                    DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            myViewModel.textAreaInstance.off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
            flag = false;
        }
    }
}
$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 1 }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        myViewModel.text(data.d[0]);
    }
});
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.text = "";
    $.ajax({
        type: "POST",
        url: "/LoremService.asmx/LoremIpsum",
        data: JSON.stringify({ count: 1 }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $scope.text = data.d[0];
        }
    });
    $scope.textAreaInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.textAreaInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.textAreaInstance.on(
                "enterKey", function (e) {
                    DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $scope.textAreaInstance.off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextArea").dxTextArea({
    height: 300
});
$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: 1 }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        $("#myTextArea").dxTextArea("instance").option("text", data.d[0]);
        $("#myTextArea").dxTextArea("instance").repaint();
    }
});
$("#button").dxButton({
    text: 'Subscribe to EnterKey event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTextArea").dxTextArea("instance").on(
                "enterKey", function (e) {
                    DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $("#myTextArea").dxTextArea("instance").off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->