//<!--@Knockout-->
ko.applyBindings();
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function () {});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#nativePicker").dxDateBox({
    pickerType: "native",
    format: "datetime"
});
$("#calendarPicker").dxDateBox({
    pickerType: "calendar",
    format: "date"
});
$("#rollersPicker").dxDateBox({
    pickerType: "rollers",
    format: "datetime"
});
$("#listPicker").dxDateBox({
    pickerType: "list",
    format: "time"
});
//<!--/@jQuery-->