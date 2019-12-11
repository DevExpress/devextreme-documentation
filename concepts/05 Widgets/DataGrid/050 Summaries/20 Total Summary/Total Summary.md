A total summary is a grid feature that provides the ability to aggregate the entire column of data using one of the available [aggregate functions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType').

![Total Summary](/images/DataGrid/TotalSummary.png)

To configure the total summary, use the [summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/') | [totalItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/') array elements. The minimum required configuration of the total summary object includes the [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column') and the [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType') options.
    
    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            totalItems: [{
                column: 'OrderNumber',
                summaryType: 'count'
            }
			// ...
			]
        }
    });

[note] To learn about the total summary visual elements, refer to the **Visual Elements** | [Total Summary](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/140%20Total%20Summary.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Total_Summary') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgridtotals/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>