---
default: undefined
acceptValues: 'left' | 'center' | 'right'
type: string
---
---
##### shortDescription
Specifies the alignment of a summary item.

---
The default alignment of a summary item depends on the [type of data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') that is held by the column that displays this item. The following table illustrates the dependency between the default alignment and the column data type.

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
    <td><i>'guid'</i></td>
    <td><i>'left'</i></td>
  </tr>
  </tbody>
</table>
</div>