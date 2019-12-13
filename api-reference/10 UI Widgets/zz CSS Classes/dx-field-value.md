---
##### shortDescription
A class used to display a field value containing a widget within the [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field') element.

---
- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div class="dx-field">
            <div class="dx-field-label">Name</div>
            <div class="dx-field-value" id="nameTextBox"></div>
        </div>
        
        <!--JavaScript-->
        $("#nameTextBox").dxTextBox({
            value: "John"
        });

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div class="dx-field">
            <div class="dx-field-label">Name</div>
            <div class="dx-field-value" dx-text-box="{ value: name }"></div>
        </div>

        <!--JavaScript-->
        var myApp = angular.module('myApp', ["dx"]);
        myApp.controller("demoController", function ($scope) {
            $scope.name = "John";
        });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div class="dx-field">
            <div class="dx-field-label">Name</div>
            <div class="dx-field-value" data-bind="dxTextBox: { value: name }"></div>
        </div>

        <!--JavaScript-->
        var myViewModel = {
            name: ko.observable("John")
        }
        ko.applyBindings(myViewModel);

To display plain text, knockout bindings or custom markup within a field value element, use the [dx-field-value-static](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value-static.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-value-static') CSS class.

DevExtreme UI widgets includes <a href="http://www.w3.org/WAI/intro/aria.php" target="_blank">WAI-ARIA</a> markup to support screen readers. If you use a widget within a field value element, associate the widget with the field label to allow a screen reader to properly read the field. For this purpose, specify a unique ID for the field label element and assign this ID to the **aria-labeledby** attribute of the associated widget as demonstrated below.

- **jQuery**

        <!--HTML-->
        <div class="dx-field">
            <div class="dx-field-label" id="fullnameLabel">Full Name</div>
            <div class="dx-field-value">
                <div aria-labeledby="fullnameLabel" id="fullNameTextBox"></div>
            </div>
        </div>

- **AngularJS**

        <!--HTML-->
        <div class="dx-field">
            <div class="dx-field-label" id="fullnameLabel">Full Name</div>
            <div class="dx-field-value">
                <div aria-labeledby="fullnameLabel" dx-text-box="{ value: fullName }"></div>
            </div>
        </div>

- **Knockout**

        <!--HTML-->
        <div class="dx-field">
            <div class="dx-field-label" id="fullnameLabel">Full Name</div>
            <div class="dx-field-value">
                <div aria-labeledby="fullnameLabel" data-bind="dxTextBox: { value: fullName }"></div>
            </div>
        </div>

[note]The `dx-field-label` and `dx-field-value` classes are designed to have the label always be before the value. If you need to swap them around, override the `float` CSS property of these classes in the following way.

    <!--CSS-->
    .dx-field-label {
        float: right;
    }
    .dx-field-value {
        float: left;
    }