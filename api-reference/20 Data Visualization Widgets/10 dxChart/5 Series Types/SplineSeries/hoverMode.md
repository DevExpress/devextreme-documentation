---
default: 'nearestPoint'
acceptValues: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'
type: string
---
---
##### shortDescription
Specifies series elements to be highlighted when a user points to a series.

---
When a user points to a series, it may react in one of the following ways depending on the value of the **hoverMode** option.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>hoverMode</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i>"nearestPoint"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/spline/nearestPoint.png" /></td>
            </tr>
            <tr>
                <td><i>"includePoints"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/spline/includePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"excludePoints"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/spline/excludePoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/spline/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>
<div style="height:5px"></div>

#####See Also#####
- [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/SplineSeries/hoverStyle/') - specifies the appearance of series in the hover state.
- **point** | [hoverMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/point/hoverMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/SplineSeries/point/#hoverMode') - specifies the hover mode of series points.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureshovermode/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>