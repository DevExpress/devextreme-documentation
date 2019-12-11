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
                "uploaded", function (e) {
                                DevExpress.ui.notify("Files have been uploaded", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from Uploaded event");
            flag = true;
        } else {
            myViewModel.fileUploaderInstance.off("uploaded");
            e.component.option("text", "Subscribe to Uploaded event");
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
                "uploaded", function (e) {
                    DevExpress.ui.notify("Files have been Uploaded", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from Uploaded event");
            flag = true;
        } else {
            $scope.fileUploaderInstance.off("uploaded");
            e.component.option("text", "Subscribe to Uploaded event");
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
    text: 'Subscribe to Uploaded event',
    onClick: function (e) {
        if (flag === false) {
            $("#myFileUploader").dxFileUploader("instance").on(
                "uploaded", function (e) { DevExpress.ui.notify("Files have been uploaded", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Uploaded event");
            flag = true;
        } else {
            $("#myFileUploader").dxFileUploader("instance").off("uploaded");
            e.component.option("text", "Subscribe to Uploaded event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->