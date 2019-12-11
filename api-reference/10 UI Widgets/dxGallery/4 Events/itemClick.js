var flag = false;
//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_2/PhoneJS/person1.png",
        "/Content/images/doc/16_2/PhoneJS/person2.png",
        "/Content/images/doc/16_2/PhoneJS/person3.png",
        "/Content/images/doc/16_2/PhoneJS/person4.png"
    ],
    galleryInstance: {},
    onInitialized: function (e) {
        myViewModel.galleryInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.galleryInstance.on(
                "itemClick", function (e) {
                                DevExpress.ui.notify("Index of the clicked item is '" + e.itemIndex + "'", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.galleryInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
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
    $scope.galleryInstance = {};
    $scope.onInitialized = function (e) {
        $scope.galleryInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.galleryInstance.on(
                "itemClick", function (e) {
                                DevExpress.ui.notify("Index of the clicked item is '" + e.itemIndex + "'", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.galleryInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var galleryData = [
        "/Content/images/doc/16_2/PhoneJS/person1.png",
        "/Content/images/doc/16_2/PhoneJS/person2.png",
        "/Content/images/doc/16_2/PhoneJS/person3.png",
        "/Content/images/doc/16_2/PhoneJS/person4.png"
];
$("#myGallery").dxGallery({
    dataSource: galleryData,
    width: '100%',
    height: 370
});
$("#button").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myGallery").dxGallery("instance").on(
                "itemClick", function (e) {
                                DevExpress.ui.notify("Index of the clicked item is '" + e.itemIndex + "'", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myGallery").dxGallery("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
