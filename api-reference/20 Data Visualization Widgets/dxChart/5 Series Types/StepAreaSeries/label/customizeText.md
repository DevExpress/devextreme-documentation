---
id: dxChartSeriesTypes.StepAreaSeries.label.customizeText
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
                <td>The <i>value</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/label/#format">format</a> and converted to string.</td>
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
                <td>The <i>argument</i> with an applied <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/label/#argumentFormat">format</a> and converted to string.</td>
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
- [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Data_Formatting)