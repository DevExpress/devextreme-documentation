---
id: dxChart.Options.commonAxisSettings.label.position
acceptValues: 'inside' | 'outside' | 'bottom' | 'left' | 'right' | 'top'
type: String
default: 'outside'
---
---
##### shortDescription
Specifies the position of labels relative to the chart or its axis.

---
You can specify the following positions for labels on the [valueAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/):

<table class="dx-table">
    <tr>
        <th>Value</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>'inside', 'right'</td>
        <td><img src="/images/ChartJS/value-axis-label-right.png" /></td>
    </tr>
    <tr>
        <td>'outside', 'left'</td>
        <td><img src="/images/ChartJS/value-axis-label-left.png" /></td>
    </tr>
</table>

The following positions are available for labels on the [argumentAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/):

<table class="dx-table">
    <tr>
        <th>Value</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>'inside', 'top'</td>
        <td><img src="/images/ChartJS/argument-axis-label-top.png" /></td>
    </tr>
    <tr>
        <td>'outside', 'bottom'</td>
        <td><img src="/images/ChartJS/argument-axis-label-bottom.png" /></td>
    </tr>
</table>

The *"inside"* and *"outside"* values allow you to keep the same label's position when the chart is [rotated](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#rotated).
