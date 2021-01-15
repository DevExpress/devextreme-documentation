In addition to a click on a point or a series, you can handle a click on a legend item. To do this, implement a callback function and assign it to the **onLegendClick** option of the chart's configuration object.

    <!--JavaScript-->var chartOptions = {
        onLegendClick: function(info) {
            //...
        }   
    };

The **onLegendClick** callback function accepts an object that contains information on the legend click event. Fields of this object are described in the **onLegendClick** option description of [Chart](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onLegendClick') and [PieChart](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onLegendClick'). Among these fields, you can find the [series](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/') (in **Chart**) or the argument of the points (in **PieChart**) that correspond to the clicked legend item.

[note] If the **onLegendClick** option is not specified, a click on the legend will invoke the function assigned to the [onSeriesClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesClick') option in **Chart**. To prevent this behavior, assign at least an empty function to the **onLegendClick** field.