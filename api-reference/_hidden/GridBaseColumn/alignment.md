---
id: GridBaseColumn.alignment
acceptValues: undefined | 'center' | 'left' | 'right'
type: String
default: undefined
---
---
##### shortDescription
Aligns the content of the column.

---
The default alignment of the content depends on the [type of data](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). 

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

#include common-ref-enum with {
    enum: "`HorizontalAlignment`",
    values: "`Left`, `Center`, and `Right`"
}