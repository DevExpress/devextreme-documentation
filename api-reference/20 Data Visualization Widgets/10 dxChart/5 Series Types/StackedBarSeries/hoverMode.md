---
default: 'onlyPoint'
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
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
                <td><i>"onlyPoint"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/stackedbar/onlyPoint.png" /></td>
            </tr>
            <tr>
                <td><i>"allSeriesPoints"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/stackedbar/allSeriesPoints.png" /></td>
            </tr>
            <tr>
                <td><i>"allArgumentPoints"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/stackedbar/allArgumentPoints.png" /></td>
            </tr>
            <tr>
                <td><i>"none"</i></td>
                <td><img src="/Content/images/doc/16_1/ChartJS/hoverMode/series/stackedbar/none.png" /></td>
            </tr>
        </tbody>
    </table>
</div>
<div style="height:5px"></div>

#####See Also#####
- [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/hoverStyle/') - specifies the appearance of series in the hover state.