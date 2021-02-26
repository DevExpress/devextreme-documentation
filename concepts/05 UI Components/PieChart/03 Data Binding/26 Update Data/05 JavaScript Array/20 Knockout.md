Declare the array <a href="http://knockoutjs.com/documentation/observableArrays.html" target="_blank">observable</a> and bind the **dataSource** property to it. Whenever an item is added or removed from this array, the PieChart will be updated accordingly.

    <!--HTML--><div id="pieChartContainer" data-bind="dxPieChart: {
        dataSource: fruits
    }"></div>

    <!--JavaScript-->var viewModel = {
        fruits: ko.observableArray([
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ])
    };

    ko.applyBindings(viewModel);

#####See Also#####
- [Change Options - Knockout](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')