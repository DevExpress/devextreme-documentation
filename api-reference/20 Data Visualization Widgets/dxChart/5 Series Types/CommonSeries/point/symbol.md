---
id: dxChartSeriesTypes.CommonSeries.point.symbol
acceptValues: 'circle' | 'cross' | 'polygon' | 'square' | 'triangleDown' | 'triangleUp'
type: String
default: 'circle'
---
---
##### shortDescription
Specifies which symbol should represent series points in scatter, line- and area-like series.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
The following symbols are available.

<table class="dx-table">
    <tr>
        <th>symbol</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"circle"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/point-symbols/circle.png" /></td>
    </tr>
    <tr>
        <td><i>"square"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/point-symbols/square.png" /></td>
    </tr>
    <tr>
        <td><i>"polygon"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/point-symbols/polygon.png" /></td>
    </tr>
    <tr>
        <td><i>"triangleDown"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/point-symbols/triangleDown.png" /></td>
    </tr>
    <tr>
        <td><i>"triangleUp"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/point-symbols/triangleUp.png" /></td>
    </tr>
    <tr>
        <td><i>"cross"</i></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/point-symbols/cross.png" /></td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`PointSymbol`",
    values: "`Circle`, `Square`, `Polygon`, `TriangleDown`, `TriangleUp`, and `Cross`"
}