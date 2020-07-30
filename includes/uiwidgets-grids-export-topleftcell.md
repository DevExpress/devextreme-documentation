The cell is specified using coordinates in the Excel document. For example, the following code specifies cell B2:

    DevExpress.excelExporter.export${{widgetName}}({
        // ...  
        topLeftCell: { row: 2, column: 2 } 
    });

You can also specify the **topLeftCell** using the Excel notation:

    DevExpress.excelExporter.export${{widgetName}}({
        // ...  
        topLeftCell: "B2" 
    });
