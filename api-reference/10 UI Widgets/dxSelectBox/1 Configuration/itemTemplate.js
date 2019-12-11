//<!--@Knockout-->
var myViewModel = {
    selectBoxData: new DevExpress.data.DataSource({
        store: [],
        map: function (itemData) {
            itemData.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
            return itemData;
        }
    })
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
    $scope.selectBoxData = new DevExpress.data.DataSource({
        store: [],
        map: function (itemData) {
            itemData.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
            return itemData;
        }
    });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.selectBoxData.store().insert(data[i]);
        }
        $scope.selectBoxData.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var selectBoxData = new DevExpress.data.DataSource({
    store: [],
    map: function (itemData) {
        itemData.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
        return itemData;
    }
});
$("#mySelectBox").dxSelectBox({
    dataSource: selectBoxData,
    placeholder: 'Select a state',
    displayExpr: 'name',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.css("text-align", "left");
        var leftBlock = $("<div style='display:inline-block; margin: 5px;'>");
        leftBlock.append("<img style='margin:5px;' src='" + itemData.imagePath + "' />");
        itemElement.append(leftBlock);
        var rightBlock = $("<div style='display:inline-block; margin: 5px;'>");
        rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
        rightBlock.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
        itemElement.append(rightBlock);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
//<!--/@jQuery-->
