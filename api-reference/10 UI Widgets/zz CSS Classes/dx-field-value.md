---
##### shortDescription
A class used to display a field value containing a widget within the [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field') element.

---
<!--JavaScript-->
    $("#nameTextBox").dxTextBox({
        value: "John"
    });

<!---->

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Name</div>
        <div class="dx-field-value" id="nameTextBox"></div>
    </div>

#####AngularJS Approach#####

    <!--JavaScript-->
    var myApp = angular.module('myApp', ['dx']);
    myApp.controller("demoController", function ($scope) {
        $scope.name = "John";
    });

<!---->

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Name</div>
        <div class="dx-field-value" dx-text-box="{ value: name }"></div>
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var myViewModel = {
        name: ko.observable("John")
    }
    ko.applyBindings(myViewModel);

<!---->

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label">Name</div>
        <div class="dx-field-value" data-bind="dxTextBox: { value: name }"></div>
    </div>

To display plain text, knockout bindings or custom markup within a field value element, use the [dx-field-value-static](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value-static.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-value-static') CSS class.

DevExtreme UI widgets includes [WAI-ARIA](https://www.w3.org/WAI/intro/aria.php) markup to support screen readers. If you use a widget within a field value element, associate the widget with the field label to allow a screen reader to properly read the field. For this purpose, specify a unique ID for the field label element and assign this ID to the **aria-labeledby** attribute of the associated widget as demonstrated below.

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" id="fullNameTextBox"></div>
        </div>
    </div>

#####AngularJS Approach#####

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" dx-text-box="{ value: fullName }"></div>
        </div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div class="dx-field">
        <div class="dx-field-label" id="fullnameLabel">Full Name</div>
        <div class="dx-field-value">
            <div aria-labeledby="fullnameLabel" data-bind="dxTextBox: { value: fullName }"></div>
        </div>
    </div>