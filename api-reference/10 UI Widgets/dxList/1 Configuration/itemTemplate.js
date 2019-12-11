//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({
        store: [],
        map: function (itemData) {
            itemData.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
            return itemData;
        }
    }),
    itemTemplates: ["brief", "full"],
    currentTemplate: ko.observable("brief")
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.listDataSource.store().insert(data[i]);
    }
    myViewModel.listDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource({
        store: [],
        map: function (itemData) {
            itemData.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
            return itemData;
        }
    });
    $scope.itemTemplates = ["brief", "full"];
    $scope.currentTemplate = "brief";
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.listDataSource.store().insert(data[i]);
        }
        $scope.listDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var listDataSource = new DevExpress.data.DataSource({
    store: [],
    map: function (itemData) {
        itemData.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
        return itemData;
    }
});
var briefTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
    itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
};
var fullTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.css("text-align", "left");
    var leftBlock = $("<div style='display:inline-block; margin: 5px;'>");
    leftBlock.append("<img style='margin:5px;' src='" + itemData.imagePath + "' />");
    itemElement.append(leftBlock);
    var rightBlock = $("<div style='display:inline-block; margin: 5px;'>");
    rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
    rightBlock.append("<p><i>" + itemData.capital + "</i></p>");
    itemElement.append(rightBlock);
    itemElement.append("<p>Area: <i>" + itemData.area + "</i> km2</p>");
    itemElement.append("<p>Population: <i>" + itemData.population + "</i> km2</p>");
};
$("#myList").dxList({
    height: '80%',
    dataSource: listDataSource,
    itemTemplate: briefTemplate
});
$("#templateSelector").dxSelectBox({
    dataSource: ["brief", "full"],
    value: "brief",
    onValueChanged: function (e) {
        var list = $("#myList").dxList("instance");
        list.option("itemTemplate", e.value == "brief" ? briefTemplate : fullTemplate);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.load();
}, "json");
//<!--/@jQuery-->