---
id: BaseChart.Options.customizeLabel
type: function(pointInfo)
---
---
##### shortDescription
Customizes the appearance of an individual point label.

##### param(pointInfo): Object
Information on the series point.

##### return: dxChartSeriesTypes_CommonSeries_label
The label's [configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label '{basewidgetpath}/Configuration/commonSeriesSettings/label/').

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