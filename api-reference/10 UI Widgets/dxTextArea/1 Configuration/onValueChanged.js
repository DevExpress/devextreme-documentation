//<!--@Knockout-->
var myViewModel = {
    valueChanged: function (e) {
        if(e.value.length === e.previousValue.length )
            DevExpress.ui.notify("You have changed the text.");
        if (e.value.length > e.previousValue.length)
            DevExpress.ui.notify("You have typed " + (e.value.length - e.previousValue.length) + " characters.");
        if (e.value.length < e.previousValue.length)
            DevExpress.ui.notify("You have deleted " + (e.previousValue.length - e.value.length) + " characters.");
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.valueChanged = function (e) {
        if (e.value.length === e.previousValue.length)
            DevExpress.ui.notify("You have changed the text.");
        if (e.value.length > e.previousValue.length)
            DevExpress.ui.notify("You have typed " + (e.value.length - e.previousValue.length) + " characters.");
        if (e.value.length < e.previousValue.length)
            DevExpress.ui.notify("You have deleted " + (e.previousValue.length - e.value.length) + " characters.");
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextArea").dxTextArea({
    height: 300,
    placeholder: 'Type text here',
    onValueChanged: function (e) {
        if (e.value.length === e.previousValue.length)
            DevExpress.ui.notify("You have changed the text.");
        if (e.value.length > e.previousValue.length)
            DevExpress.ui.notify("You have typed " + (e.value.length - e.previousValue.length) + " characters.");
        if (e.value.length < e.previousValue.length)
            DevExpress.ui.notify("You have deleted " + (e.previousValue.length - e.value.length) + " characters.");
    }
});
//<!--/@jQuery-->