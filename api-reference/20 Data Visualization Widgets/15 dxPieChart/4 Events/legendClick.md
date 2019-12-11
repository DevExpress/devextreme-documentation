---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when an item on the chart legend is clicked.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): String|Number
The argument of the point(s) that corresponds to the clicked legend item.

---
To access the [point(s)](/api-reference/20%20Data%20Visualization%20Widgets/15%20dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') that corresponds to the clicked legend item, get the series first using the [getAllSeries()](/api-reference/20%20Data%20Visualization%20Widgets/15%20dxPieChart/3%20Methods/getAllSeries().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getAllSeries'), [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/15%20dxPieChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByNameseriesName') or [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/15%20dxPieChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByPosseriesIndex') method. Then call the [getPointsByArg(pointArg)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointsByArg(pointArg).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg') method of the series.

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("instance").on(
        "legendClick": function (e) {
            var points = getAllSeries()[0].getPointsByArg(e.target);
            // ...
        }
    );

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')