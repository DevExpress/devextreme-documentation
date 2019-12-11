//<!--@Knockout-->
var myViewModel = {
    buttonText: 'Click me',
    buttonIcon: ko.observable(""),
    buttonClicked: function () {
        DevExpress.ui.notify("The button is clicked", "success", 1000);
    },
    icons: new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        map: function (item) {
            return item.name;
        }
    })
}
ko.applyBindings(myViewModel);
$.get("/Content/data/icons_ext.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.icons.store().insert(data[i]);
    }
    myViewModel.icons.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.buttonText = "Click me";
    $scope.buttonIcon = "";
    $scope.buttonClicked = function () {
        DevExpress.ui.notify("The button is clicked", "success", 1000);
    };
    $scope.icons = new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        map: function (item) {
            return item.name;
        }
    }),
    $.get("/Content/data/icons_ext.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.icons.store().insert(data[i]);
        }
        $scope.icons.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var icons = new DevExpress.data.DataSource({
    store: [],
    paginate: false,
    map: function (item) {
        return item.name;
    }
});
$("#myButton").dxButton({
    text: 'Click me',
    onClick: function () {
        DevExpress.ui.notify("The button is clicked", "success", 1000);
    }
});
$("#iconSelector").dxSelectBox({
    dataSource: icons,
    onValueChanged: function (e) {
        $("#myButton").dxButton("instance").option("icon", e.value);
    }
});
$.get("/Content/data/icons_ext.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        icons.store().insert(data[i]);
    }
    icons.load();
}, "json");
//<!--/@jQuery-->