var flag = false;
var selectedItems = [];
var updateSelectedItems = function () {
    $("#selectedItems > span").text(selectedItems.join(', '));
};
//<!--@Knockout-->
var myViewModel = {
    listDataSource: [
        "Prepare 2013 Financial",
        "Prepare 3013 Marketing Plan",
        "Update Personnel Files",
        "Review Health Insurance Options Under the Affordable Care Act",
        "Choose between PPO and HMO Health Plan"],
    listInstance: {},
    onInitialized: function (e) {
        myViewModel.listInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.listInstance.on(
                "selectionChanged", function (data) {
                    selectedItems = $.map(selectedItems, function (item) {
                        if (data.removedItems.indexOf(item) == -1)
                            return item;
                    });
                    selectedItems = selectedItems.concat(data.addedItems);
                    updateSelectedItems();
                }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            myViewModel.listInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = [
        "Prepare 2013 Financial",
        "Prepare 3013 Marketing Plan",
        "Update Personnel Files",
        "Review Health Insurance Options Under the Affordable Care Act",
        "Choose between PPO and HMO Health Plan"];
    $scope.listInstance = {};
    $scope.onInitialized = function (e) {
        $scope.listInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.listInstance.on(
                "selectionChanged", function (data) {
                    selectedItems = $.map(selectedItems, function (item) {
                        if (data.removedItems.indexOf(item) == -1)
                            return item;
                    });
                    selectedItems = selectedItems.concat(data.addedItems);
                    updateSelectedItems();
                }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $scope.listInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
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
    dataSource: [
        "Prepare 2013 Financial",
        "Prepare 3013 Marketing Plan",
        "Update Personnel Files",
        "Review Health Insurance Options Under the Affordable Care Act",
        "Choose between PPO and HMO Health Plan"],
    width: '100%',
    height: 300,
    selectionMode: 'multiple',
    showSelectionControls: true,
    allowItemDeleting: true
});
$("#button").dxButton({
    text: 'Subscribe to SelectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myList").dxList("instance").on(
                "selectionChanged", function (data) {
                    selectedItems = $.map(selectedItems, function (item) {
                        if (data.removedItems.indexOf(item) == -1)
                            return item;
                    });
                    selectedItems = selectedItems.concat(data.addedItems);
                    updateSelectedItems();
                }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            $("#myList").dxList("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to SelectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->