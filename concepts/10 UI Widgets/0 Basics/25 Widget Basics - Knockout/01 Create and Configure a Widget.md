DevExtreme supplies a custom Knockout binding for each widget. All DevExtreme widgets are added to the application in the same manner.

To create, for example, the [Menu](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/') widget, add a `<div>` element to the `<body>` tag of your page and use the `dxMenu` binding as the following code shows.

    <!--HTML--><div data-bind="dxMenu: { }"></div>

To configure a widget, add properties to the object passed to the widget binding. Note that these properties mirror the options of the widget.

    <!--HTML--><div data-bind="dxMenu: {
        dataSource: [{
            text: 'Guides',
            items: [
                { text: 'VS Integration' },
                { text: 'UI Widgets' },
                { text: 'Data Visualization' },
                { text: 'Data Layer' }
            ]
        },
        ...
        ],
        selectByClick: true
    }"></div>

#####See Also#####
- [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Configuration** - describes all options of a specific DevExtreme widget.

You can initialize a widget option with the value of a [view model](https://knockoutjs.com/documentation/observables.html#mvvm-and-view-models) property. For example, the following code declares the `menuItems` property within a view model. The `dataSource` option of a **Menu** is initialized with the value of this property.

    <!--JavaScript-->var viewModel = {
        menuItems: [
            {
                text: "Guides",
                items: [
                    { text: "VS Integration" },
                    { text: "UI Widgets" },
                    { text: "Data Visualization" },
                    { text: "Data Layer" }
                ]
            },
            ...
        ]
    };

    ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxMenu: {
        dataSource: menuItems,
        selectByClick: true
    }"></div>

As an alternative, you can declare the whole object of widget options in the view model and pass it to the widget binding.

    <!--JavaScript-->var viewModel = {
        menuOptions: {
            dataSource: [{
                text: "Guides",
                items: [
                    { text: "VS Integration" },
                    { text: "UI Widgets" },
                    { text: "Data Visualization" },
                    { text: "Data Layer" }
                ]
            },
            ...
            ],
            selectByClick: true
        }
    };

    ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxMenu: menuOptions"></div>