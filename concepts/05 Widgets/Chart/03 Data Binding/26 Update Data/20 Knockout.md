[note]Use the technique described here only if your data source is a [JavaScript array](/concepts/05%20Widgets/Chart/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/'). Otherwise, update **Chart** data [through the DataSource instance](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data/01%20DevExtreme%20DataSource.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/#DevExtreme_DataSource').

Declare the array [observable](https://knockoutjs.com/documentation/observableArrays.html) and bind the **dataSource** option to it. Whenever an item is added or removed from this array, the **Chart** will be updated accordingly.

    <!--HTML--><div id="chartContainer" data-bind="dxChart: {
        dataSource: fruits,
        ...
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
- [Change Options - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')