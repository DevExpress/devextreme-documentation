---
id: dxChartSeriesTypes.RangeAreaSeries.selectionMode
acceptValues: 'includePoints' | 'excludePoints' | 'none'
type: String
default: 'includePoints'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a series.

---
[note]Though not provided out of the box, the selection capability can be implemented using the UI component API. Refer to the [onSeriesClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesClick') property description for details.

When a user selects a series, it may react in one of the following ways depending on the value of the **selectionMode** property.

<table class="dx-table">
    <tr>
        <th>selectionMode</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"includePoints"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/rangearea/includePoints.png" /></td>
    </tr>
    <tr>
        <td><i>"excludePoints"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/rangearea/excludePoints.png" /></td>
    </tr>
    <tr>
        <td><i>"none"</i></td>
        <td><img src="/images/ChartJS/hoverMode/series/rangearea/none.png" /></td>
    </tr>
</table>

[note]Points in range area series are hidden by default. To make them visible, assign **true** to the **point**.**visible** property.

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionMode`",
    values: "`IncludePoints`, `ExcludePoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a range area series.

#####See Also#####
- [seriesSelectionMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/seriesSelectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#seriesSelectionMode') - specifies whether only one or several series can stay selected.
- **series**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/selectionStyle/') - specifies the appearance of a series in the selected state.
- **series**.**point**.[selectionMode](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/selectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/point/#selectionMode') - specifies the selection mode of series points.
- [seriesSelectionChanged](/api-reference/10%20UI%20Components/dxChart/4%20Events/seriesSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#seriesSelectionChanged') - an event that fires after the selection state of a series has been changed.