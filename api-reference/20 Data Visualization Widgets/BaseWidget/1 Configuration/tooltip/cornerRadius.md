---
id: BaseWidget.Options.tooltip.cornerRadius
type: Number
default: 0, 4 (Material)
---
---
##### shortDescription
Makes all the tooltip's corners rounded.

---
The following table demonstrates how the corner's curvature depends on the **cornerRadius** value:

<div class="simple-table">
    <table id="corner-radius">
        <tr>
          <th>cornerRadius</th>
          <th>Result</th>
        </tr>
        <tr>
          <td><code>cornerRadius: 0</code></td>
          <td><img src="/Content/images/doc/19_2/ChartJS/annotations/corner-radius-0.png" alt="DevExtreme Chart: tooltip with cornerRadius set to 0" /></td>
        </tr>
        <tr>
          <td><code>cornerRadius: 15</code></td>
          <td><img src="/Content/images/doc/19_2/ChartJS/annotations/corner-radius-15.png" alt="DevExtreme Chart: tooltip with cornerRadius set to 15" /></td>
        </tr>
        <tr>
          <td><code>cornerRadius: 35</code></td>
          <td><img src="/Content/images/doc/19_2/ChartJS/annotations/corner-radius-35.png" alt="DevExtreme Chart: tooltip with cornerRadius set to 35" /></td>
        </tr>
    </table>
</div>

<style>
    #corner-radius {
        text-align: center;
    }
    #corner-radius code {
        font-style: normal;
    }
    #corner-radius td, th {
        background-color: white;
        border-right: 2px solid #ededed;
        border-bottom: 2px solid #ededed;
    }
    #corner-radius th {
        border-right: 2px solid #ededed;
    }
    #corner-radius tr:last-child > td {
        border-bottom: none;
    }
    #corner-radius td:last-child {
        border-right: none;
    }
</style>