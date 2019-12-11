var flag = false;
//<!--@Knockout-->
var myViewModel = {
    capitals: ko.observableArray([]),
    tagBoxData: new DevExpress.data.DataSource({ store: [], paginate: false }),
    tagBoxInstance: {},
    initializedHandler: function (e) {
        myViewModel.tagBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.tagBoxInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.tagBoxInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
}
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.tagBoxData.store().insert(data[i]);
    }
    myViewModel.tagBoxData.load();
}, "json");
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.capitals = [];
    $scope.tagBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.tagBoxData.store().insert(data[i]);
        }
        $scope.tagBoxData.load();
    }, "json");
    $scope.tagBoxInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.tagBoxInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.tagBoxInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.tagBoxInstance.off("itemClick");
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
var tagBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
$("#myTagBox").dxTagBox({
    dataSource: tagBoxData,
    placeholder: 'Select states',
    displayExpr: 'name',
    valueExpr: 'capital'
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTagBox").dxTagBox("instance")
                .on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myTagBox").dxTagBox("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
