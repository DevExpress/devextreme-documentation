//<!--@Knockout-->
//An object passed to the dataSource configuration option of the tile view
tileViewDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");

//Generates the path to the required image file
getImagePath = function (name) {
    return "/Content/images/doc/16_1/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tileViewDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");
    $scope.getImagePath = function (name) {
        return "/Content/images/doc/16_1/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var tileViewDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");

var getImagePath = function (name) {
    return "/Content/images/doc/16_1/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};

$(function () {
    $("#myTileView").dxTileView({
        dataSource: tileViewDataSource,
        itemMargin: 20,
        baseItemHeight: 130,
        baseItemWidth: 180,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.addClass("tile");
            itemElement.append('<p style="font-size:larger;"><b>' + itemData.name + '</b></p>');
            itemElement.append('<img style="margin: 5px;" src="' + getImagePath(itemData.name) + '"/>');
            itemElement.append('<p>Capital: <i>' + itemData.capital + '</i></p>');
        }
    });
});
//<!--/@jQuery-->