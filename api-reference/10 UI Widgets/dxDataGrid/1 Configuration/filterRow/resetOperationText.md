---
default: 'Reset'
type: String
---
---
##### shortDescription
Specifies text for the reset operation in a filter list.

---
The reset operation restores the default filter operation for a column. This operation depends on the type of data held by this column. The following table represents default filter operations by data types.

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th>
    <th>Default filter operation</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>'string'</td>
    <td>'contains'</td>
  </tr>
  <tr>
    <td>'number'</td>
    <td>'='</td>
  </tr>
  <tr>
    <td>'date'</td>
    <td>'='</td>
  </tr>
  <tr>
    <td>'guid'</td>
    <td>'='</td>
  </tr>
  </tbody>
</table>
</div>

Reset is available from the drop-down list of available filters in a filter row cell. You can change the descriptive text that represents the reset operation in this list by specifying the **resetOperationText** option.