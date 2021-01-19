Declare the array <a href="http://knockoutjs.com/documentation/observableArrays.html" target="_blank">observable</a> and bind the **dataSource** property to it. Whenever an item is added or removed from this array, the **Sankey** is updated accordingly.

    <!--HTML--><div id="sankeyContainer" data-bind="dxSankey: {
        dataSource: sankeyData
    }"></div>

    <!--JavaScript-->var viewModel = {
        fruits: ko.observableArray([
            { source: "Brazil", target: "Spain", weight: 4 },
            { source: "Brazil", target: "Portugal", weight: 5 },
            { source: "Brazil", target: "England", weight: 2 },
            { source: "Canada", target: "Portugal", weight: 2 },
            { source: "Canada", target: "England", weight: 1 },
            { source: "Mexico", target: "Portugal", weight: 9 },
            { source: "Mexico", target: "Spain", weight: 5 }
        ])
    };

    ko.applyBindings(viewModel);

#####See Also#####
- [Change Options - Knockout](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')
