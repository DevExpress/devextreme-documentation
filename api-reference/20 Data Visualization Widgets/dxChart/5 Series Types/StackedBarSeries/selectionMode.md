---
id: dxChartSeriesTypes.StackedBarSeries.selectionMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a bar.

---
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') option description for details.

When a user selects a bar, its series may react in one of the following ways depending on the value of the **selectionMode** option.

<table class="dx-table">
    <tr>
        <th>selectionMode</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"onlyPoint"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/hoverMode/series/stackedbar/onlyPoint.png" /></td>
    </tr>
    <tr>
        <td><i>"allSeriesPoints"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/hoverMode/series/stackedbar/allSeriesPoints.png" /></td>
    </tr>
    <tr>
        <td><i>"allArgumentPoints"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/hoverMode/series/stackedbar/allArgumentPoints.png" /></td>
    </tr>
    <tr>
        <td><i>"none"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/hoverMode/series/stackedbar/none.png" /></td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a stacked bar series.

#####See Also#####
- [pointSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode') - specifies whether only one or several bars can stay selected.
- **series**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/selectionStyle/') - specifies the appearance of bars in the selected state.
- [pointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged') - an event that fires after the selection state of a bar has been changed.