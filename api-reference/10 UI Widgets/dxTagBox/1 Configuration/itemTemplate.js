//<!--@Knockout-->
var myViewModel = {
    tagBoxData: new DevExpress.data.DataSource({
        store: [],
        map: function (itemData) {
            itemData.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
            return itemData;
        }
    })
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
    $scope.tagBoxData = new DevExpress.data.DataSource({
        store: [],
        map: function (itemData) {
            itemData.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
            return itemData;
        }
    });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.tagBoxData.store().insert(data[i]);
        }
        $scope.tagBoxData.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var tagBoxData = new DevExpress.data.DataSource({
    store: [],
    map: function (itemData) {
        itemData.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + itemData.name.replace(" ", "") + ".gif";
        return itemData;
    }
});
$("#myTagBox").dxTagBox({
    dataSource: tagBoxData,
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
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
//<!--/@jQuery-->
