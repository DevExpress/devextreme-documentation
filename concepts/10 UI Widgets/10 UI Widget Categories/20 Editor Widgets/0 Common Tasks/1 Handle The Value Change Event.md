To timely process a new widget value, the editor widgets require you to handle the value change event...

Pass the event handling function to the **onValueChanged** option when creating the widget.

    <!--JavaScript-->
    var valueChangeHandler = function(e){
        alert("New value: " + e.value + ", old value: " + e.previousValue);
    }
    var textBoxOptions = {
        onValueChanged: valueChangeHandler
    }

...or at runtime.

    <!--JavaScript-->
    // Get the widget instance
    ...
    textBoxInstance.option("onValueChange", valueChangeHandler);

Note that the handling function includes the **e** parameter that takes on an object containing the widget value.

In the **AngularJS Approach**, you may use the **$watch** listener for the **$scope** object property bound to the **value** option.

    <!--JavaScript-->
    function Controller($scope) {
        $scope.text = "";
        $scope.$watch("text", function(newValue, oldValue) {
            alert("The text box value has been changed from " + oldValue + " to " + newValue);
        });
    }

<!---->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-text-box="{ bindingOptions: { 'value': 'text' }}"></div>
    </div>

In the **Knockout approach**, you may subscribe the change event of the observable variable passed to the **value** option of the widget.

    <!--JavaScript-->
    var text = ko.observable("");
    text.subscribe(function(value){
        alert("The text box value has been changed to " + value);
    });

<!---->

    <!--HTML-->
    <div data-bind="dxTextBox: { value: text }"></div>

