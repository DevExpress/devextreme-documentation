var flag = false;
//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ],
    galleryInstance: {},
    onInitialized: function (e) {
        myViewModel.galleryInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.galleryInstance.on(
                "selectionChanged", function (e) {
                    DevExpress.ui.dialog.alert("New value: <b>'" + e.addedItems[0].substr(e.addedItems[0].lastIndexOf("/") + 1) + "'</b></br>"                          + "Previous value <b>'" + e.removedItems[0].substr(e.removedItems[0].lastIndexOf("/") + 1) + "'</b>");
                }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            myViewModel.galleryInstance.off("selectionChanged");
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
    $scope.galleryData = [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ];
    $scope.galleryInstance = {};
    $scope.onInitialized = function (e) {
        $scope.galleryInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.galleryInstance.on(
                "selectionChanged", function (e) {
                    DevExpress.ui.dialog.alert("New value: <b>'" + e.addedItems[0].substr(e.addedItems[0].lastIndexOf("/") + 1) + "'</b></br>"                          + "Previous value <b>'" + e.removedItems[0].substr(e.removedItems[0].lastIndexOf("/") + 1) + "'</b>");
                }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $scope.galleryInstance.off("selectionChanged");
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
var galleryData = [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
];
$("#myGallery").dxGallery({
    dataSource: galleryData,
    width: '100%',
    height: 370
});
$("#button").dxButton({
    text: 'Subscribe to SelectionChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myGallery").dxGallery("instance").on(
                "selectionChanged", function (e) {
                    DevExpress.ui.dialog.alert("New value: <b>'" + e.addedItems[0].substr(e.addedItems[0].lastIndexOf("/") + 1) + "'</b></br>"                          + "Previous value <b>'" + e.removedItems[0].substr(e.removedItems[0].lastIndexOf("/") + 1) + "'</b>");
                }
            );
            e.component.option("text", "Unsubscribe from selectionChanged event");
            flag = true;
        } else {
            $("#myGallery").dxGallery("instance").off("selectionChanged");
            e.component.option("text", "Subscribe to selectionChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
