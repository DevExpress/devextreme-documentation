Menu widgets, like all other collection container widgets, include a dataSource property. This property takes a DataSource instance, an object that provides the required data as an array for the Menu widget from any storage (from a local one to a web service). This is a stateful object that stores sorting, grouping, and filtering options, as well as information on how to transform data; these options are applied to the data array every time data is loaded. DataSource objects are provided for simple scenarios such as data stored locally, or more complex situations like data provided by a web service.

    <!--JavaScript-->var menuItems = [
        {
            text: "Item1",
            icon: "icon1",
            items: [
                { text: "Item11" },
                { text: "Item12" },
                { text: "Item13" }
            ]
        },
        {
            text: "Item2",
            icon: "icon2",
            items: [
                { text: "Item21" },
                { text: "Item22" },
                { text: "Item23" }
            ]
        }
    ];

    var menuOptions = { dataSource: menuItems }

For detailed information on working with the Data Source object, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') and [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') documentation sections.