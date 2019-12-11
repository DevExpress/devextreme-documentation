//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    displayExprValues: ["name", "capital", "population", "area"],
    valueExprValues: ["this", "name", "capital", "population", "area"],
    displayExprValue: ko.observable("name"),
    valueExprValue: ko.observable("this"),
    displayedText: ko.observable(""),
    currentValue: ko.observable(),
    nameValue: ko.observable(""),
    capitalValue: ko.observable(""),
    populationValue: ko.observable(""),
    areaValue: ko.observable(""),
    lookupValueChanged: function (e) {
        if (e.value === null || this.valueExprValue() !== "this")
            return;
        this.nameValue(e.value.name);
        this.capitalValue(e.value.capital);
        this.populationValue(e.value.population);
        this.areaValue(e.value.area);
    },
    exprChanged: function (e) {
        $("#myLookup").dxLookup("instance").reset();
    },
    hideDisplayedText: function () {
        return !this.currentValue();
    },
    hideObjInfo: function () {
        return !this.currentValue() || this.valueExprValue() !== "this";
    },
    hideFieldInfo: function () {
        return !this.currentValue() || this.valueExprValue() === "this";
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
    $scope.displayExprValues = ["name", "capital", "population", "area"];
    $scope.valueExprValues = ["this", "name", "capital", "population", "area"];
    $scope.displayExprValue = "name";
    $scope.valueExprValue = "this";
    $scope.displayedText = "";
    $scope.currentValue = null;
    $scope.nameValue = "";
    $scope.capitalValue = "";
    $scope.populationValue = "";
    $scope.areaValue = "";
    $scope.lookupValueChanged = function (e) {
        if (e.value === null || $scope.valueExprValue !== "this")
            return;
        $scope.nameValue = e.value.name;
        $scope.capitalValue = e.value.capital;
        $scope.populationValue = e.value.population;
        $scope.areaValue = e.value.area;
    };
    $scope.exprChanged = function (e) {
        $("#myLookup").dxLookup("instance").reset();
    };
    $scope.hideDisplayedText = function () {
        return !$scope.currentValue;
    };
    $scope.hideObjInfo = function () {
        return !$scope.currentValue || $scope.valueExprValue !== "this";
    };
    $scope.hideFieldInfo = function () {
        return !$scope.currentValue || $scope.valueExprValue === "this";
    };
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.lookupDataSource.store().insert(data[i]);
        }
        $scope.lookupDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var lookupDataSource = new DevExpress.data.DataSource([]);
$("#myLookup").dxLookup({
    dataSource: lookupDataSource,
    title: 'States',
    displayExpr: 'name',
    valueExpr: 'this',
    onValueChanged: function (e) {
        if (e.value === null) {
            $("#displayedTextInfo").addClass("dx-state-invisible");
            $("#selectedObjInfo").addClass("dx-state-invisible");
            $("#selectedFieldInfo").addClass("dx-state-invisible");
            return;
        }
        $("#displayedTextInfo").removeClass("dx-state-invisible");
        $("#displayedText").text($("#myLookup").dxLookup("instance").option("displayValue"));
        if ($("#myLookup").dxLookup("instance").option("valueExpr") === "this") {
            $("#selectedObjInfo").removeClass("dx-state-invisible");
            $("#selectedFieldInfo").addClass("dx-state-invisible");
            $("#nameValue").text(e.value.name);
            $("#capitalValue").text(e.value.capital);
            $("#populationValue").text(e.value.population);
            $("#areaValue").text(e.value.area);
        }
        else {
            $("#selectedObjInfo").addClass("dx-state-invisible");
            $("#selectedFieldInfo").removeClass("dx-state-invisible");
            $("#selectedFieldName").text($("#myLookup").dxLookup("instance").option("valueExpr"));
            $("#selectedFieldValue").text(e.value);
        }
    }
});
$("#displayExprSelector").dxSelectBox({
    dataSource: ["name", "capital", "population", "area"],
    value: "name",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("displayExpr", e.value);
        $("#myLookup").dxLookup("instance").reset();
    }
});
$("#valueExprSelector").dxSelectBox({
    dataSource: ["this", "name", "capital", "population", "area"],
    value: "this",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("valueExpr", e.value);
        $("#myLookup").dxLookup("instance").reset();
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
