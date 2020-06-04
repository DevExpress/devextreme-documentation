---
id: BaseChart.Options.customizePoint
type: function(pointInfo)
---
---
##### shortDescription
Customizes the appearance of an individual series point.

##### param(pointInfo): Object
Information on the series point.

##### return: dxChartSeriesTypes_CommonSeries_point
The point's [configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point '{basewidgetpath}/Configuration/series/point/').

---
By default, all series points in a chart are identical, but you can specify a unique appearance for individual points using the **customizePoint** function. This function should return an object with options that will be changed for a certain point. See the [point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point '{basewidgetpath}/Configuration/series/point') object for information about all options available for changing.

[note]The **hoverMode** and **selectionMode** options cannot be changed using the **customizePoint** function, because they do not have anything to do with the appearance of series points.

The **customizePoint** function accepts an object providing information about the series point. This object contains the following fields.

<table class="dx-table full-width">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>argument</td>
        <td>The argument of the series point.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>The value of the series point.</td>
    </tr>
    <tr>
        <td>tag</td>
        <td>The <a href="{basewidgetpath}/Configuration/series/#tagField">tag</a> of the series point.</td>
    </tr>
    <tr>
        <td>seriesName</td>
        <td>The <a href="{basewidgetpath}/Configuration/series/#name">name</a> of the series that includes the series point.</td>
    </tr>
    <tr>
        <td>index</td>
        <td>The index of the series point in the points array.</td>
    </tr>
    <tr>
        <td>data</td>
        <td>An object that contains the <a href="{basewidgetpath}/Chart_Elements/Point/Fields/#data">series point data</a>.</td>
    </tr>
</table>

In the [*range bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/') and [*range area*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/') series, the **value** field is replaced by the following fields.

<table class="dx-table full-width">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>rangeValue1</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue1Field">first value</a> of the series point.</td>
    </tr>
    <tr>
        <td>rangeValue2</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue2Field">second value</a> of the series point.</td>
    </tr>
</table>

In the financial series ([*candlestick*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') and [*stock*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/')), the **value** field is replaced by the following fields.

<table class="dx-table full-width">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>openValue</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#openValueField">open value</a> of the series point.</td>
    </tr>
    <tr>
        <td>closeValue</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#closeValueField">close value</a> of the series point.</td>
    </tr>
    <tr>
        <td>lowValue</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#lowValueField">low value</a> of the series point.</td>
    </tr>
    <tr>
        <td>highValue</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#highValueField">high value</a> of the series point.</td>
    </tr>
    <tr>
        <td>reductionValue</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/reduction/">reduction</a> value of the series point.</td>
    </tr>
</table>

#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointImage/"
}