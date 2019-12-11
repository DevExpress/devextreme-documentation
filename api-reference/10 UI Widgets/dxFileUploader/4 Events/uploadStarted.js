var flag = false;
//<!--@Knockout-->
var myViewModel = {
    fileUploaderInstance: {},
    onInitialized: function (e) {
        myViewModel.fileUploaderInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.fileUploaderInstance.on(
                "uploadStarted", function (e) {
                                DevExpress.ui.notify("File uploading is started", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from UploadStarted event");
            flag = true;
        } else {
            myViewModel.fileUploaderInstance.off("uploadStarted");
            e.component.option("text", "Subscribe to UploadStarted event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.fileUploaderInstance = {};
    $scope.onInitialized = function (e) {
        $scope.fileUploaderInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.fileUploaderInstance.on(
                "uploadStarted", function (e) {
                    DevExpress.ui.notify("File uploading is started", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from UploadStarted event");
            flag = true;
        } else {
            $scope.fileUploaderInstance.off("uploadStarted");
            e.component.option("text", "Subscribe to UploadStarted event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myFileUploader").dxFileUploader({
    multiple: true,
    uploadMode: 'useButtons',
    uploadUrl: '/Content/Services/upload.aspx'
});
$("#button").dxButton({
    text: 'Subscribe to uploadStarted event',
    onClick: function (e) {
        if (flag === false) {
            $("#myFileUploader").dxFileUploader("instance").on(
                "uploadStarted", function (e) { DevExpress.ui.notify("File uploading is started", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from uploadStarted event");
            flag = true;
        } else {
            $("#myFileUploader").dxFileUploader("instance").off("uploadStarted");
            e.component.option("text", "Subscribe to uploadStarted event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->