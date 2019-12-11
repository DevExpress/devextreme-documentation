//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ],
    enableIndicator: ko.observable(true)
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
    $scope.enableIndicator = true;
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
    height: 370
});
$("#indicatorEnabledSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myGallery").dxGallery("instance").option("indicatorEnabled", e.value);
    }
});
//<!--/@jQuery-->
