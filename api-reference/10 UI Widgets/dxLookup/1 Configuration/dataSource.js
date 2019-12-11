//<!--@Knockout-->
var myViewModel = {
    name: ko.observable("none"),
    capital: ko.observable("none"),
    area: ko.observable("none"),
    population: ko.observable("none"),
    imagePath: ko.observable(""),
    lookupDataSource: new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    }),
    updateStateInfo: function (e) {
        $(".info.dx-state-invisible").removeClass("dx-state-invisible");
        this.name(e.value.name);
        this.capital(e.value.capital);
        this.area(e.value.area);
        this.population(e.value.population);
        this.imagePath(e.value.imagePath);
    }
}
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.lookupDataSource.store().insert(data[i]);
    }
    myViewModel.lookupDataSource.load();
}, "json");
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.name = "none";
    $scope.capital = "none";
    $scope.area = "none";
    $scope.population = "none";
    $scope.imagePath = "";
    $scope.updateStateInfo = function (e) {
        $(".info.dx-state-invisible").removeClass("dx-state-invisible");
        $scope.name = e.value.name;
        $scope.capital = e.value.capital;
        $scope.area = e.value.area;
        $scope.population = e.value.population;
        $scope.imagePath = e.value.imagePath;
    };
    $scope.lookupDataSource = new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    });
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
var lookupDataSource = new DevExpress.data.DataSource({
    store: [],
    paginate: false,
    map: function (dataItem) {
        dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
        return dataItem;
    }
});
$("#myLookup").dxLookup({
    dataSource: lookupDataSource,
    displayExpr: 'name',
    valueExpr: 'this',
    pagingEnabled: false,
    title: 'States',
    onValueChanged: function (e) {
        fillFields(e.value);
    }
});
var fillFields = function (data) {
    $(".info.dx-state-invisible").removeClass("dx-state-invisible");
    $("#stateField").text(data != null ? data.name : "none");
    $("#capitalField").text(data != null ? data.capital : "none");
    $("#populationField").text(data != null ? data.population : "none");
    $("#areaField").text(data != null ? data.area : "none");
    $("#image").attr("src", data != null ? data.imagePath : "")
}
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
