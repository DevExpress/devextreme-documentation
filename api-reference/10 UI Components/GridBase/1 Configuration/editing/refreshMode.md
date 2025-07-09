---
id: GridBase.Options.editing.refreshMode
---
---
##### shortDescription
Specifies operations that are performed after saving changes.

---
The following table lists operations that are performed after changes in different modes are saved:

<table class="dx-table">
 <tr>
    <th>Mode</th>
    <th>Data <a href="/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload">reloading</a> </th>
    <th>Data processing operations<sup>1</sup></th>
    <th>UI component repaint<sup>2</sup></th>
 </tr>
  <tr>
    <td>full</td>
    <td>+</td>
    <td>+</td>
    <td>+</td>
 </tr>
 <tr>
    <td>reshape</td>
    <td>- <sup>3</sup></td>
    <td>+ (on the client)</td>
    <td>+</td>
 </tr>
 <tr>
    <td>repaint</td>
    <td>-</td>
    <td>-</td>
    <td>+</td>
 </tr>
</table>

1. Data processing operations include paging, filtering, sorting, grouping, and summary calculation (in the **DataGrid**).
2. Set [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '{basewidgetpath}/Configuration/#repaintChangesOnly') to `true` to repaint only those elements whose data had changed.
3. Set [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/') to `false` and [cacheEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/cacheEnabled.md '{basewidgetpath}/Configuration/#cacheEnabled') to `true` to avoid data reloading.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CRUDOperations/"
}

[note]

- When the **refreshMode** is set to *"reshape"* or *"repaint"*, the server should respond to the `insert` or `update` request by sending back the data item saved in the database. See the `DataGridWebApiController` tab in the [CRUD Operations demo](https://demos.devexpress.com/ASPNetMvc/Demo/DataGrid/CRUDOperations) for an example of the server-side implementation. The `InsertOrder` and `UpdateOrder` actions illustrate this case.
- Set **refreshMode** to *"full"* if you need to update row keys.

[/note]
