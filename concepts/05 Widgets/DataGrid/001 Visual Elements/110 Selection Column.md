When a user is allowed to [select](/concepts/05%20Widgets/DataGrid/017%20Selection/010%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/') records in the [multiple mode](/concepts/05%20Widgets/DataGrid/017%20Selection/020%20Selecting%20in%20UI/30%20Multiple%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Selection/#Selecting_in_UI/Multiple_Mode'), a grid is supplemented with a selection column. This column contains a set of check boxes, each of which corresponds to a data row. Toggling a check box selects or deselects the row.

![DevExtreme DataGrid SelectionColumn](/images/DataGrid/SelectionColumn.png)

The selection column appears when the **selection** | [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode') property is set to *'multiple'*.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            mode: 'multiple'
        }
    });

To change the selection column display policy, use the [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#showCheckBoxesMode') option. For example, you can hide it and the multiple selection well be possible only using the **Ctrl**/**Cmd** or **Shift** key.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            showCheckBoxesMode: 'none'
        }
    });


Additionally, a user can select/deselect all rows at once using the check box located in the header of the selection column. Rows can be selected/deselected on the currently rendered pages or on all pages. To define this, specify the [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode') option. If the capability of all rows selection is not required, assign *false* to the **selection** | [allowSelectAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') property.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            // ...
            allowSelectAll: true,
            selectAllMode: 'page' // or 'allPages'
        }
    });