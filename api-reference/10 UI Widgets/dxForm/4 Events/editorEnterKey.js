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
                "editorEnterKey", function (e) {
                                    DevExpress.ui.notify("Enter was pressed in '" + e.dataField + "' field", 'success', 1000);
                                }
            );
            e.component.option("text", "Unsubscribe from editorEnterKey event");
            flag = true;
        } else {
            myViewModel.formInstance.off("editorEnterKey");
            e.component.option("text", "Subscribe to editorEnterKey event");
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
                "editorEnterKey", function (e) {
                                    DevExpress.ui.notify("Enter was pressed in '" + e.dataField + "' field", 'success', 1000);
                                }
            );
            e.component.option("text", "Unsubscribe from editorEnterKey event");
            flag = true;
        } else {
            $scope.formInstance.off("editorEnterKey");
            e.component.option("text", "Subscribe to editorEnterKey event");
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
    text: 'Subscribe to EditorEnterKey event',
    onClick: function (e) {
        if (flag === false) {
            $("#myForm").dxForm("instance").on(
                "editorEnterKey", function (e) {
                                    DevExpress.ui.notify("Enter was pressed in '" + e.dataField + "' field", 'success', 1000);
                                }
            );
            e.component.option("text", "Unsubscribe from EditorEnterKey event");
            flag = true;
        } else {
            $("#myForm").dxForm("instance").off("editorEnterKey");
            e.component.option("text", "Subscribe to EditorEnterKey event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->