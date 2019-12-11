---
default: undefined
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'between'
type: string
---
---
##### shortDescription
Specifies the default filter operation of a column.

---
When a column can be used for filtering grid records using the [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/') (i.e., when the [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option is *true*), you can specify a filter that should be applied to the column. For this purpose, assign the required filter to the **selectedFilterOperation** option. By default, the selected filter operation is chosen on the base of the column's data type. The following table represents default filter operations by data types.

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