Sometimes a component displays only part of its content and has no scrollbar. Possible reasons are the following:

- A parent element sets a fixed height and `overflow: hidden`.
- The component height is `auto`.

For example, put DataGrid into Popup. The DataGrid [height](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#height) property's default value is `auto`. So, the DataGrid component automatically adjusts its height to accommodate all rows. The component does not need its own scrollbar because the height for rows is enough.

To resolve the issue, set the component height to `100%`.
