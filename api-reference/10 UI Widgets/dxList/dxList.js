//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({
        store: [],
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    }),
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.listDataSource.store().insert(data[i]);
    }
    myViewModel.listDataSource.group(function (dataItem) {
        return dataItem.name.charAt(0);
    });
    myViewModel.listDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource({
        store: [],
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.listDataSource.store().insert(data[i]);
        }
        $scope.listDataSource.group(function (dataItem) {
            return dataItem.name.charAt(0);
        });
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
    map: function (dataItem) {
        dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
        return dataItem;
    }
});
$("#myList").dxList({
    dataSource: listDataSource,
    grouped: true,
    groupTemplate: function(groupData, grupeIndex, groupElement){
        groupElement.append("<h1>" + groupData.key + "</h1>");
    },
    itemTemplate: function (itemData, itemIndex, itemElement) {
        var imageContainer = $('<div style="display:inline-block; margin: 5px;">');
        imageContainer.append('<img style="margin:5px;" src="' + itemData.imagePath + '" />');
        itemElement.append(imageContainer);
        var textContainer = $('<div style="display:inline-block; margin: 5px;">');
        textContainer.append('<p style="font-size:larger;"><b>' + itemData.name + '</b></p>');
        textContainer.append('<p>Capital: <i>' + itemData.capital + '</i></p>');
        itemElement.append(textContainer);
        itemElement.append('<p>Area: <i>' + itemData.area + '</i> km2</p>');
        itemElement.append('<p>Population: <i>' + itemData.population + '</i></p>');
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.group(function (dataItem) {
        return dataItem.name.charAt(0);
    });
    listDataSource.load();
}, "json");
//<!--/@jQuery-->