var flag = false;
//<!--@Knockout-->
var myViewModel = {
    formInstance: {},
    onInitialized: function (e) {
        myViewModel.formInstance = e.component;
    },
    companyData: {
        id: "1",
        name: "Super Mart of the West",
        city: "Bentonville",
        state: "Arkansas",
        zip: 72716,
        phone: "(800) 555-2797",
        fax: "(800) 555-2171",
        website: "http://www.nowebsitesupermart.com"
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.formInstance.on(
                "fieldDataChanged", function (e) {
                                        DevExpress.ui.notify("New value of " + e.dataField + " field is '" + e.value + "'", 'success', 1000);
                                    }
            );
            e.component.option("text", "Unsubscribe from FieldDataChanged event");
            flag = true;
        } else {
            myViewModel.formInstance.off("fieldDataChanged");
            e.component.option("text", "Subscribe to FieldDataChanged event");
            flag = false;
        }
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
    $scope.formInstance = {};
    $scope.onInitialized = function (e) {
        $scope.formInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.formInstance.on(
                "fieldDataChanged", function (e) {
                                        DevExpress.ui.notify("New value of " + e.dataField + " field is '" + e.value + "'", 'success', 1000);
                                    }
            );
            e.component.option("text", "Unsubscribe from fieldDataChanged event");
            flag = true;
        } else {
            $scope.formInstance.off("fieldDataChanged");
            e.component.option("text", "Subscribe to fieldDataChanged event");
            flag = false;
        }
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
};
$("#myForm").dxForm({
    formData: companyData,
    colCount: 2
});
$("#button").dxButton({
    text: 'Subscribe to FieldDataChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myForm").dxForm("instance").on(
                "fieldDataChanged", function (e) {
                                        DevExpress.ui.notify("New value of " + e.dataField + " field is '" + e.value + "'", 'success', 1000);
                                    }
            );
            e.component.option("text", "Unsubscribe from FieldDataChanged event");
            flag = true;
        } else {
            $("#myForm").dxForm("instance").off("fieldDataChanged");
            e.component.option("text", "Subscribe to FieldDataChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->