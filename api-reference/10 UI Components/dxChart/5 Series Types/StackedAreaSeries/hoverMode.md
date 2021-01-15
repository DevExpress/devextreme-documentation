---
id: dxChartSeriesTypes.StackedAreaSeries.hoverMode
acceptValues: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'
type: String
default: 'nearestPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user points to a series.

---
When a user points to a series, it may react in one of the following ways depending on the value of the **hoverMode** property.

<table class="dx-table">
    <tr>
        <th>hoverMode</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"nearestPoint"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/stackedarea/nearestPoint.png" /></td>
    </tr>
    <tr>
        <td><i>"includePoints"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/stackedarea/includePoints.png" /></td>
    </tr>
    <tr>
        <td><i>"excludePoints"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/stackedarea/excludePoints.png" /></td>
    </tr>
    <tr>
        <td><i>"none"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/stackedarea/none.png" /></td>
    </tr>
</table>

[note]Points in stacked area series are hidden by default. To make them visible, assign **true** to the **point**.**visible** property.

#include common-ref-enum with {
    enum: "`ChartSeriesHoverMode`",
    values: "`NearestPoint`, `IncludePoints`, `ExcludePoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a stacked area series.

#####See Also#####
- [hoverStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedAreaSeries/hoverStyle/') - specifies the appearance of series in the hover state.
- **point**.[hoverMode](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/hoverMode.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedAreaSeries/point/#hoverMode') - specifies the hover mode of series points.