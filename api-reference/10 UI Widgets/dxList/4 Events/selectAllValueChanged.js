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
                "selectAllValueChanged", function (e) {
                                            DevExpress.ui.notify("Select all check box value is '" + e.value + "'", "success", 1000);
                                        }
            );
            e.component.option("text", "Unsubscribe from selectAllValueChanged event");
            flag = true;
        } else {
            myViewModel.listInstance.off("selectAllValueChanged");
            e.component.option("text", "Subscribe to selectAllValueChanged event");
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
                "selectAllValueChanged", function (e) {
                                            DevExpress.ui.notify("Select all check box value is '" + e.value + "'", "success", 1000);
                                        }
            );
            e.component.option("text", "Unsubscribe from SelectAllValueChanged event");
            flag = true;
        } else {
            $scope.listInstance.off("selectAllValueChanged");
            e.component.option("text", "Subscribe to SelectAllValueChanged event");
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
    selectionMode: 'all',
    showSelectionControls: true,
    allowItemDeleting: true,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#button").dxButton({
    text: 'Subscribe to selectAllValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myList").dxList("instance").on(
                "selectAllValueChanged", function (e) {
                                            DevExpress.ui.notify("Select all check box value is '" + e.value + "'", "success", 1000);
                                        }
            );
            e.component.option("text", "Unsubscribe from selectAllValueChanged event");
            flag = true;
        } else {
            $("#myList").dxList("instance").off("selectAllValueChanged");
            e.component.option("text", "Subscribe to selectAllValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->