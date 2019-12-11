---
default: 'auto'
type: String | Object
---
---
##### shortDescription
Specifies what operations are performed on the server.

---
Data for the **TreeList** can either be stored on the client or come from the server. As a rule, manipulating data on the server enhances the **TreeList** performance. However, the server might be falling short of implementing certain operations. In this case, they can be performed on the client.

Data operations can be categorized into basic operations (filtering, sorting) and advanced operations (grouping). The following table shows where data operations are performed by default.

<div class="simple-table">
<table>
  <tr>
    <th></th>
    <th>Basic operations</th>
    <th>Advanced operations</th>
 </tr>
 <tr>
    <td><a href="/Documentation/17_1/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources">CustomStore</a></td>
    <td style="text-align:center">client</td>
    <td style="text-align:center">client</td>
 </tr>
 <tr>
    <td><a href="/Documentation/17_1/Guide/Data_Layer/Data_Source_Examples/#OData">ODataStore</a></td>
    <td style="text-align:center">server</td>
    <td style="text-align:center">client (always)</td>
 </tr>
</table>
</div>

[note]You cannot perform data operations on the server with an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/') or an array of objects.

To control individual operations, assign a Boolean value to a corresponding field of the **remoteOperations** object. Note that making data operations remote makes sense only if data has a [plain structure](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataStructure').

[note]If actual data is stored on the server, making data operations local does _not_ guarantee that no queries for data will be sent to the server while these operations are being performed. It only guarantees that _calculations_ will be performed on the client.

Note that when the operations are performed remotely, the **TreeList** does not support:

- sorting, grouping and filtering by columns with the [calculateCellValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue') option defined;
- custom sorting using functions (that is, [calculateSortValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue') accepts strings only).