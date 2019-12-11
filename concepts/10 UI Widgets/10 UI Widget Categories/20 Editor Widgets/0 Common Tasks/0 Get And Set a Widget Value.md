The value of an editor widget is held in the **value** configuration option. You can use any of the following approaches to get and modify widget value.

####Set Value####

To specify the initial value for the widget, assign it to the **value** option within the widget constructor.

    <!--JavaScript-->
    var widgetOptions = { 
        value: "My Text"
    };

####Get Value####

To get the option value at runtime, get the widget instance and call its **option(optionName)** method passing "value" as a parameter.

    <!--JavaScript-->
    // Get the widget instance
    ...
    var textBoxValue = textBoxInstance.option("value");

In **MVVM approach**, to get an option value, get the value of the corresponding view or application model field.

#####AngularJS Approach#####

    <!--JavaScript-->
    var text = $scope.value;

#####Knockout Approach#####

    <!--JavaScript-->
    var text = viewModel.value;
        

####Modify Value####
To modify the option value at runtime, call the **option(optionName, optionValue)** method of the widget instance. The **optionValue** parameter should take on the "value" string, while the **optionValue** parameter ought to take on the required value.

    <!--JavaScript-->
    var textBox = $("#textBoxContainer").dxTextBox("instance");
    var textBoxValue = textBox.option("value", "New Text");

In **MVVM**, to set widget value, assign a new value to the corresponding view or application model field.

#####AngularJS Approach#####

    <!--JavaScript-->
    $scope.textBoxValue = "New Text";

#####Knockout Approach#####

    <!--JavaScript-->
    textBoxValue("New Text");

In **MVVM approach**, to get and set the widget value at runtime, provide a two-way binding between the **value** option and the corresponding field of a view or application model.

#####AngularJS Approach#####

    <!--JavaScript-->
    function Controller($scope) {
        $scope.textBoxValue = "My Text";
    }

<!----><!---->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-text-box="{ bindingOptions: { value: 'textBoxValue' }}"></div>
    </div>

[note]If you need to get and set the widget value at runtime, you can also bind an appropriate **$scope** object field with the widget element using the [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel) directive.

<!---->

    <!--HTML-->
    <div ng-controller="Controller">
        <div ng-model="textBoxValue" dx-text-box="{ }"></div>
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var textBoxValue = ko.observable("My Text");

<!----><!---->

    <!--HTML-->
    <div data-bind="dxTextBox: { value: textBoxText }"></div>


