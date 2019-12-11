DevExtreme supplies a custom Knockout binding for each widget.

<ul style="font-size:14px">
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/">dxChart</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPieChart/">dxPieChart</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/">dxPolarChart</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxTreeMap/">dxTreeMap</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxCircularGauge/">dxCircularGauge</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxLinearGauge/">dxLinearGauge</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBarGauge/">dxBarGauge</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/">dxRangeSelector</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBullet/">dxBullet</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxSparkline/">dxSparkline</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/">dxVectorMap</a></li>
</ul>

To create, for example, the **Chart** widget, add a `<div>` element to the `<body>` tag of your page and use the `dxChart` binding as the following code shows.

    <!--HTML--><div data-bind="dxChart: { }"></div>

To configure a widget, add properties to the object passed to the widget binding. Note that these properties mirror the options of the widget.

    <!--HTML--><div data-bind="dxChart: {
        dataSource: [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
		],
		series: { argumentField: 'fruit', valueField: 'total' }
    }"></div>

#####See Also#####
- [Reference](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/') | **WidgetName** | **Configuration** - describes all options of a specific DevExtreme widget.

You can initialize a widget option with the value of a [view model](https://knockoutjs.com/documentation/observables.html#mvvm-and-view-models) property. For example, the following code declares the `fruitsData` property within a view model. The `dataSource` option of a **Chart** is initialized with the value of this property.

    <!--JavaScript-->var viewModel = {
		fruitsData: [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ]
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: {
        dataSource: fruitsData,
		series: { argumentField: 'fruit', valueField: 'total' }
    }"></div>

As an alternative, you can declare the whole object of widget options in the view model and pass it to the widget binding.

    <!--JavaScript-->var viewModel = {
        chartOptions: {
            dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
        }
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: chartOptions"></div>