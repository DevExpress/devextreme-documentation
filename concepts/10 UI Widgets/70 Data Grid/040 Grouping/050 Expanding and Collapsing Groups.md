Groups can be either expanded or collapsed. When expanded, a group is represented by a [group row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows') and data rows matching the grouping value. When collapsed, a group is represented by a group row only.

![DevExtreme DataGrid Groups](/images/DataGrid/GroupsExpandedCollapsed.png)

By default, to expand/collapse a group, the user clicks its expand/collapse button. On small-screen devices, this approach may impair the user experience. As an alternative, consider expanding/collapsing a group by a click on the group row. To specify the preferable mode, use the **grouping** | [expandMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/expandMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#expandMode') option.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        grouping: {
            // ...
            expandMode: 'buttonClick' // or 'rowClick'
        }
    };

You can entirely disallow the user to collapse groups. For this purpose, set the **grouping** | [allowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing') option to *false*.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        grouping: {
            // ...
            allowCollapsing: false // disallows group collapsing
        }
	  };

Groups in a grid may appear expanded or collapsed initially. To specify this for all groups, use the **grouping** | [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option. If you need to specify this setting for an individual column, use its [autoExpandGroup](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/autoExpandGroup.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#autoExpandGroup') option.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        grouping: {
            // ...
            autoExpandAll: true // makes all groups appear expanded
        },
        columns: [{
            // ...
            autoExpandGroup: false // groups of this column appear collapsed
        }]
	  };

To expand/collapse a group in code, call the [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') or [collapseAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex') methods. To discover how to calculate the group index, which is passed to these methods, refer to the [Calculating the Group Index](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/040%20Calculating%20the%20Group%20Index.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/#Calculating_the_Group_Index') subtopic. Calling these methods without the argument expands/collapses all groups.

You can also perform custom actions before or after expanding/collapsing groups. For this purpose, use the [rowExpanding](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowExpanding.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanding'), [rowExpanded](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowExpanded.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanded'), [rowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowCollapsing') and [rowCollapsed](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowCollapsed') events.