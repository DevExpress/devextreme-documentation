---
id: GridBase.Options.editing.refreshMode
acceptValues: 'full' | 'reshape' | 'repaint'
type: String
default: 'full'
---
---
##### shortDescription
Specifies operations that are performed after saving changes.

---
The following table shows the operations that are performed after saving changes in different modes:

<table class="dx-table">
 <tr>
    <th>Mode</th>
    <th>Data <a href="/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload">reloading</a> </th>
    <th>Data processing operations<sup>1</sup></th>
    <th>Widget repaint<sup>2</sup></th>
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
    <td>+<br>(on the client)</td>
    <td>+</td>
 </tr>
 <tr>
    <td>repaint</td>
    <td>-</td>
    <td>-</td>
    <td>+</td>
 </tr>
</table>

<div class="footnotes">
    <ol>
        <li>Data processing operations include paging, filtering, sorting, grouping, and summary calculation (in the <b>DataGrid</b>).</li>
        <li>Set <a href="{basewidgetpath}/Configuration/#repaintChangesOnly">repaintChangesOnly</a> to <b>true</b> to repaint only elements whose data changed.</li>
        <li>Set <a href="{basewidgetpath}/Configuration/remoteOperations/">remoteOperations</a> to <b>false</b> and <a href="{basewidgetpath}/Configuration/#cacheEnabled">cacheEnabled</a> to <b>true</b> to avoid data reloading.</li>
    </ol>
</div>

[note]

When the **refreshMode** is *"reshape"* or *"repaint"*, the server should respond to the insert or update request by sending back the data item saved in the database. See the `DataGridWebApiController` tab in the [CRUD Operations demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CRUDOperations/Mvc/Light) for an example of the server-side implementation. The `InsertOrder` and `UpdateOrder` actions illustrate this case.

[/note]

#include common-ref-enum with {
    enum: "`GridEditRefreshMode`",
    values: "`Full`, `Reshape`, and `Repaint`"
}