
Client-side export requires a third-party libraries: 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.2/jszip.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>.
[note] In your app reference this libraries on your page *before* the DevExtreme files.

For angular, react, vue projects you need **import** this libraries.
// TODO: code snippet examples ?

The following restrictions apply when exporting data on the client side:

- Only XLSX files are supported.
- Only visible columns are exported.<sup>*</sup>
- Modifications made in the [cell](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') and [row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/rowTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate') templates, [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/'), and [data mapping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping') are omitted. You can use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') instead of the latter.
- Excel limits the number of grouping levels to 7, while in the **DataGrid** it is unlimited. // TODO: link on excel documentation about grouping level

<div style="font-size:12px;margin-bottom:10px;margin-left:25px">
    <sup>*</sup> - //TODO: how to export invisible columns https://supportcenter.devexpress.com/ticket/details/t826206/datagrid-exceljs-ctp-export-how-to-export-invisible-datagrid-columns-into-excel-using
</div>
