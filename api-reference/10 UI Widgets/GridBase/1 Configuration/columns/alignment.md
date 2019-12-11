---
default: undefined
acceptValues: undefined | 'center' | 'left' | 'right'
type: String
---
---
##### shortDescription
Aligns the content of the column.

---
The default alignment of the content depends on the [type of data](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). 

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th>
    <th>alignment</th>
  </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
</div>

#include common-ref-enum with {
    enum: "`HorizontalAlignment`",
    values: "`Left`, `Center`, and `Right`"
}