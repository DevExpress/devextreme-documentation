//<!--@Knockout-->
var myViewModel = {}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
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
//<!--/@jQuery-->