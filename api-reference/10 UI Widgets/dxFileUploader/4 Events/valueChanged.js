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
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert("Previous amount of files: <b>'" + e.previousValue.length + "'</b></br>" + 
                                                                "New amount of files: <b>'" + e.value.length + "'</b>", "Info");
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            myViewModel.fileUploaderInstance.off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
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
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert("Previous amount of files: <b>'" + e.previousValue.length + "'</b></br>" +
                                                                "New amount of files: <b>'" + e.value.length + "'</b>", "Info");
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.fileUploaderInstance.off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
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
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myFileUploader").dxFileUploader("instance").on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert("Previous amount of files: <b>'" + e.previousValue.length + "'</b></br>" +
                                                                "New amount of files: <b>'" + e.value.length + "'</b>", "Info");
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myFileUploader").dxFileUploader("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->