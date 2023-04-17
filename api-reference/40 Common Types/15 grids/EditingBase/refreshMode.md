---
uid: common/grids:EditingBase.refreshMode
type: Enums.GridsEditRefreshMode
default: 'full'
---
---
##### shortDescription
Specifies operations that are performed after saving changes.

---
<!--
The following table shows the operations that are performed after saving changes in different modes:

&lt;table class="dx-table"&gt;
 &lt;tr&gt;
    &lt;th&gt;Mode&lt;/th&gt;
    &lt;th&gt;Data &lt;a href="/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload"&gt;reloading&lt;/a&gt; &lt;/th&gt;
    &lt;th&gt;Data processing operations&lt;sup&gt;1&lt;/sup&gt;&lt;/th&gt;
    &lt;th&gt;UI component repaint&lt;sup&gt;2&lt;/sup&gt;&lt;/th&gt;
 &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;full&lt;/td&gt;
    &lt;td&gt;+&lt;/td&gt;
    &lt;td&gt;+&lt;/td&gt;
    &lt;td&gt;+&lt;/td&gt;
 &lt;/tr&gt;
 &lt;tr&gt;
    &lt;td&gt;reshape&lt;/td&gt;
    &lt;td&gt;- &lt;sup&gt;3&lt;/sup&gt;&lt;/td&gt;
    &lt;td&gt;+&lt;br&gt;(on the client)&lt;/td&gt;
    &lt;td&gt;+&lt;/td&gt;
 &lt;/tr&gt;
 &lt;tr&gt;
    &lt;td&gt;repaint&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;+&lt;/td&gt;
 &lt;/tr&gt;
&lt;/table&gt;

&lt;div class="footnotes"&gt;
    &lt;ol&gt;
        &lt;li&gt;Data processing operations include paging, filtering, sorting, grouping, and summary calculation (in the &lt;b&gt;DataGrid&lt;/b&gt;).&lt;/li&gt;
        &lt;li&gt;Set &lt;a href="{basewidgetpath}/Configuration/#repaintChangesOnly"&gt;repaintChangesOnly&lt;/a&gt; to &lt;b&gt;true&lt;/b&gt; to repaint only elements whose data changed.&lt;/li&gt;
        &lt;li&gt;Set &lt;a href="{basewidgetpath}/Configuration/remoteOperations/"&gt;remoteOperations&lt;/a&gt; to &lt;b&gt;false&lt;/b&gt; and &lt;a href="{basewidgetpath}/Configuration/#cacheEnabled"&gt;cacheEnabled&lt;/a&gt; to &lt;b&gt;true&lt;/b&gt; to avoid data reloading.&lt;/li&gt;
    &lt;/ol&gt;
&lt;/div&gt;

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CRUDOperations/"
}

[note]

When the **refreshMode** is *"reshape"* or *"repaint"*, the server should respond to the insert or update request by sending back the data item saved in the database. See the `DataGridWebApiController` tab in the [CRUD Operations demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CRUDOperations/Mvc/Light) for an example of the server-side implementation. The `InsertOrder` and `UpdateOrder` actions illustrate this case.

[/note]

-->