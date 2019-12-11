var flag = false;
//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    listInstance: {},
    onInitialized: function (e) {
        myViewModel.listInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.listInstance.on(
                "scroll", function (e) {
                            DevExpress.ui.notify("List is Scrolled", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Scroll event");
            flag = true;
        } else {
            myViewModel.listInstance.off("scroll");
            e.component.option("text", "Subscribe to Scroll event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");
    $scope.listInstance = {};
    $scope.onInitialized = function (e) {
        $scope.listInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.listInstance.on(
                "scroll", function (e) {
                            DevExpress.ui.notify("List is scrolled", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from scroll event");
            flag = true;
        } else {
            $scope.listInstance.off("scroll");
            e.component.option("text", "Subscribe to scroll event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myList").dxList({
    dataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    width: '100%',
    height: 370,
    scrollingEnabled: true,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#button").dxButton({
    text: 'Subscribe to scroll event',
    onClick: function (e) {
        if (flag === false) {
            $("#myList").dxList("instance").on(
                "scroll", function (e) {
                            DevExpress.ui.notify("List is scrolled", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Scroll event");
            flag = true;
        } else {
            $("#myList").dxList("instance").off("scroll");
            e.component.option("text", "Subscribe to Scroll event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->