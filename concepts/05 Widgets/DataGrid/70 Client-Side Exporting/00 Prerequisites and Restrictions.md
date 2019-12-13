Client-side export requires a third-party library called <a href="https://stuk.github.io/jszip/" target="_blank">JSZip</a>. In a modular environment, it is included in the DevExtreme dependencies and is activated automatically in most of the applications. However, this does not apply to apps created with Angular CLI 6+. In such apps, you need to [register JSZip](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/08%20Register%203rd-Party%20Dependencies%20in%20Angular%20CLI%206+/01%20JSZip%20Registration.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies_in_Angular_CLI_6+/JSZip_Registration').

If your app does not use modules, reference the library on your page *before* the DevExtreme files:

    <!--HTML-->
    <!-- A CDN link -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
    <!-- or a local script -->
    <script type="text/javascript" src="js/jszip.min.js"></script>
    <!-- ... -->
    <!-- DevExtreme files are referenced here -->

The following restrictions apply when exporting data on the client side:

- Only XLSX files are supported.
- Only visible columns are exported.<sup>*</sup>
- Modifications made in the [cell](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') and [row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/rowTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate') templates, [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/'), and [data mapping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping') are omitted. You can use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') instead of the latter.
- Excel limits the number of grouping levels to 7, while in the **DataGrid** it is unlimited.
- Client-side export in **Safari on MacOS** is possible only through a [proxy on the server](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting/30%20Set%20Up%20a%20Server-Side%20Proxy '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Set_Up_a_Server-Side_Proxy').

<div style="font-size:12px;margin-bottom:10px;margin-left:25px">
    <sup>*</sup> - See the <a href="/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting">onExporting</a> option description for a workaround.<br />
</div>
