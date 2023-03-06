Enable the [repaintChangesOnly]() property to optimize performance in the following cases:

- If you enable editing and use the **columns**.[setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue') method.

- If the speed of real-time updates is high. Refer to the following demo for an example: [Real Time Updates](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates).

- If the component reloads data or you call the [refresh](/api-reference/10%20UI%20Components/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#refresh') method.