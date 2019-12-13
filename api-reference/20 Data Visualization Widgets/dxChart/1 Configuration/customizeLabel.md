---
##### merge

---
All point labels in a chart are identical by default, but you can specify a unique appearance for individual labels using the **customizeLabel** function. This function should return an object with options that will be changed for a certain label. See the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label '{basewidgetpath}/Configuration/series/label') object for information about all options available for changing.

The **customizeLabel** function accepts an object providing information about the series point that the label belongs to. This object contains the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">argument</td>
                <td>The argument of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">value</td>
                <td>The value of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">tag</td>
                <td>The <a href="{basewidgetpath}/Configuration/series/#tagField">tag</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">series</td>
                <td>The <a href="{basewidgetpath}/Chart_Elements/Series/">series</a> that includes the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">index</td>
                <td>The index of the series point in the points array.</td>
            </tr>
        </tbody>
    </table>
</div>

In the [*range bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/') and [*range area*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/') series, the **value** field is replaced by the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">rangeValue1</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue1Field">first value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">rangeValue2</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#rangeValue2Field">second value</a> of the series point.</td>
            </tr>
        </tbody>
    </table>
</div>

In the financial series ([*candlestick*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') and [*stock*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/')), the **value** field is replaced by the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">openValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#openValueField">open value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">closeValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#closeValueField">close value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">lowValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#lowValueField">low value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">highValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#highValueField">high value</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">reductionValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/reduction/">reduction</a> value of the series point.</td>
            </tr>
        </tbody>
    </table>
</div>

[note]All fields listed in this description are also exposed by the **this** object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/"
}