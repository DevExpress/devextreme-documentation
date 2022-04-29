---
id: PdfCell.horizontalAlign
acceptValues: 'left' | 'center' | 'right'
type: String
---
---
##### shortDescription
Specifies the horizontal alignment for the text inside the exported cell.

---
The default alignment of the content depends on the [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType').

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
</table>