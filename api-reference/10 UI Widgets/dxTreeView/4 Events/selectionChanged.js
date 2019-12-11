var dataArray = [
    {
        id: 1,
        text: "Animals",
        items: [
            {
                id: 2,
                text: "Cat",
                items: [
                    { id: 5, text: "Abyssinian" },
                    { id: 6, text: "Aegean cat" },
                    { id: 7, text: "Australian Mist" }
                ]
            },
            {
                id: 3,
                text: "Dog",
                items: [
                    { id: 8, text: "Affenpinscher" },
                    { id: 9, text: "Afghan Hound" },
                    { id: 10, text: "Airedale Terrier" },
                    { id: 11, text: "Akita Inu" }
                ]
            },
            {
                id: 4,
                text: "Cow"
            }
        ]
    },
    {
        id: 12,
        parentId: 0,
        text: "Birds",
        items: [
            { id: 13, text: "Akekee" },
            { id: 14, text: "Arizona Woodpecker" },
            { id: 15, text: "Black-chinned Sparrow" }
        ]
    }
];var flag = false;//<!--@Knockout-->
var myViewModel = {
    treeViewData: dataArray,
    treeViewInstance: {},
    initializedHandler: function (e) {
        myViewModel.treeViewInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.treeViewInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("Selection is changed", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from SelectionChanged event");
            flag = true;
        } else {
            myViewModel.treeViewInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.treeViewData = dataArray;
    $scope.treeViewInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.treeViewInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.treeViewInstance.on(
                "selectionChanged", function (e) { DevExpress.ui.notify("Selection is changed", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $scope.treeViewInstance.off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTreeView").dxTreeView({
    dataSource: dataArray,
    width: "auto",
    showCheckBoxesMode: 'normal',
});
$("#myButton").dxButton({
    text: 'Subscribe to selectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTreeView").dxTreeView("instance")
                .on(
                    "selectionChanged", function (e) { DevExpress.ui.notify("Selection is changed", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $("#myTreeView").dxTreeView("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->