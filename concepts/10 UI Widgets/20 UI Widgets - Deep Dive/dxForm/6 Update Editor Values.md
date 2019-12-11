If you need to update a **formData** field value at runtime, you can redefine the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') option value. In this case, form item values are automatically updated. However, the widget is completely rerendered.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").option("formData", {
        FirstName: "John",
        LastName: "Heart",
        Position: "CEO",
        OfficeNo: "1003",
        BirthDate: "1964/03/16",
        HireDate: "1995/01/15",
        City: "New York",
        Phone: "+1(555) 555-9244",
        Email: "jheart@dx-email.com"
    });

The **Form** widget includes the [updateData(data)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/updateData(data).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#updateDatadata') and [updateData(dataField, value)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/updateData(dataField_value).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#updateDatadataField_value') methods, which enable you to update values of certain **formData** object fields and the corresponding editors without widget rerendering.

The **updateData(dataField, value)** method enables you to update only a single field value.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").updateData("OfficeNo", "1003");

The **updateData(data)** method enables you to update several values at once.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").updateData({
        OfficeNo: "1003",
        City: "New York",
        Phone: "+1(555) 555-9244"
    });

In **MVVM approach**, provide two-way binding for the required [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field.

#####AngularJS Approach#####

    <!--JavaScript-->
    var myApp = angular.module('myApp', ['dx']);
    myApp.controller("demoController", function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Heart";
        $scope.position = "CEO";
        $scope.officeNo = "1003";
        $scope.birthDate = "1964/03/16";
        $scope.hireDate = "1995/01/15";
        $scope.city = "New York";
        $scope.phone = "+1(555) 555-9244";
        $scope.email = "jheart@dx-email.com";
    });
    
<!---->

    <!--HTML-->
    <div ng-controller="demoController">
        . . .
        <div dx-form="{
             . . .
             bindingOptions: {
                formData.FirstName: 'firstName',
                formData.LastName: 'lastName',
                formData.Position: 'position',
                formData.OfficeNo: 'officeNo',
                formData.BirthDate: 'birthDate',
                formData.HireDate: 'hireDate',
                formData.City: 'city',
                formData.Phone: 'phone',
                formData.Email: 'email'
             }
        }"></div>
        . . .
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var viewModel = {
        firstName: ko.observable("John"),
        lastName: ko.observable("Heart"),
        position: ko.observable("CEO"),
        officeNo: ko.observable("1003"),
        birthDate: ko.observable("1964/03/16"),
        hireDate: ko.observable("1995/01/15"),
        city: ko.observable("New York"),
        phone: ko.observable("+1(555) 555-9244"),
        email: ko.observable("jheart@dx-email.com")
    }
    ko.applyBindings(viewModel);
    
<!---->

    <!--HTML-->
        <div data-bind="dxForm: {
             . . .
             formData: {
                FirstName: firstName,
                LastName: lastName,
                Position: position,
                OfficeNo: officeNo,
                BirthDate: birthDate,
                HireDate: hireDate,
                City: city,
                Phone: phone,
                Email: email
             }
        }"></div>


