---
default: undefined
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'between'
type: array
---
---
##### shortDescription
Specifies the set of available filter operations.

---
When a column can be used for filtering grid records using the [filter row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/') (i.e., when the [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option is *true*), you can specify filters that can be applied to this column. For this purpose, assign an array of filters chosen from the pool of accepted values to the **filterOperations** option.

The following table displays available filters by the [data type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType'). The same filters are assigned to the columns of a specific data type by default.

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th>
    <th>filterOperations</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>'string'</td>
    <td>[ 'contains', 'notcontains', 'startswith', 'endswith', '=', '<>' ]</td>
  </tr>
  <tr>
    <td>'numeric'</td>
    <td>[ '=', '<>', '<', '>', '<=', '>=', 'between' ]</td>
  </tr>
  <tr>
    <td>'date'</td>
    <td>[ '=', '<>', '<', '>', '<=', '>=', 'between' ]</td>
  </tr>
  </tbody>
</table>
</div>

To change an applied filter at runtime, a user must click a magnifying glass icon in the corresponding cell of a [filter row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row').

[note]The **filterOperations** option also accepts an empty array. In this case, the selected filter operation is *"="* for all data types, and an end user cannot change it.