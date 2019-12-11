//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ],
    delayValue: ko.observable(0)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.galleryData = [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ];
    $scope.delayValue = 0;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myGallery").dxGallery({
    dataSource: [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ],
    width: '100%',
    height: 370,
    animationDuration: 500,
    loop: true,
    slideshowDelay: 0
});
$("#delaySelector").dxNumberBox({
    min: 0,
    max: 3000,
    step: 100,
    showSpinButtons: true,
    value: 0,
    onValueChanged: function (e) {
        $("#myGallery").dxGallery("instance").option("slideshowDelay", e.value);
    }
});
//<!--/@jQuery-->
