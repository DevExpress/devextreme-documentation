---
id: dxDataGrid.Options.remoteOperations
type: Boolean | Object | Enums.Mode
default: 'auto'
---
---
##### shortDescription
Specifies DataGrid operations to be executed on the server side.

---
Server-side data processing improves component performance with large datasets. The following table lists **remoteOperation** configuration values and which operations each value affects:

<table class="dx-table">
   <tr>
      <th>Setting</th>
      <th>Enabled server-side operations</th>
   </tr>
   <tr>
      <td><i>"auto"</i></td>
      <td>If the component <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource">dataSource</a> is an <a href="/Documentation/ApiReference/Data_Layer/ODataStore/">OdataStore</a>, <b>filtering</b>, <b>sorting</b>, and <b>paging</b>. If you implement another data source type, <b>no operations</b> are enabled.</td>
   </tr>
   <tr>
      <td><code>true</code></td>
      <td>All operations except <b>group paging</b>.</td>
   </tr>
   <tr>
      <td><code>{ groupPaging: true }</code></td>
      <td>All operations including <b>group paging</b>.</td>
   </tr>
   <tr>
      <td><code>{ paging: true }</code></td>
      <td><b>Paging</b>, <b>filtering</b>, <b>sorting</b>, and <b>summary calculation</b>, as well as <b>grouping</b> if <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#autoExpandAll">autoExpandAll</a> is disabled.</td>
   </tr>
   <tr>
      <td><code>{ filtering: true }</code></td>
      <td><b>Filtering</b>, as well as <b>grouping</b> if DataGrid contains a lookup column and <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#syncLookupFilterValues">syncLookupFilterValues</a> is enabled (default).</td>
   </tr>
   <tr>
      <td><code>{ sorting: true }</code></td>
      <td><b>Sorting</b> and <b>filtering</b>.</td>
   </tr>
   <tr>
      <td><code>{ grouping: true }</code></td>
      <td><b>Grouping</b>, <b>filtering</b>, <b>sorting</b>, and <b>summary calculation</b>.</td>
   </tr>
   <tr>
      <td><code>{ summary: true }</code></td>
      <td><b>Summary calculation</b> and <b>filtering</b>, as well as <b>sorting</b> and <b>grouping</b> if <b>summary</b>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/">groupItems[]</a> is configured.</td>
   </tr>
</table>

The following restrictions apply when operations are remote:

- DataGrid does not sort, filter, or group columns that implement [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateDisplayValue').
- The [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateGroupValue') and [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateSortValue') properties accept only string values.
- DataGrid ignores the [calculateCustomSummary](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary') property.
- The component ignores [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') properties that return a function or a filter expression containing a functon.

#include common-demobutton-named with {
    name: "Web API Service",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService/"
}
#include common-demobutton-named with {
    name: "Custom Service",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/"
}

#####See Also#####
- **Data Binding**: [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') | [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')

