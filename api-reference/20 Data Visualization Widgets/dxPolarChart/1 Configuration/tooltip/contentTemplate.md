You can access the following **pointInfo** object fields:

<table class="dx-table full-width">
    <tr>
        <th>Field name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>originalValue</code></td>
        <td>The value of the represented point as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>value</code></td>
        <td>The value of the represented point. Differs from the <b>originalValue</b> when the axis <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueType">value type</a> is specified explicitly. In this instance, the <b>value</b> field contains a value of the specified type.</td>
    </tr>
    <tr>
        <td><code>valueText</code></td>
        <td>The value of the point being hovered over with applied formatting if the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#format">format</a> property is specified</td>
    </tr>
    <tr>
        <td><code>originalArgument</code></td>
        <td>The argument value of the represented point as it is set in the data source.</td>
    </tr>
    <tr>
        <td><code>argument</code></td>
        <td>The argument value of the represented point. Differs from the <b>originalArgument</b> when the axis <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#argumentType">argument type</a> differs from the argument type in the data source. In this instance, <b>argument</b> has a similar type as the argument axis.</td>
    </tr>
    <tr>
        <td><code>argumentText</code></td>
        <td>The argument value of the represented point with applied formatting if the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#argumentFormat">argumentFormat</a> option is specified.</td>
    </tr>
    <tr>
        <td><code>seriesName</code></td>
        <td>The series name of the point being hovered over.</td>
    </tr>
    <tr>
        <td><code>point</code></td>
        <td>Information on the point being hovered over. For more information about the field and the point object's methods, refer to the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Point/">Point</a> topic.</td>
    </tr>
    <tr>
        <td><code>points</code></td>
        <td>An array of points with the same argument as the point being hovered over. This field is accessible when the <a href="/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#shared">shared</a> option of the <b>tooltip</b> is set to <b>true</b>.
    </tr>
</table>
