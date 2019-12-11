---
type: function(pointInfo)
---
---
##### notUsedInTheme

##### shortDescription
Customizes the text displayed by point labels.

##### param(pointInfo): object
Information defining the series point.

##### return: string
The text to be displayed in the point label.

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
                <td>The <i>originalValue</i> after <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">valueText</td>
                <td>The <i>value</i> with an applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineSeries/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">originalArgument</td>
                <td>The raw argument of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">argument</td>
                <td>The <i>originalArgument</i> after <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType">type cast</a>.</td>
            </tr>
            <tr>
                <td style="text-align:left">argumentText</td>
                <td>The <i>argument</i> with an applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineSeries/label/#argumentFormat">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">percent</td>
                <td>The percentage value of the point.</td>
            </tr>
            <tr>
                <td style="text-align:left">percentText</td>
                <td>The <i>percent</i> with an applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineSeries/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">total</td>
                <td>The sum of all values in the stack.</td>
            </tr>
            <tr>
                <td style="text-align:left">totalText</td>
                <td>The <i>total</i> with an applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineSeries/label/#format">format</a> and converted to string.</td>
            </tr>
            <tr>
                <td style="text-align:left">point</td>
                <td>The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/">Point</a> object.</td>
            </tr>
            <tr>
                <td style="text-align:left">seriesName</td>
                <td>The name of the series to which the point belongs.</td>
            </tr>
        </tbody>
    </table>
</div>

[note]All fields listed in this description are also exposed by the **this** object.

#####See Also#####
- [Data Formatting](/Documentation/Guide/Data_Visualization/Common/Data_Formatting/#Data_Formatting) - shows how to apply formatting to various widget elements.