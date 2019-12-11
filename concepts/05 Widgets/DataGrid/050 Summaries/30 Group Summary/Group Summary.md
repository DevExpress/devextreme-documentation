A group summary feature provides an ability to aggregate data in a group using one of the available [aggregate functions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType').

![DevExtreme DataGrid GroupPanel](/images/DataGrid/GroupSummary.png)

To configure the group summary, use the [summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/') | [groupItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') array elements. The minimum required configuration of the group summary object includes the [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column') and the [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType') options.
    
    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            groupItems: [{
                column: 'SaleAmount',
                summaryType: 'sum'
            }
			// ...
			]
        }
    });


[note] To learn about the group summary visual elements, refer to the **Visual Elements** | [Group Summary](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/100%20Group%20Rows/20%20Group%20Summary.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows/Group_Summary') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>