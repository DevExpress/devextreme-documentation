---
id: dxChartSeriesTypes.CommonSeries.valueErrorBar.type
acceptValues: 'fixed' | 'percent' | 'stdDeviation' | 'stdError' | 'variance'
type: String
default: undefined
---
---
##### shortDescription
Specifies how error bar values must be calculated.

---
Depending on the type of errors you need to visualize, use error bars of one of the following types.

<table class="dx-table">
    <tr>
        <th>type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>"percent"</td>
        <td>Defines the <a href="http://en.wikipedia.org/wiki/Confidence_interval">confidential interval</a> in percentages. Error bar values are calculated as a percentage of the series point value. The percentage value is determined by the <b>value</b> option. The high and low error bar values are drawn symmetrically up and down from the series point.</td>
    </tr>
    <tr>
        <td>"stdError"</td>
        <td>For information on the standard error, refer to the <a href="http://en.wikipedia.org/wiki/Standard_error">article</a> in Wikipedia.</td>
    </tr>
    <tr>
        <td>"stdDeviation"</td>
        <td>For information on the standard deviation, refer to the <a href="http://en.wikipedia.org/wiki/Standard_deviation">article</a> in Wikipedia.</td>
    </tr>
    <tr>
        <td>"variance"</td>
        <td>For information on variance, refer to the <a href="http://en.wikipedia.org/wiki/Variance">article</a> in Wikipedia.</td>
    </tr>
    <tr>
        <td>"fixed"</td>
        <td>Defines the confidential interval in constant values. Error bar values are determined by the <b>value</b> option. The high and low error bar values are drawn symmetrically up and down from the series point.</td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`ValueErrorBarType`",
    values: "`Percent`, `StdError`, `StdDeviation`, `Variance`, and `Fixed`"
}