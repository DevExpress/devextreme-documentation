//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_2/PhoneJS/person1.png",
        "/Content/images/doc/16_2/PhoneJS/person2.png",
        "/Content/images/doc/16_2/PhoneJS/person3.png",
        "/Content/images/doc/16_2/PhoneJS/person4.png"
    ],
    durationValue: ko.observable(400)
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
    $scope.durationValue = 400;
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
    height: 370,
    animationDuration: 400,
    loop: true,
    slideshowDelay: 500
});
$("#durationSelector").dxNumberBox({
    min: 0,
    max: 3000,
    step: 100,
    showSpinButtons: true,
    value: 400,
    onValueChanged: function (e) {
        $("#myGallery").dxGallery("instance").option("animationDuration", e.value);
    }
});
//<!--/@jQuery-->
