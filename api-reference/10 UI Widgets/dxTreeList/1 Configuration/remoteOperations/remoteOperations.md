---
id: dxTreeList.Options.remoteOperations
acceptValues: 'auto'
type: Object | String
default: 'auto'
---
---
##### shortDescription
Notifies the **TreeList** of the server's data processing operations. Applies only if data has a [plain structure](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataStructure').

---
Server-side data processing improves the widget's performance on large datasets. When the server does not implement particular operations (and/or the corresponding **remoteOperations** fields are **false**) they are executed on the client. Note that the widget may send queries to the server while executing a client-side operation.

The following table lists the possible **remoteOperations** configurations and the operations the server should implement. The server should also implement additional operations depending on the used widget functionality. 

<table class="dx-table">
 <tr>
    <th>Setting</th>
    <th>Required server-side operations</th>
    <th>Additional server-side operations</th>
 </tr>
  <tr>
    <td><code>remoteOperations: { filtering: true }</code></td>
    <td>filtering</td>
    <td>-</td>
 </tr>
 <tr>
    <td><code>remoteOperations: { sorting: true }</code></td>
    <td>sorting</td>
    <td>filtering<sup>*</sup></td>
 </tr>
 <tr>
    <td><code>remoteOperations: { grouping: true }</code></td>
    <td>grouping, filtering</td>
    <td>sorting<sup>*</sup></td>
 </tr>
</table>

<div class="footnotes">
    <ul>
        <li>If this functionality is used in the widget.</li>
    </ul>
</div>

[note] Filtering and sorting are performed on the server side for the [ODataStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/'), but you can change them to the client side by setting the corresponding **remoteOperations** fields to **false**. Other operations are always client-side.

When operations are performed on the server side, the **TreeList** does not support:

- sorting, grouping, and filtering by columns with the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue') option defined;
- custom sorting using functions (that is, [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue') accepts strings only).

#include common-demobutton-named with {
    name: "Web API Service",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/WebAPIService/"
}

#####See Also#####
- **Data Binding**: [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') | [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')