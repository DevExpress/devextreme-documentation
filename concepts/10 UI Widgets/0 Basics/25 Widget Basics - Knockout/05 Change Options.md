Once you specify options in the configuration object, you may need to change them dynamically.

To be able to change a widget option, declare its value an [observable](https://knockoutjs.com/documentation/observables.html).

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

Now, if you change an observable in code, the widget receives the changes and updates the UI. And vice versa, if a user changes something in the UI, the observable gets updated.

[note]Options containing array and specified on the second (or further) level of the configuration object cannot be made observable.
