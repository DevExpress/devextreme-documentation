A total summary item is a grid element that aggregates the entire column of data. It can display the result of different calculations, for example, the number of rows, sum of the column's numeric values, the minimum or maximum value, etc.

![Total Summary](/images/DataGrid/TotalSummary.png)

To define a total summary item, use the [summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/') | [totalItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/') array.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            totalItems: [{
                // Total summary item configuration
            }
			// ...
			]
        }
    });

The following features of a total summary item can be changed.

* **Location**      
The total summary item can be placed to another column using the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn') option. You can also change the text [alignment](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/alignment.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#alignment').

* **Value Format**      
Use the [valueFormat](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat') option to specify what kind of data is represented by the total summary item.

* **Text Format**       
To accompany the summary value with a text, use the [displayFormat](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/displayFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#displayFormat') option. Additional calculations on the value can be performed in the [customizeText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#customizeText') function.

[note] To learn how to implement a total summary, refer to the **Summaries** | [Total Summary](/concepts/10%20UI%20Widgets/70%20Data%20Grid/050%20Summaries/20%20Total%20Summary '/Documentation/Guide/UI_Widgets/Data_Grid/Summaries/#Total_Summary') topic.
