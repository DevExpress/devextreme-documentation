DevExtreme data-bound components may not display data or display unexpected data. The components use network requests to communicate with servers, and you may need to resolve network communication issues.

### Issue 

The DataGrid implements a [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). The **DataGrid.**[remoteOperations](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/) property and [paging](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/) are enabled. But the DataGrid loads and displays all pages at once.

### Solution 

Check request parameters and data that DataGrid receives from the server:

1. Open your browser's DevTools and navigate to the Network tab.

2. Reload the page. Review the request list.

3. Find the request to your data end-point and click it to see the details.

4. Check if this request contains any related parameters. The DataGrid sends the [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip) and [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take) parameters for remote paging. Check the **URL** or **Payload** tab.

5. Check what data your server sent back to the client in the **Preview** or **Response** tab.

If the request does not display [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip) and [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take) parameters, make sure that the **CustomStore.**[load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) implementation reads them from [LoadOptions](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/) and sends them to the server.

If the request displays the [skip](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip) and [take](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take) parameters, make sure that your server implementation reads and applies the parameters when it processes this request.