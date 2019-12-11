A group summary item is a grid element that aggregates a column of data in a group. It can display the result of different calculations within the group, for example, the number of rows, sum of the column's numeric values, the minimum or maximum value, etc.

![DevExtreme DataGrid GroupPanel](/images/DataGrid/GroupSummary.png)

To define a group summary item, use the [summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/') | [groupItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') array.
    
    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            groupItems: [{
                // Group summary item configuration
            }
			// ...
			]
        }
    });

The following features of the group summary item can be changed.

* **Location**      
By default, group summary items are displayed in the header of a group row. You can also align the items by columns within the group row by setting the [alignByColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/alignByColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#alignByColumn') option to *true*. In addition, you can place items to the group footer by setting the [showInGroupFooter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter') option to *true*. In both these scenarios, you can place items to alternative columns by using the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn') option.

* **Value Format**      
Use the [valueFormat](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#valueFormat') option to specify the kind of data that is represented by the group summary item.

* **Text Format**       
To accompany the summary value with a text, use the [displayFormat](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/displayFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#displayFormat') option. The additional calculations on the value can be performed in the [customizeText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#customizeText') function.

[note] To learn how to implement a group summary, refer to the **Summaries** | [Group Summary](/concepts/10%20UI%20Widgets/70%20Data%20Grid/050%20Summaries/30%20Group%20Summary '/Documentation/Guide/UI_Widgets/Data_Grid/Summaries/#Group_Summary') topic.
