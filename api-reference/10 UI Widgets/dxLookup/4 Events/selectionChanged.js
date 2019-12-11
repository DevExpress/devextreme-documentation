var flag = false;
//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    lookupInstance: {},
    initializedHandler: function (e) {
        myViewModel.lookupInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.lookupInstance
                .on(
                    "selectionChanged", function (e) { DevExpress.ui.notify("'" + e.selectedItem.name + "' item is selected", "success", 1000); }
                );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            myViewModel.lookupInstance
                .off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.lookupDataSource.store().insert(data[i]);
    }
    myViewModel.lookupDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.lookupDataSource = new DevExpress.data.DataSource([]);
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.lookupDataSource.store().insert(data[i]);
        }
        $scope.lookupDataSource.load();
    }, "json");
    $scope.lookupInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.lookupInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.lookupInstance
                .on(
                    "selectionChanged", function (e) { DevExpress.ui.notify("'" + e.selectedItem.name + "' item is selected", "success", 1000); }
                );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $scope.lookupInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var lookupDataSource = new DevExpress.data.DataSource([]);
$("#myLookup").dxLookup({
    dataSource: lookupDataSource,
    displayExpr: 'name',
    title: 'States'
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
$("#button").dxButton({
    text: 'Subscribe to SelectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myLookup").dxLookup("instance")
                .on(
                    "selectionChanged", function (e) { DevExpress.ui.notify("'" + e.selectedItem.name + "' item is selected", "success", 1000); }
                );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $("#myLookup").dxLookup("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
