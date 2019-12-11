//<!--@Knockout-->
var myViewModel = {
    tileViewDataSource: new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    }),
    minPopulation: ko.observable(0),
    maxPopulation: ko.observable(40000000),
    updateValues: function (e) {
        this.tileViewDataSource.filter([
            ["population", ">", e.start],
            "and",
            ["population", "<", e.end]
        ]);
        this.tileViewDataSource.load();
    }
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.tileViewDataSource.store().insert(data[i]);
    }
    myViewModel.tileViewDataSource.load();;
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tileViewDataSource = new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    })
    $scope.minPopulation = 0;
    $scope.maxPopulation = 40000000;
    $scope.updateValues = function (e) {
        $scope.tileViewDataSource.filter([
            ["population", ">", e.start],
            "and",
            ["population", "<", e.end]
        ]);
        $scope.tileViewDataSource.load();
    };
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.tileViewDataSource.store().insert(data[i]);
        }
        $scope.tileViewDataSource.load();;
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var tileViewDataSource = new DevExpress.data.DataSource({
    store: [],
    paginate: false,
    map: function (dataItem) {
        dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
        return dataItem;
    }
});
$("#myTileView").dxTileView({
    dataSource: tileViewDataSource,
    itemMargin: 10,
    baseItemHeight: 150,
    baseItemWidth: 200,
    height: '75%',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.addClass("tile");
        var leftElement = $("<div class='inlineElement'>");
        leftElement.append("<img src='" + itemData.imagePath +"'/>");
        itemElement.append(leftElement);
        var rightElement = $("<div class='inlineElement'>");
        rightElement.append("<b style='font-size: larger;'>" + itemData.name + "</b>");
        itemElement.append(rightElement);
        itemElement.append("<p>&nbsp;</p>");
        itemElement.append("<p>Area: <i>" + itemData.area +"</i> km2</p>");
        itemElement.append("<p>Population: <i>" + itemData.population + "</i></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#populationRangeSlider").dxRangeSlider({
    min: 0,
    max: 40000000,
    start: 0,
    end: 40000000,
    onValueChanged: function (e) {
        $("#minPopulation").text(e.start);
        $("#maxPopulation").text(e.end);
        tileViewDataSource.filter([
            ["population", ">", e.start],
            "and",
            ["population", "<", e.end]
        ]);
        tileViewDataSource.load();
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tileViewDataSource.store().insert(data[i]);
    }
    tileViewDataSource.load();;
}, "json");
//<!--/@jQuery-->