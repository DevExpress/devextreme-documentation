To be able to change a widget option, declare its value an <a href="http://knockoutjs.com/documentation/observables.html" target="_blank">observable</a>.

    <!--JavaScript-->var viewModel = {
        checkBoxOptions: {
            // ...
            value: ko.observable(true)
        }
	};

    viewModel.changeObservables = function () {
        viewModel.checkBoxOptions.value(false);
    };

	ko.applyBindings(viewModel);

Now, if you change an observable in code, the widget will receive the changes and update the UI. And vice versa, if a user changes something in the UI, the observable gets updated.

[note]Options containing array and specified on the second (or further) level of the configuration object cannot be made observable.

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[CheckBox](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Widgets/dxCheckBox/').[Configuration](/api-reference/10%20UI%20Widgets/dxCheckBox/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/')
- [Create and Configure a Widget](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget')

[tags]basics, knockout, change options, get, set, runtime, observables, two-way binding