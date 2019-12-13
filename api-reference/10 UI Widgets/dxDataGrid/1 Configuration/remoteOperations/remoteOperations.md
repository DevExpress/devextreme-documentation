---
id: dxDataGrid.Options.remoteOperations
type: Boolean | Object
---
---
##### shortDescription
Notifies the **DataGrid** of the server's data processing operations.

---
Server-side data processing improves the widget's performance on large datasets. When the server does not implement particular operations (and/or the corresponding **remoteOperations** fields are **false**) they are executed on the client. Note that the widget may send queries to the server while executing a client-side operation.

The following table lists the possible **remoteOperations** configurations and the operations the server should implement. The server should also implement additional operations depending on the used widget functionality.

<div class="simple-table">
<table style="text-align:center">
 <tr>
    <th>Setting</th>
    <th>Required server-side operations</th>
    <th>Additional server-side operations</th>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: true</code></td>
    <td>all operations <b>except group paging</b></td>
    <td>-</td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { groupPaging: true }</code></td>
    <td>all operations <b>including group paging</b></td>
    <td>-</td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { paging: true }</code></td>
    <td>paging</td>
    <td>filtering<sup>1</sup>, sorting<sup>1</sup>, summary calculation<sup>1</sup></td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { paging: true }</code><br/>(with grouping used in the widget)</td>
    <td>paging, filtering, sorting</td>
    <td>grouping<sup>3</sup>, summary calculation<sup>1</sup></td>
 </tr>
  <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { filtering: true }</code></td>
    <td>filtering</td>
    <td>-</td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { sorting: true }</code></td>
    <td>sorting</td>
    <td>filtering<sup>1</sup></td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { grouping: true }</code></td>
    <td>grouping, filtering</td>
    <td>sorting<sup>1</sup>, summary calculation<sup>1</sup></td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { summary: true }</code></td>
    <td>summary calculation</td>
    <td>filtering<sup>1</sup>, sorting<sup>2</sup>, grouping<sup>2</sup></td>
 </tr>
</table>
</div>

<div style="font-size:12px;margin-bottom:10px;margin-left:25px">
    <sup>1</sup> - If this functionality is used in the widget.<br />
    <sup>2</sup> - If <a href="/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/">group summary calculation</a> is used.<br />
    <sup>3</sup> - If <b>grouping</b>.<a href="/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll">autoExpandAll</a> is set to <b>false</b>
</div>

[note] Paging, filtering, and sorting are performed on the server side for the [ODataStore](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/20%20OData%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/OData_Service/'), but you can change them to the client side by setting the corresponding **remoteOperations** fields to **false**. Other operations are always client-side.

The following restrictions apply to widget functionality when operations are remote:

- Columns with the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateDisplayValue') option set cannot be sorted, filtered, or used for grouping.

- The [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue') and [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue') options accept only string values.

- [Custom summary calculation](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary') is not supported.

- The [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateFilterExpression') option does not apply if it returns a function or a filter expression that contains functions.

#include common-demobutton-named with {
    name: "Web API Service",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService/"
}
#include common-demobutton-named with {
    name: "Custom Service",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/"
}

#####See Also#####
- **Data Binding**: [Web API Service](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/16%20Web%20API%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Web_API_Service/') | [PHP Service](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/17%20PHP%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/PHP_Service/') | [MongoDB Service](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/18%20MongoDB%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/MongoDB_Service/') | [Custom Sources](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/')

