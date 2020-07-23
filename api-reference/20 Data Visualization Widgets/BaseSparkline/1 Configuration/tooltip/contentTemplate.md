---
id: BaseSparkline.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for tooltips.

##### param(pointsInfo): Object
Information on the points that belong to the series that is pressed or hovered over.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---

You can access the following **pointsInfo** fields:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalFirstValue</code></td>
        <td>The first value of a sparkline specified in the <a href="{basewidgetpath}/Configuration/#dataSource">dataSource</a>.</td>
    </tr>
    <tr>
        <td><code>firstValue</code></td>
        <td>The first value of a sparkline with formatting applied if the <a href="{basewidgetpath}/Configuration/tooltip/#format">format</a> option is specified.</td>
    </tr>
    <tr>
        <td><code>originalLastValue</code></td>
        <td>The last value of a sparkline as it is specified in the <b>dataSource</b>.</td>
    </tr>
    <tr>
        <td><code>lastValue</code></td>
        <td>The last value of a sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
    <tr>
        <td><code>originalMinValue</code></td>
        <td>The minimum value of a sparkline as it is specified in the <b>dataSource</b>.</td>
    </tr>
    <tr>
        <td><code>minValue</code></td>
        <td>The minimum value of a sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
    <tr>
        <td><code>originalMaxValue</code></td>
        <td>The maximum value of a sparkline as it is specified in the <b>dataSource</b>.</td>
    </tr>
    <tr>
        <td><code>maxValue</code></td>
        <td>The maximum value of a sparkline with applied formatting if the <b>format</b> option is specified.</td>
    </tr>
</table>

The following fields are available for a sparkline of the *"winloss"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '{basewidgetpath}/Configuration/#type') only.

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
