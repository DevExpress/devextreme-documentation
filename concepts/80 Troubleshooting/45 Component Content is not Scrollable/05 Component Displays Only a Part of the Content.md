Sometimes a component displays only part of its content and has no scrollbar. The following can be possible reasons:

- A parent element sets a fixed height and `overflow: hidden`.
- The component height is `auto`.

For example, put a DataGrid into a Popup. The DataGrid's default [height](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#height') value is `auto`. This means that the component automatically adjusts its height to accommodate all rows and does not display a scrollbar. 

![DataGrid in Popup with no scrollbar](/images/Troubleshooting/scrolling-grid-in-popup-no-scrollbar.png)

To resolve the issue, set the component height to `100%`.
