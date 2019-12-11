Grouping in the UI can be performed using the context menu. To enable this capability, assign *true* to the **grouping** | [contextMenuEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') option.

	<!--JavaScript-->var dataGridOptions = {
        // ...
		grouping: { contextMenuEnabled: true }
	};

To allow grouping with the group panel as well, make the group panel visible using the **groupPanel** | [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') option.

	<!--JavaScript-->var dataGridOptions = {
        // ...
        groupPanel: { visible: true }
	};

#####See Also#####
- [DataGrid - Group Panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/090%20Group%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Panel')    

The foregoing options enable grouping for all grid columns. In case you need to disable grouping for a particular column, set its [allowGrouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') option to *false*.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            allowGrouping: false
        }]
	};

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridgroupinglocaldatagrouping/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>