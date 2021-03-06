You can handle a series click. To do this, implement a callback function and assign it to the chart's **onSeriesClick** property.

    <!--JavaScript-->var chartOptions = {
        onSeriesClick: function (info) {
            //...
        }
    };

The **onSeriesClick** callback function accepts an object that contains information on the click event. Fields of this object are described in the [onSeriesClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesClick') property description. Among these fields, you can find the clicked series. An object that represents this series is described in the [Series](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/') section.

[note]There are series that consist of points only, e.g., the _bar-like_ and _candleStick_ series of the Chart UI component, and the _pie_ and _doughnut_ series of the PieChart UI component. The **onSeriesClick** function is not called when clicking a point (a bar or a slice) in these types of series. To handle click for these series, implement the **onPointClick** callback function and access the series of the clicked point (see the [Point Click](/concepts/05%20UI%20Components/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/2%20Click%20Handling/2%20Point%20Click.md '/Documentation/Guide/UI_Components/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling/#Point_Click') topic).
