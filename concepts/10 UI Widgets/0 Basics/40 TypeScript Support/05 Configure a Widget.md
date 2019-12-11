The following code example shows how to declare a widget configuration object using TypeScript.

    window.onload = () => {
        var options: DevExpress.ui.dxButtonOptions;
        options = {
            text: 'Submit'
        };
    };

Any configuration object should have a specific type. In this example, the `options` object has the `dxButtonOptions` type, which configures the **Button** widget. All the types of DevExtreme widget configuration objects are declared in the DevExpress.ui namespace. The type names are formed by concatenating the widget name (e.g. *dxButton*) and *Options*.

After you have declared a configuration object, pass it to the [jQuery plugin](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget') ...

    $('#buttonContainer').dxButton(options);  

... [Knockout binding](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widget') ...

    var viewModel = {
        buttonOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxButton: buttonOptions"></div>

... or [AngularJS directive](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget').

    function Controller($scope) {
		$scope.buttonOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-button="buttonOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a widget configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.