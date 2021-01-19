---
id: dxChart.Options.valueAxis.position
acceptValues: 'bottom' | 'left' | 'right' | 'top'
type: String
default: 'left'
---
---
##### shortDescription
Relocates the value axis.

---
Depending on the value of the [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') option, **position** accepts different values.

<table class="dx-table">
    <tr>
        <th>rotated</th>
        <th>position</th>
    </tr>
    <tr>
        <td><i>false</i></td>
        <td><i>"left"</i> or <i>"right"</i></td>
    </tr>
    <tr>
        <td><i>true</i></td>
        <td><i>"bottom"</i> or <i>"top"</i></td>
    </tr>
</table>

If the predefined positions do not meet your requirements, use the [customPosition](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/customPosition.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#customPosition') option.