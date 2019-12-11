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
                "selectAllValueChanged", function (e) { DevExpress.ui.notify("Select all check box state: " + e.value, "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from selectAllValueChanged event");
            flag = true;
        } else {
            myViewModel.tagBoxInstance.off("selectAllValueChanged");
            e.component.option("text", "Subscribe to selectAllValueChanged event");
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
                "selectAllValueChanged", function (e) { DevExpress.ui.notify("Select all check box state: " + e.value, "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from selectAllValueChanged event");
            flag = true;
        } else {
            $scope.tagBoxInstance.off("selectAllValueChanged");
            e.component.option("text", "Subscribe to selectAllValueChanged event");
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
    showSelectionControls: true,
    valueExpr: 'capital'
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
$("#myButton").dxButton({
    text: 'Subscribe to selectAllValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTagBox").dxTagBox("instance").on(
                    "selectAllValueChanged", function (e) { DevExpress.ui.notify("Select all check box state: " + e.value, "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from selectAllValueChanged event");
            flag = true;
        } else {
            $("#myTagBox").dxTagBox("instance").off("selectAllValueChanged");
            e.component.option("text", "Subscribe to selectAllValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
