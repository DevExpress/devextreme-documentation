var flag = false;
//<!--@Knockout-->
var myViewModel = {
    autocompleteDataSource: new DevExpress.data.DataSource([]),
    autocompleteInstance: {},
    onInitialized: function (e) {
        myViewModel.autocompleteInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.autocompleteInstance.on(
                "opened", function (e) {
                    DevExpress.ui.notify("The drop-down list is opened", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            myViewModel.autocompleteInstance.off("opened");
            e.component.option("text", "Subscribe to Opened event");
            flag = false;
        }
    }
};

$.get("/Content/data/countries.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.autocompleteDataSource.store().insert(data[i]);
    }
    myViewModel.autocompleteDataSource.load();
}, "json");

ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.autocompleteDataSource = new DevExpress.data.DataSource([]);
    //Loads json data and passes it to the DataSource
    $.get("/Content/data/countries.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.autocompleteDataSource.store().insert(data[i]);
        }
        $scope.autocompleteDataSource.load();
    }, "json");
    $scope.autocompleteInstance = {};
    $scope.onInitialized = function (e) {
        $scope.autocompleteInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.autocompleteInstance.on(
                "opened", function (e) {
                    DevExpress.ui.notify("The drop-down list is opened", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            $scope.autocompleteInstance.off("opened");
            e.component.option("text", "Subscribe to Opened event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var autocompleteData = new DevExpress.data.DataSource([]);
$("#myAutocomplete").dxAutocomplete({
    dataSource: autocompleteData,
    valueExpr: 'country',
    placeholder: 'Type country name',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("Country: <b>" + itemData.country + "</b><br/>\
            <span style=\"color:grey;\">Capital: " + itemData.capital + "</span>");
    }
});
//Loads json data and passes it to the DataSource
$.get("/Content/data/countries.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        autocompleteData.store().insert(data[i]);
    }
    autocompleteData.load();
}, "json");
$("#button").dxButton({
    text: 'Subscribe to Opened event',
    onClick: function (e) {
        if (flag === false) {
            $("#myAutocomplete").dxAutocomplete("instance").on(
                "opened", function (e) { DevExpress.ui.notify("The drop-down list is opened", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            $("#myAutocomplete").dxAutocomplete("instance").off("opened");
            e.component.option("text", "Subscribe to Opened event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->