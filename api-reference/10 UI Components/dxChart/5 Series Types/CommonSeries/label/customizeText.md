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

<table class="dx-table full-width">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>originalValue</td>
        <td>The raw value of the point.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>The <i>originalValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
    </tr>
    <tr>
        <td>valueText</td>
        <td>The <i>value</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>originalArgument</td>
        <td>The raw argument of the point.</td>
    </tr>
    <tr>
        <td>argument</td>
        <td>The <i>originalArgument</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType">type cast</a>.</td>
    </tr>
    <tr>
        <td>argumentText</td>
        <td>The <i>argument</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#argumentFormat">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>size</td>
        <td>The size value of the point. For <i>bubble</i> series only.</td>
    </tr>
    <tr>
        <td>index</td>
        <td><i>0</i> - if the point is minimum; <i>1</i> - if the point is maximum. For <i>range area</i> and <i>range bar</i> series only.</td>
    </tr>
    <tr>
        <td>point</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/">Point</a> object.</td>
    </tr>
    <tr>
        <td>seriesName</td>
        <td>The name of the series to which the point belongs.</td>
    </tr>
</table>

The following fields are inherent to stacked-like series only.

<table class="dx-table full-width">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>percent</td>
        <td>The percentage value of the point.</td>
    </tr>
    <tr>
        <td>percentText</td>
        <td>The <i>percent</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>total</td>
        <td>The sum of all values in the stack.</td>
    </tr>
    <tr>
        <td>totalText</td>
        <td>The <i>total</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
</table>

The following fields are inherent to financial series ([candlestick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') and [stock](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/')) only.

<table class="dx-table full-width">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>originalOpenValue</td>
        <td>The raw open value of the point.</td>
    </tr>
    <tr>
        <td>openValue</td>
        <td>The <i>originalOpenValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
    </tr>
    <tr>
        <td>openValueText</td>
        <td>The <i>openValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>originalCloseValue</td>
        <td>The raw close value of the point.</td>
    </tr>
    <tr>
        <td>closeValue</td>
        <td>The <i>originalCloseValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
    </tr>
    <tr>
        <td>closeValueText</td>
        <td>The <i>closeValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>originalHighValue</td>
        <td>The raw high value of the point.</td>
    </tr>
    <tr>
        <td>highValue</td>
        <td>The <i>originalHighValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
    </tr>
    <tr>
        <td>highValueText</td>
        <td>The <i>highValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>originalLowValue</td>
        <td>The raw low value of the point.</td>
    </tr>
    <tr>
        <td>lowValue</td>
        <td>The <i>originalLowValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
    </tr>
    <tr>
        <td>lowValueText</td>
        <td>The <i>lowValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
    <tr>
        <td>reductionValue</td>
        <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/reduction/">reduction</a> value.</td>
    </tr>
    <tr>
        <td>reductionValueText</td>
        <td>The <i>reductionValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/label/#format">format</a> and converted to string.</td>
    </tr>
</table>

#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')