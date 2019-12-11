//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_2/PhoneJS/person1.png",
        "/Content/images/doc/16_2/PhoneJS/person2.png",
        "/Content/images/doc/16_2/PhoneJS/person3.png",
        "/Content/images/doc/16_2/PhoneJS/person4.png"
    ],
    initialWidth: ko.observable(150)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.galleryData = [
        "/Content/images/doc/16_2/PhoneJS/person1.png",
        "/Content/images/doc/16_2/PhoneJS/person2.png",
        "/Content/images/doc/16_2/PhoneJS/person3.png",
        "/Content/images/doc/16_2/PhoneJS/person4.png"
    ];
    $scope.initialWidth = 150;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myGallery").dxGallery({
    dataSource: [
        "/Content/images/doc/16_2/PhoneJS/person1.png",
        "/Content/images/doc/16_2/PhoneJS/person2.png",
        "/Content/images/doc/16_2/PhoneJS/person3.png",
        "/Content/images/doc/16_2/PhoneJS/person4.png"
    ],
    width: '100%',
    height: 200,
    initialItemWidth: 150,
    stretchImages: false
});
$("#widthSelector").dxNumberBox({
    min: 100,
    max: 200,
    step: 10,
    showSpinButtons: true,
    value: 150,
    onValueChanged: function (e) {
        $("#myGallery").dxGallery("instance").option("initialItemWidth", e.value);
    }
});
//<!--/@jQuery-->
