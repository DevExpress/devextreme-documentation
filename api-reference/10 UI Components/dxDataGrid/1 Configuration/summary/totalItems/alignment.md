---
id: dxDataGrid.Options.summary.totalItems.alignment
---
---
##### shortDescription
Specifies the alignment of a summary item.

---
The default alignment of a summary item depends on the [type of data](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType') that is held by the column that displays this item. The following table illustrates the dependency between the default alignment and the column data type.

<table class="dx-table">
  <tr>
    <th>dataType</th>
    <th>alignment</th>
  </tr>
  <tr>
    <td><i>'number'</i></td>
    <td><i>'right'</i></td>
  </tr>
  <tr>
    <td><i>'boolean'</i></td>
    <td><i>'center'</i></td>
  </tr>
  <tr>
    <td><i>'string'</i></td>
    <td><i>'left'</i></td>
  </tr>
  <tr>
    <td><i>'date'</i></td>
    <td><i>'left'</i></td>
  </tr>
  <tr>
    <td><i>'datetime'</i></td>
    <td><i>'left'</i></td>
  </tr>
  <tr>
    <td><i>'guid'</i></td>
    <td><i>'left'</i></td>
  </tr>
</table>

#####See Also#####
- [Total Summary - Alignment and Location](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/10%20Total%20Summary/10%20Alignment%20and%20Location.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/#Alignment_and_Location')