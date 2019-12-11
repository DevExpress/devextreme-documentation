When you need to select several rows at once, set the multiple selection mode. This mode supplements a grid with a [selection column](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/110%20Selection%20Column.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column') that contains check boxes accompanying each grid row. A user can select rows using these check boxes. In a multiple mode, when a user clicks different rows, the grid behaves like the selection mode is single (see the previous subtopic), but once a user clicks a checkbox, grid behavior changes. From this point forward, clicking a row selects it. But after a user deselects all rows, the grid behavior reverts to the single-like as described above.

![DevExtreme DataGrid Selection](/images/DataGrid/SelectionMultiple.gif)

The selection column enables a user to select all rows at once. This feature is controlled by the [allowSelectAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') option of the **selection** object, which is *true* by default. To disable the feature, set this option to *false*. Note that the user will still be able to deselect all rows at once.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            mode: 'multiple',
            allowSelectAll: false
        }
    });

When selecting all the rows, you can define how rows are selected: on the currently rendered pages or on all pages. For this purpose, specify the [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode') option.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            mode: 'multiple',
            allowSelectAll: true,
            selectAllMode: 'page' // or 'allPages'
        }
    });

By default, multiple selection is instant, but it can also be deferred. For details, see the [Deferred Selection](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridselectionmultipleselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Handling the Selection Event](/concepts/05%20Widgets/DataGrid/017%20Selection/060%20Handling%20the%20Selection%20Event.md '/Documentation/Guide/Widgets/DataGrid/Selection/#Handling_the_Selection_Event')

