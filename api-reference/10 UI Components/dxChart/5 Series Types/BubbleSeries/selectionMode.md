---
id: dxChartSeriesTypes.BubbleSeries.selectionMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a bubble.

---
[note]Though not provided out of the box, the selection capability can be implemented using the UI component API. Refer to the [onPointClick](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') option description for details.

When a user selects a bubble, its series may react in one of the following ways depending on the value of the **selectionMode** option.

<table class="dx-table">
    <tr>
        <th>selectionMode</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"onlyPoint"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/bubble/onlyPoint.png" /></td>
    </tr>
    <tr>
        <td><i>"allSeriesPoints"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/bubble/allSeriesPoints.png" /></td>
    </tr>
    <tr>
        <td><i>"allArgumentPoints"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/bubble/allArgumentPoints.png" /></td>
    </tr>
    <tr>
        <td><i>"none"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/bubble/none.png" /></td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a bubble series.

#####See Also#####
- [pointSelectionMode](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#pointSelectionMode') - specifies whether only one or several bubbles can stay selected.
- **series**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BubbleSeries/selectionStyle/') - specifies the appearance of bubbles in the selected state.
- [pointSelectionChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointSelectionChanged') - an event that fires after the selection state of a bubble has been changed.