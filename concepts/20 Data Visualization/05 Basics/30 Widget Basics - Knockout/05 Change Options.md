To be able to change a widget option, declare its value an [observable](https://knockoutjs.com/documentation/observables.html).

    <!--JavaScript-->var viewModel = {
        rangeSelectorOptions: {
            // ...
            selectedRangeColor: ko.observable('yellow'),
            export: {
                enabled: ko.observable(false)
            }
        }
	};

    viewModel.changeObservables = function () {
        viewModel.rangeSelectorOptions.selectedRangeColor('blue');
        viewModel.rangeSelectorOptions.export.enabled(true);
    };

	ko.applyBindings(viewModel);

Now, if you change an observable in code, the widget will receive the changes and update the UI.

[note]Options containing array and specified on the second (or further) level of the configuration object cannot be made observable.

In rare cases, you may need things to function the other way as well; that is, you may need an observable to get updated when a user changes the UI. For example, consider the following configuration of the [RangeSelector](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/') widget.

    <!--JavaScript-->var viewModel = {
        rangeSelectorOptions: {
            // ...
            selectedRange: {
                startValue: ko.observable(10),
                endValue: ko.observable(20)
            }
        }
	};

Here, when a user changes the selected range in the UI, these observables stay intact. But what you need is for observables to always be synced with the UI. For this purpose, declare the whole `selectedRange` object an observable.

    <!--JavaScript-->var viewModel = {
        rangeSelectorOptions: {
            // ...
            selectedRange: ko.observable({
                startValue: 10,
                endValue: 20
            })
        }
	};