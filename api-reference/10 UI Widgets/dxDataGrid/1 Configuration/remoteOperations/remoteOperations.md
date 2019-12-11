---
default: 'auto'
type: String | Boolean | Object
---
---
##### shortDescription
Specifies the operations that must be performed on the server side.

---
Data for the **DataGrid** can be stored on the client or come from the server. As a rule, manipulating data on the server enhances **DataGrid** performance. However, the server might be falling short of implementing certain operations, in which case, they can be performed on the client.

Data operations can be categorized into basic operations ([filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/'), [sorting](/concepts/05%20Widgets/DataGrid/25%20Sorting '/Documentation/Guide/Widgets/DataGrid/Sorting/'), [paging](/concepts/05%20Widgets/DataGrid/35%20Paging '/Documentation/Guide/Widgets/DataGrid/Paging/')) and advanced operations ([grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/'), [group paging](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/025%20Remote%20Group%20Paging.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Remote_Group_Paging'), [summary calculation](/concepts/05%20Widgets/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/')). The following table shows where data operations are performed by default.

<div class="simple-table">
<table>
  <tr>
    <th></th>
    <th>Basic operations</th>
    <th>Advanced operations</th>
 </tr>
 <tr>
    <td><a href="/Documentation/17_2/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/">CustomStore</a></td>
    <td style="text-align:center">client</td>
    <td style="text-align:center">client</td>
 </tr>
 <tr>
    <td><a href="/Documentation/17_2/Guide/Widgets/DataGrid/Data_Binding/OData_Service/">ODataStore</a></td>
    <td style="text-align:center">server</td>
    <td style="text-align:center">client (always)</td>
 </tr>
</table>
</div>

[note]You cannot perform data operations on the server with an [ArrayStore](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/10%20Simple%20Array/15%20ArrayStore.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/ArrayStore/'), a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/') or an [array of objects](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/10%20Simple%20Array/10%20Array%20Only.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/Array_Only/').

To control individual operations, assign a Boolean value to a corresponding field of the **remoteOperations** object. To control all operations simultaneously, assign a Boolean value directly to the **remoteOperations** option. 

[note]If you assign **true** to **remoteOperations**, the group paging feature is still performed on the client. To delegate it to the server, assign **true** to the **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging'), but note that with this setting, all other operations are delegated to the server also.

[note]If actual data is stored on the server, making data operations local does _not_ guarantee that there won't be any queries for data to the server while these operations are being performed. It only guarantees that _calculations_ will be performed on the client.

Note that when operations are performed remotely, the **DataGrid** does not support:

- sorting, grouping and filtering by columns with the [calculateCellValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateDisplayValue') option defined;
- custom grouping and custom sorting using functions (that is, [calculateGroupValue](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateGroupValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue') and [calculateSortValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue') accept strings only);
- [custom summary calculation](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-grid_data_binding-custom_data_source"
}