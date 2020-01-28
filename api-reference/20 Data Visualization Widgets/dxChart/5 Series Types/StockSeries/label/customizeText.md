---
id: dxChartSeriesTypes.StockSeries.label.customizeText
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
                <td style="text-align:left">originalOpenValue</td>
                <td>The raw open value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">openValue</td>
                <td>The <i>originalOpenValue</i> after <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">openValueText</td>
                <td>The <i>openValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/#format">format</a> and converted to string.</td>
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
                <td>The <i>closeValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/#format">format</a> and converted to string.</td>
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
                <td>The <i>highValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/#format">format</a> and converted to string.</td>
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
                <td>The <i>lowValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">reductionValue</td>
                <td>The <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/reduction/">reduction</a> value.</td>
            </tr>
            <tr>
                <td style="text-align:left">reductionValueText</td>
                <td>The <i>reductionValue</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/#format">format</a> and converted to string.</td>
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
                <td>The <i>argument</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/#argumentFormat">format</a> and converted to string.</td>
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

#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')