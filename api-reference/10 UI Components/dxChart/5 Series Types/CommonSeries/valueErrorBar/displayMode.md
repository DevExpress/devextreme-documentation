---
id: dxChartSeriesTypes.CommonSeries.valueErrorBar.displayMode
acceptValues: 'auto' | 'high' | 'low' | 'none'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies whether error bars must be displayed in full or partially.

---
This option accepts the following values.

<table class="dx-table">
    <tr>
        <th>displayMode</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>"auto"</td>
        <td>Displays error bars in full.</td>
    </tr>
    <tr>
        <td>"low"</td>
        <td>Displays only the lower part of each error bar.</td>
    </tr>
    <tr>
        <td>"high"</td>
        <td>Displays only the higher part of each error bar.</td>
    </tr>
    <tr>
        <td>"none"</td>
        <td>Hides error bars.</td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`ValueErrorBarDisplayMode`",
    values: "`Auto`, `Low`, `High`, and `None`"
}