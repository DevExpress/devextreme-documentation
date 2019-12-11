---
default: 'circle'
acceptValues: 'circle' | 'cross' | 'polygon' | 'square' | 'triangleDown' | 'triangleUp'
type: String
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md,..\..\StackedLineSeries\StackedLineSeries.md,..\..\FullStackedLineSeries\FullStackedLineSeries.md,..\..\StackedSplineSeries\StackedSplineSeries.md,..\..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\..\SplineSeries\SplineSeries.md,..\..\StepLineSeries\StepLineSeries.md,..\..\AreaSeries\AreaSeries.md,..\..\StackedAreaSeries\StackedAreaSeries.md,..\..\FullStackedAreaSeries\FullStackedAreaSeries.md,..\..\StackedSplineAreaSeries\StackedSplineAreaSeries.md,..\..\FullStackedSplineAreaSeries\FullStackedSplineAreaSeries.md,..\..\SplineAreaSeries\SplineAreaSeries.md,..\..\StepAreaSeries\StepAreaSeries.md,..\..\RangeAreaSeries\RangeAreaSeries.md,..\..\ScatterSeries\ScatterSeries.md

##### shortDescription
Specifies which symbol should represent series points in scatter, line- and area-like series.

---
The following symbols are available.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>symbol</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i>"circle"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/point-symbols/circle.png" /></td>
            </tr>
            <tr>
                <td><i>"square"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/point-symbols/square.png" /></td>
            </tr>
            <tr>
                <td><i>"polygon"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/point-symbols/polygon.png" /></td>
            </tr>
            <tr>
                <td><i>"triangleDown"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/point-symbols/triangleDown.png" /></td>
            </tr>
            <tr>
                <td><i>"triangleUp"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/point-symbols/triangleUp.png" /></td>
            </tr>
            <tr>
                <td><i>"cross"</i></td>
                <td><img src="/Content/images/doc/17_2/ChartJS/point-symbols/cross.png" /></td>
            </tr>
        </tbody>
    </table>
</div>

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PointSymbol` enum. This enum accepts the following values: `Circle`, `Square`, `Polygon`, `TriangleDown`, `TriangleUp` and `Cross`.