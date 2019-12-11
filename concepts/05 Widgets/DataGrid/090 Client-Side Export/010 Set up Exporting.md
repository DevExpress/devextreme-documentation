Follow the steps below to enable exporting.

- Add a link to the JSZip library to your app/site. Learn where you can get it from topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

 
        <!--HTML-->
        <script type="text/javascript" src="js/jszip.min.js"></script>


    [note]Reference the **jszip.min.js** script *before* the DevExtreme scripts.

- Set the grid's [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') | [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled') option to *true*.

- Specify a default name for the resulting file using the **export** | [fileName](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/fileName.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#fileName') option.

<!--...-->

	<!--JavaScript-->var gridOptions = {
		//...
		export : {
			enabled: true,
			fileName: 'myGrid'
		}
	}

[note]Exporting is performed using client-side API in browsers. However, some browsers (including **IE9** and **Safari on Mac OS**) do not implement an API for saving files, thus the exporting feature will not work correctly without the use of additional services. Refer to the [Set up Server-side Proxy](/concepts/05%20Widgets/DataGrid/090%20Client-Side%20Export/040%20Set%20up%20Server-side%20Proxy '/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/#Set_up_Server-side_Proxy') section for details.

When export is enabled, an Export button is displayed above the grid.

![DevExtreme DataGrid Exporting](/images/DataGrid/Export.png)

Pressing this button, an end user can export grid data in the required format.

When a possibility to export only the currently selected rows is needed, set the **export** | [allowExportSelectedData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData') option to *true*. End users will be given a choice between exporting the total grid or selected rows only.

![DevExtreme DataGrid Exporting Selected Rows](/images/DataGrid/Export_SelectedRows.png)

Changes caused by the [cell template](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate'), [row template](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/rowTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate'), [master-detail interface](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/150%20Master-Detail%20Interface.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Master-Detail_Interface') and [data mapping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping') will be omitted in the exported file. 

[note]Instead of data mapping, you can use [calculated columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue'), which will be included in the exported file.
