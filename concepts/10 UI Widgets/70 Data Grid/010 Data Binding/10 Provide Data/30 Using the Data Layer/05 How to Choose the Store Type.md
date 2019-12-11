If you need the **DataGrid** widget to work with local data, use the [ArrayStore](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/10%20Provide%20Data/30%20Using%20the%20Data%20Layer/15%20Using%20an%20ArrayStore.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_an_ArrayStore') or [LocalStore](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/10%20Provide%20Data/30%20Using%20the%20Data%20Layer/20%20Using%20a%20LocalStore.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_LocalStore'). 

If your data is fetched from the remote server, refer to table below to learn how different Store types affects different data grid features. The plus (+) sign means that the feature is supported by the corresponding Store type. The minus (-) sign means that the **DataGrid** does not support the feature for the corresponding Store type.

<div class="simple-table">
<table>
  <tr>
    <th rowspan=2> </th>
    <th rowspan=2><a href="/Documentation/16_1/ApiReference/Data_Layer/ODataStore/">ODataStore</a>, <a href="/Documentation/16_1/ApiReference/Data_Layer/DataSource/Configuration/store/#type">BreezeStore</a>, <a href="/Documentation/16_1/ApiReference/Data_Layer/DataSource/Configuration/store/#type">JayDataStore</a>, <a href="/Documentation/16_1/ApiReference/Data_Layer/DataSource/Configuration/store/#type">ParseStore</a></th>
    <th colspan=3>Custom Store</th>
 </tr>
 <tr>
    <th><a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations">Remote Operations</a> are disabled</th>
    <th><a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Basic_Remote_Operations">Basic Remote Operations</a> are enabled</th>
    <th><a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Advanced_Remote_Operations">Advanced Remote Operations</a> are enabled</th>
 </tr>
 <tr>
    <td><a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Filtering/">Filtering</a>, <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Sorting/">Sorting</a>, <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Pager_Navigation">Paging</a> and <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Grouping/">Grouping</a> features</td>
    <td>+</td>
    <td>+(**)</td>
    <td>+</td>
    <td>+</td>
 </tr>
  <tr>
    <td>Setting the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll">autoExpandAll</a> option to <i>false</i> at runtime or calling the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex">collapseAll(groupIndex)</a> method</td>
    <td>+(*)</td>
    <td>+(**)</td>
    <td>+(*)</td>
    <td>+</td>
 </tr>
  <tr>
    <td><a href='/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary'>Custom summary calculation</a></td>
    <td>+(*)</td>
    <td>+(**)</td>
    <td>+(*)</td>
    <td>-</td>
 </tr>
  <tr>
    <td>Using of <a href='/Documentation/Guide/UI_Widgets/Data_Grid/Filtering/#Column_Header_Filter'>header filter</a> with the default data source</td>
    <td>+(*)</td>
    <td>+(**)</td>
    <td>+(*)</td>
    <td>+</td>
 </tr>
  <tr>
    <td>Sorting, Grouping and Filtering on <a href='/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue'>calculated columns</a></td>
    <td>+(*)</td>
    <td>+(**)</td>
    <td>-</td>
    <td>-</td>
 </tr>
  <tr>
    <td>Assigning functions to the <a href='/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue'>calculateGroupValue</a> and <a href='/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue'>calculateSortValue</a> options</td>
    <td>+(*)</td>
    <td>+(**)</td>
    <td>-</td>
    <td>-</td>
 </tr>
</table>
</div>

<p><b>*</b> The operation initiates the load of data for all pages. This may cause significant delay if the data set is large.<br/>
<b>**</b> The operation is executed on cached data, which was initially loaded. You can disable caching by setting the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#cacheEnabled">cacheEnabled</a> option to <i>false</i>, but this may affect grid performance.</p>

[note] When the amount of data is large, it is also recommended that you [deny grouping by columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') whose values are mostly unique. 