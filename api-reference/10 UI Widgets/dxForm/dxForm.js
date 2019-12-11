//<!--@Knockout-->
var myViewModel = {
    companyData: {
        id: "1",
        name: "Super Mart of the West",
        city: "Bentonville",
        state: "Arkansas",
        zip: 72716,
        phone: "(800) 555-2797",
        fax: "(800) 555-2171",
        website: "http://www.nowebsitesupermart.com"
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.companyData = {
        id: "1",
        name: "Super Mart of the West",
        city: "Bentonville",
        state: "Arkansas",
        zip: 72716,
        phone: "(800) 555-2797",
        fax: "(800) 555-2171",
        website: "http://www.nowebsitesupermart.com"
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var companyData = {
    id: "1",
    name: "Super Mart of the West",
    city: "Bentonville",
    state: "Arkansas",
    zip: 72716,
    phone: "(800) 555-2797",
    fax: "(800) 555-2171",
    website: "http://www.nowebsitesupermart.com"
}
$("#myForm").dxForm({
    formData: companyData,
    colCount: 2
});
//<!--/@jQuery-->