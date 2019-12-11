To [group](/concepts/05%20Widgets/DataGrid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/') grid records, use a group panel. A user can drag-and-drop columns onto and from it, thus grouping grid records by these columns.

![DevExtreme DataGrid GroupPanel](/images/DataGrid/GroupPanel.png)

To configure the group panel, use the fields of the [groupPanel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/') object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		groupPanel: {
			// Group panel is configured here
		}
    });

By default, the group panel is hidden. To make it visible, set the [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') property of the **groupPanel** object to *true*.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		groupPanel: {
			visible: true
		}
    });

Building a multi-platform application, you may want to show/hide the group panel depending on the device's screen size. For this purpose, assign *"auto"* to the **groupPanel** | **visible** option. In this case, the group panel will be hidden on small-screen devices, and shown on the others.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        groupPanel: {
            visible: "auto"
        }
	});

There are several additional features of the group panel that may be configured. They are listed below.

* **Blocking the Group Panel**		
If required, you can prohibit drag-and-drop but leave the group panel visible. In that case, assign *false* to the [allowColumnDragging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/allowColumnDragging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#allowColumnDragging') field of the **groupPanel** object. This is useful, for instance, when grid records are grouped initially and when a user needs to know about that grouping, but must not be able to change it.

* **Specifying a Placeholder**		
You can change the text displayed by an empty group panel. Use the **groupPanel** | [emptyPanelText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/emptyPanelText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#emptyPanelText') property for this purpose.

#####See Also#####
- [DataGrid - Grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/#Grouping)
- [DataGrid - Group Rows](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows')   