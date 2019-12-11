---
default: true
type: boolean
---
---
##### shortDescription
Rounds off date-time values to the nearest tick interval. Applies only to the axes of the *"continuous"* type containing date-time values.

---
This option impacts tick arrangement on axes that contain date-time values. The following table illustrates exactly how ticks will be arranged depending on the value of this option.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Tick Interval</th>
      <th>Start Axis Value</th>
      <th>setTicksAtUnitBeginning: <i>true</i></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>2 hours</td>
      <td>11h:35min:25s:10ms</td>
      <td>13h:00min:00s:00ms<br/>15h:00min:00s:00ms<br/>17h:00min:00s:00ms<br/>...</td>
    </tr>
    <tr>
      <td>2 days</td>
      <td>6d:11h:35min</td>
      <td>8d:00h:00min<br/>10d:00h:00min<br/>12d:00h:00min<br/>...</td>
    </tr>
    <tr>
      <td>2 months</td>
      <td>March:13d</td>
      <td>May:1d<br/>July:1d<br/>September:1d<br/>...</td>
    </tr>
    </tbody>
  </table>
</div>
<div style="height:5px"></div>
#####See Also#####
- **argumentAxis** | [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/') - sets a tick interval for the argument axis.
- **valueAxis** | [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/valueAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tickInterval/') - sets a tick interval for the value axis.