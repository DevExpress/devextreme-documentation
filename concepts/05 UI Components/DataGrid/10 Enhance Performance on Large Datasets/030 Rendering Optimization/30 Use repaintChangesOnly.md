Enable the [repaintChangesOnly]() property to optimize performance in the following cases:

- If you enable editing and use the **columns**.[setCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue) method.

- If a velocity of real-time updates is high. Refer to the following demo for an example: [Real Time Updates](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates).

- If the component reloads data or you call the [refresh](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#refresh) method.