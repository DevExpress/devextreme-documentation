<article>
To create a simple form, just add the **Form** widget to your application and pass the required object to the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') option.

    <!--HTML-->
    <div id="myForm"></div>

<!---->

    <!--JavaScript-->
    var employeeData = {
            FirstName: "John",
            LastName: "Heart",
            Position: "CEO",
            OfficeNo: "901",
            BirthDate: "1964/03/16",
            HireDate: "1995/01/15",
            City: "Los Angeles",
            Phone: "+1(213) 555-9392",
            Email: "jheart@dx-email.com"
        };
    $("#myForm").dxForm({
        formData: employeeData
    });

#####AngularJS Approach#####

    <!--HTML-->
    <div ng-controller="demoController" style="height:100%;">
        <div dx-form="formData: employeeData"></div>
    </div>

<!---->

    <!--JavaScript-->
    var myApp = angular.module('myApp', ['dx']);
    myApp.controller("demoController", function ($scope) {
        $scope.employeeData = {
            FirstName: "John",
            LastName: "Heart",
            Position: "CEO",
            OfficeNo: "901",
            BirthDate: "1964/03/16",
            HireDate: "1995/01/15",
            City: "Los Angeles",
            Phone: "+1(213) 555-9392",
            Email: "jheart@dx-email.com"
        }
    });
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxForm: { formData: employeeData }"></div>

<!---->

    <!--JavaScript-->
    var myViewModel = {
        employeeData: {
            FirstName: "John",
            LastName: "Heart",
            Position: "CEO",
            OfficeNo: "901",
            BirthDate: "1964/03/16",
            HireDate: "1995/01/15",
            City: "Los Angeles",
            Phone: "+1(213) 555-9392",
            Email: "jheart@dx-email.com"
        }
    }
    ko.applyBindings(myViewModel);


When the **Form** widget generates a form item for a data field, it chooses the required editor type, depending on the data type and transforms the data field name to a label with elegant text. For instance, if a data field name is “firstName”, the item label is “First Name”.

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/SimpleForm/markup.html, Content/Applications/16_1/UIWidgets/dxForm/SimpleForm/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>
</article>