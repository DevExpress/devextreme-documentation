Make sure you linked all the required resources before creating a widget:

- **Link Resources**: [Local Scripts](/concepts/Common/Distribution%20Channels/15%20ZIP%20Archive.md '/Documentation/Guide/Common/Distribution_Channels/ZIP_Archive/') | [CDN Services](/concepts/Common/Distribution%20Channels/05%20CDN '/Documentation/Guide/Common/Distribution_Channels/CDN/') | [NuGet Package](/concepts/Common/Distribution%20Channels/10%20NuGet.md '/Documentation/Guide/Common/Distribution_Channels/NuGet/') | [npm Package](/concepts/Common/Distribution%20Channels/01%20npm.md '/Documentation/Guide/Common/Distribution_Channels/npm/')

All DevExtreme widgets can be created on a page in the same manner - using a widget-specific Knockout binding. To create, for example, the dxChart widget, add a `<div>` element to the `<body>` tag of your page and use the `dxChart` binding as the following code shows.

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

You can initialize a widget option with the value of a <a href="http://knockoutjs.com/documentation/observables.html#mvvm-and-view-models" target="_blank">view model</a> property. For example, the following code declares the `fruitsData` property within a view model. The **dataSource** option of the **Chart** is initialized with the value of this property.

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

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart').[Configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/')
- [Change Options](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options')

[tags]basics, knockout, create, configure, initialize, design time, view model
