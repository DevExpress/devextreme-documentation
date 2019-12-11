Grouping can be applied not only at runtime, but also at design time. To do this, assign an integer value to the [groupIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') option of those columns that must be used in grouping. Note that grouping order is based on those values. If [grouping in the UI](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/020%20Grouping%20in%20UI.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/#Grouping_in_UI') is prohibited, the user will not be able to change the initially set grouping.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            groupIndex: 0
        }, {
            // ...
            groupIndex: 1
        }]
    };

For information about calculating the group index, see the [Calculating the Group Index](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/040%20Calculating%20the%20Group%20Index.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/#Calculating_the_Group_Index') subtopic.