var flag = false;
//<!--@Knockout-->
var myViewModel = {
    selectBoxData: new DevExpress.data.DataSource({ store: [], paginate: false }),
    selectBoxInstance: {},
    initializedHandler: function (e) {
        myViewModel.selectBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.selectBoxInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.selectBoxInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
}
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.selectBoxData.store().insert(data[i]);
    }
    myViewModel.selectBoxData.load();
}, "json");
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.selectBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.selectBoxData.store().insert(data[i]);
        }
        $scope.selectBoxData.load();
    }, "json");
    $scope.selectBoxInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.selectBoxInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.selectBoxInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.selectBoxInstance.off("itemClick");
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
var selectBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
$("#mySelectBox").dxSelectBox({
    dataSource: selectBoxData,
    placeholder: 'Select a state',
    displayExpr: 'name',
    valueExpr: 'capital'
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#mySelectBox").dxSelectBox("instance")
                .on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#mySelectBox").dxSelectBox("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
