---
id: dxChartSeriesTypes.CommonSeries.label.customizeText
type: function(pointInfo)
notUsedInTheme: 
---
---
##### shortDescription
Customizes the text displayed by point labels.

##### param(pointInfo): Object
Information on the series point.

##### return: String
The text for the label to display.

---
This option accepts a function whose parameter exposes the following fields.

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
                <td style="text-align:left">originalValue</td>
                <td>The raw value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">value</td>
                <td>The <i>originalValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">valueText</td>
                <td>The <i>value</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">originalArgument</td>
                <td>The raw argument of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">argument</td>
                <td>The <i>originalArgument</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">argumentText</td>
                <td>The <i>argument</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#argumentFormat">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">size</td>
                <td>The size value of the point. For <i>bubble</i> series only.</td>
            </tr>
            <tr>
                <td style="text-align:left">index</td>
                <td><i>0</i> - if the point is minimum; <i>1</i> - if the point is maximum. For <i>range area</i> and <i>range bar</i> series only.</td>
            </tr>
            <tr>
                <td style="text-align:left">point</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/">Point</a> object.</td>
            </tr>
            <tr>
                <td style="text-align:left">seriesName</td>
                <td>The name of the series to which the point belongs.</td>
            </tr>
        </tbody>
    </table>
</div>

The following fields are inherent to stacked-like series only.

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
                <td style="text-align:left">percent</td>
                <td>The percentage value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">percentText</td>
                <td>The <i>percent</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">total</td>
                <td>The sum of all values in the stack.</td>
            </tr>
            <tr>
                <td style="text-align:left">totalText</td>
                <td>The <i>total</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
        </tbody>
    </table>
</div>

The following fields are inherent to financial series ([candlestick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') and [stock](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/')) only.

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
                <td style="text-align:left">originalOpenValue</td>
                <td>The raw open value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">openValue</td>
                <td>The <i>originalOpenValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">openValueText</td>
                <td>The <i>openValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">originalCloseValue</td>
                <td>The raw close value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">closeValue</td>
                <td>The <i>originalCloseValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">closeValueText</td>
                <td>The <i>closeValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">originalHighValue</td>
                <td>The raw high value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">highValue</td>
                <td>The <i>originalHighValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">highValueText</td>
                <td>The <i>highValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">originalLowValue</td>
                <td>The raw low value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">lowValue</td>
                <td>The <i>originalLowValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">lowValueText</td>
                <td>The <i>lowValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">reductionValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/reduction/">reduction</a> value.</td>
            </tr>
            <tr>
                <td style="text-align:left">reductionValueText</td>
                <td>The <i>reductionValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
            </tr>
        </tbody>
    </table>
</div>

#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Data_Formatting)