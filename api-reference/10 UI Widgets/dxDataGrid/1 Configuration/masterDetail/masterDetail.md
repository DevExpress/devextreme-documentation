---
type: Object
---
---
##### shortDescription
Allows you to build a [master-detail interface](/concepts/05%20Widgets/DataGrid/080%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/') in the grid.

---
In **DataGrid**, a master-detail interface supplies a usual [data row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows') with an expandable section that contains the details on this data row. In that case, the data row is called "master row", while the section is called "detail section".

To enable the master-detail interface, assign *true* to the **masterDetail** | [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled') option. After that, specify the template for detail sections using the **masterDetail** | **template** option. Templates allow you to place virtually anything into the detail sections. For example, you can display another **DataGrid** or any other [UI widget](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') there. For more information on specifying the template for the detail sections, see the [template](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template') option description.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MasterDetailView/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=1cDIpV470u0&index=43&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>