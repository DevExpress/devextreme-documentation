---
##### merge

---
#include dataviz-customize-tooltip-return

You can access the following fields of the **Sparkline**:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalFirstValue</code></td>
        <td>The first value of a sparkline as it is specified in a <a href="{basewidgetpath}/Configuration/#dataSource">dataSource</a></td>
    </tr>
    <tr>
        <td><code>firstValue</code></td>
        <td>The first value of a sparkline with applied formatting if the <a href="{basewidgetpath}/Configuration/tooltip/#format">format</a> option is specified.</td>
    </tr><tr>
        <td><code>originalLastValue</code></td>
        <td>The last value of a sparkline as it is specified in a data source.</td>
    </tr>
    <tr>
        <td><code>lastValue</code></td>
        <td>The last value of a sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
    <tr>
        <td><code>originalMinValue</code></td>
        <td>The minimum value of a sparkline as it is specified in a data source.</td>
    </tr>
    <tr>
        <td><code>minValue</code></td>
        <td>The minimum value of a sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
    <tr>
        <td><code>originalMaxValue</code></td>
        <td>The maximum value of a sparkline as it is specified in a data source.</td>
    </tr>
    <tr>
        <td><code>maxValue</code></td>
        <td>The maximum value of a sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
</table>

The following fields are available for a sparkline of the "winloss" [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') only:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalThresholdValue</code></td>    
        <td>The threshold value of a winloss sparkline as it is assigned to the <a href="{basewidgetpath}/Configuration/#winlossThreshold">winlossThreshold</a> option.</td>
    </tr>
    <tr>
        <td><code>thresholdValue</code></td>     
        <td>The threshold value of a winloss sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
</table>

To access the fields above, use the function's parameter and the **this** object.

To get general information on data formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') topic.
