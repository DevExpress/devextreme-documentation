var dataArray = [
    { id: 1, text: "Animals", parentId: 0 },
    { id: 2, text: "Birds", parentId: 0 },
    { id: 3, text: "Cat", parentId: 1 }, 
    { id: 4, text: "Dog", parentId: 1 },
    { id: 5, text: "Cow", parentId: 1 },
    { id: 6, text: "Akekee", parentId: 2 },
    { id: 7, text: "Arizona Woodpecker", parentId: 2 },
    { id: 8, text: "Black-chinned Sparrow", parentId: 2 },
    { id: 9, text: "Abyssinian", parentId: 3 },
    { id: 10, text: "Aegean cat", parentId: 3 },
    { id: 11, text: "Australian Mist", parentId: 3 },
    { id: 12, text: "Affenpinscher", parentId: 4 },
    { id: 13, text: "Afghan Hound", parentId: 4 },
    { id: 14, text: "Airedale Terrier", parentId: 4 },
    { id: 15, text: "Akita Inu", parentId: 4 }
];//<!--@Knockout-->
var myViewModel = {
    treeViewData: dataArray
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.treeViewData = dataArray;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTreeView").dxTreeView({
    dataSource: dataArray,
    dataStructure: 'plain',
    width: "auto"
});
//<!--/@jQuery-->