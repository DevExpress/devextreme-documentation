When you need to select several rows at once, set the multiple selection mode. This mode supplements a grid with a [selection column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/110%20Selection%20Column.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Selection_Column') that contains check boxes accompanying each grid row. A user can select rows using these check boxes. In a multiple mode, when a user clicks different rows, the grid behaves like the selection mode is single (see the previous subtopic), but once the user clicks a checkbox, grid behavior changes. From this point forward, clicking a row selects it. Grid behavior reverts to single-like when the user decides to deselect all grid rows by unchecking all check boxes.

![DevExtreme DataGrid Selection](/images/DataGrid/SelectionMultiple.gif)

The selection column enables a user to select all rows at once. This feature is controlled by the [allowSelectAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') option of the **selection** object, which is *true* by default. To disable the feature, set this option to *false*. Note that the user will still be able to deselect all rows at once.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		selection: {
			mode: 'multiple',
			allowSelectAll: false
		}
    });

When a row is being selected, specific actions can be performed if required. To learn how to specify them, refer to the [Handling the Selection Event](/concepts/10%20UI%20Widgets/70%20Data%20Grid/017%20Selection/060%20Handling%20the%20Selection%20Event.md '/Documentation/Guide/UI_Widgets/Data_Grid/Selection/#Handling_the_Selection_Event') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridselectionmultipleselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>