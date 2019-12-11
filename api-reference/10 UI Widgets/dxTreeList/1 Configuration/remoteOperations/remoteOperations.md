---
id: dxTreeList.Options.remoteOperations
type: Object
---
---
##### shortDescription
Notifies the **TreeList** of the server's data processing operations. Applies only if data has a [plain structure](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataStructure').

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
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { filtering: true }</code></td>
    <td>filtering</td>
    <td>-</td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { sorting: true }</code></td>
    <td>sorting</td>
    <td>filtering<sup>*</sup></td>
 </tr>
 <tr>
    <td style="text-align:left; font-style:normal"><code>remoteOperations: { grouping: true }</code></td>
    <td>grouping, filtering</td>
    <td>sorting<sup>*</sup></td>
 </tr>
</table>
</div>

<div style="font-size:12px;margin-bottom:10px;margin-left:25px">
    <sup>*</sup> - If this functionality is used in the widget.<br />
</div>

[note] Filtering and sorting are performed on the server side for the [ODataStore](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/030%20OData%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/OData_Service/'), but you can change them to the client side by setting the corresponding **remoteOperations** fields to **false**. Other operations are always client-side.

When operations are performed on the server side, the **TreeList** does not support:

- sorting, grouping, and filtering by columns with the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue') option defined;
- custom sorting using functions (that is, [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue') accepts strings only).

#include common-demobutton-named with {
    name: "Web API Service",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/WebAPIService/"
}

#####See Also#####
- **Data Binding**: [Web API Service](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/026%20Web%20API%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Web_API_Service/') | [PHP Service](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/027%20PHP%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/PHP_Service/') | [MongoDB Service](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/028%20MongoDB%20Service.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/MongoDB_Service/') | [Custom Sources](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/035%20Custom%20Sources '/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/')