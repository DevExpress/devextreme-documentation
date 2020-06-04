---
##### merge

---
By default, all the points of a pie are displayed identically. But you can specify different appearance for certain points using the **customizePoint** field. Assign a function to this field. This function should return an object with options that should be changed for a certain point. The following pie options can be changed.

* [border](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/border/')
* [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#color')
* [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/hoverStyle/')
* [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/selectionStyle/')

When implementing a callback function for this option, use the argument or value of a point. They can be accessed using the following fields of the function's parameter.

<table class="dx-table">
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>argument</td>
        <td>The argument of the series point.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>The value of the series point.</td>
    </tr>
    <tr>
        <td>tag</td>
        <td>The <a href="{basewidgetpath}/Configuration/series/#tagField">tag</a> of the series point.</td>
    </tr>
    <tr>
        <td>index</td>
        <td>The index of the series point in the points array.</td>
    </tr>
    <tr>
        <td>data</td>
        <td>An object that contains the <a href="{basewidgetpath}/Chart_Elements/Point/Fields/#data">series point data</a>.</td>
    </tr>
</table>

In addition, these values can be accessed using the **this** object.