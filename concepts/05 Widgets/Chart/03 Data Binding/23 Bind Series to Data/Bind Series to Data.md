This article describes two ways of binding series to data. To decide which way to use, check whether or not [names](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name') for series are provided by a data source field. If so, you need to [use a series template](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data/10%20Using%20a%20Series%20Template.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/#Using_a_Series_Template'). Otherwise, you can bind series to data [directly](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data/05%20Directly.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/#Directly'). For example, assume that you have the following data source.

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        { fruit: "Apples", year: 2015, produced: 82 },
        { fruit: "Apples", year: 2016, produced: 90 },
        { fruit: "Oranges", year: 2014, produced: 72 },
        { fruit: "Oranges", year: 2015, produced: 70 },
        { fruit: "Oranges", year: 2016, produced: 76 }
    ];

Depending on the configuration, this data source can produce either two series, named *"Apples"* and *"Oranges"*, or three series: *"2014"*, *"2015"* and *"2016"*, but in both these cases, these names are provided by a data source field: `fruit` or `year` respectively. This is the case when you need to use a series template. Consider another data source.

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

In this case, you can have up to three series bound to the `year2014`, `year2015` and `year2016` fields respectively, but note that there is no data field that provides names for them. Instead, you need to specify the names using the [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name') option. This is the case when you can bind series to data directly.

[tags]chart, line, bar, area, financial series, range, bubble, argumentField, valueField, series template
