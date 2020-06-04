---
##### merge

---
#include dataviz-customize-tooltip-return

This function's parameter has the following fields:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>value</code></td>
        <td>The value of the currently hovered point.</td>
    </tr>
    <tr>
        <td><code>valueText</code></td>
        <td>The value of the point being hovered over with formatting applied if the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#format">format</a> property is specified.</td>
    </tr>
    <tr>
        <td><code>argument</code></td>
        <td>The argument value of the point being hovered over.</td>
    </tr>
    <tr>
        <td><code>argumentText</code></td>
        <td>The argument value of the point being hovered over with formatting applied if the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#argumentFormat">argumentFormat</a> option is specified.</td>
    </tr>
    <tr>
        <td><code>percent</code></td>
        <td>The percent value of the point being hovered over.</td>
    </tr>
    <tr>
        <td><code>percentText</code></td>
        <td>The percent value of the point being hovered over with <a href="/Documentation/ApiReference/Common/Object_Structures/format/#precision">percent precision</a> (optional) applied.</td>
    </tr>
    <tr>
        <td><code>point</code></td>
        <td>Information on the point being hovered over. To learn more about the field and methods of the point object, refer to the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/">Point</a> topic.</td>
    </tr>
</table>

#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/TooltipHtmlSupport/"
}

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')