//<!--@Knockout-->
var myViewModel = {
    galleryDataSource: new DevExpress.data.DataSource([
        { src: "/Content/images/doc/16_2/PhoneJS/person1.png", name: "Maria", age: 28 },
        { src: "/Content/images/doc/16_2/PhoneJS/person2.png", name: "John", age: 26 },
        { src: "/Content/images/doc/16_2/PhoneJS/person3.png", name: "Xavier", age: 27 },
        { src: "/Content/images/doc/16_2/PhoneJS/person4.png", name: "Amanda", age: 24 }
    ]),
    sortConditions: ["none", "name", "age"],
    sortConditionChanged: function (e) {
        this.galleryDataSource.sort(e.value === "none" ? null : e.value);
        this.galleryDataSource.load();
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.galleryDataSource = new DevExpress.data.DataSource([
        { src: "/Content/images/doc/16_2/PhoneJS/person1.png", name: "Maria", age: 28 },
        { src: "/Content/images/doc/16_2/PhoneJS/person2.png", name: "John", age: 26 },
        { src: "/Content/images/doc/16_2/PhoneJS/person3.png", name: "Xavier", age: 27 },
        { src: "/Content/images/doc/16_2/PhoneJS/person4.png", name: "Amanda", age: 24 }
    ]);
    $scope.sortConditions = ["none", "name", "age"];
    $scope.sortConditionChanged = function (e) {
        $scope.galleryDataSource.sort(e.value === "none" ? null : e.value);
        $scope.galleryDataSource.load();
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var galleryDataSource = new DevExpress.data.DataSource([
        { src: "/Content/images/doc/16_2/PhoneJS/person1.png", name: "Maria", age: 28 },
        { src: "/Content/images/doc/16_2/PhoneJS/person2.png", name: "John", age: 26 },
        { src: "/Content/images/doc/16_2/PhoneJS/person3.png", name: "Xavier", age: 27 },
        { src: "/Content/images/doc/16_2/PhoneJS/person4.png", name: "Amanda", age: 24 }
]);
$("#myGallery").dxGallery({
    dataSource: galleryDataSource,
    width: '100%',
    height: 370,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<img src=\"" + itemData.src + "\" />");
        itemElement.append("<p><b>Name</b>: " + itemData.name + " (Age: " + itemData.age + ")</p>");
    }
});
$("#sortSelector").dxSelectBox({
    dataSource: ["none", "name", "age"],
    value: "none",
    onValueChanged: function (e) {
        galleryDataSource.sort(e.value === "none" ? null : e.value);
        galleryDataSource.load();
    }
});
//<!--/@jQuery-->
