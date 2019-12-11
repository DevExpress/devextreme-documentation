Grouped records in a grid are headed by a group row, which contains the name of that group and helps users identify it.

![DevExtreme DataGrid GroupRows](/images/DataGrid/GroupRows.png)

[note] Although group rows look like rows, internally they are treated like cells. Therefore, in **DataGrid** documentation, you are just as likely to encounter "group row" as "group cell".

A grid group can be in an expanded or collapsed state. When a group is expanded, it appears as a set of data rows headed with a group row. This state is illustrated by the image above. In the collapsed state, a group is represented by a group row only. By default, group rows appear expanded, but you may force them to appear collapsed by setting the **grouping** | [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') property to *false*.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        grouping: {
            autoExpandAll: false // groups appear collapsed
        }
	});
    
In some cases, a grid group may be too large to fit into a grid page. If so, the group is parted, and a message notifying a user about that fact is added to the text of the group row. If you are not satisfied with that message, change it using the [groupContinuedMessage](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/texts/groupContinuedMessage.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/texts/#groupContinuedMessage') and [groupContinuesMessage](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/texts/groupContinuesMessage.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/texts/#groupContinuesMessage') properties of the **grouping** | **texts** object.

#####See Also#####
- [DataGrid - Grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/#Grouping)   