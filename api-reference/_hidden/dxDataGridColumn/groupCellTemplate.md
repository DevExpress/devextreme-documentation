---
id: dxDataGridColumn.groupCellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for group cells.

##### param(cellElement): dxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The current cell's properties.

---
The **cellInfo** object has the following fields:

- **data**        
Contains a data object that represents data items matching a grouping key. For example, if you group grid records by country, the following object can be obtained from the **data** field.

        <!--JavaScript-->{
            key: "Spain", // The name of a country
            items: [      // Data source objects corresponding to the key
                { ... }, 
                { ... },
                // ...
            ]
        }
- **component**  
Contains the **DataGrid** instance.
- **value**        
Contains the value of the current group cell as it is specified in a data source.
- **text**        
Contains the value of the current group cell in a string format. Use this field to get a value with applied [format](/api-reference/_hidden/GridBaseColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format').
- **displayValue**        
Contains the value displayed by the current group cell. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/api-reference/_hidden/dxDataGridColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').
- **columnIndex**        
Contains the index of the column to which the current group cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **rowIndex**        
Contains the index of the row that the current group cell occupies. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **column**        
Contains the settings of the column to which the current group cell belongs.
- **summaryItems**  
An array of [group summary items](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') that are defined to be displayed in a group row. The array objects have the structure of the group summary items with an addition of the **value** (the summary item value) and **columnCaption** (usually used to present a summary value) fields.
- **groupContinuesMessage**        
If the current group continues on the next page, this field contains a corresponding message. The value of this field equals the value of the **grouping**.[groupContinuesMessage](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#groupContinuesMessage) property. If the current group does not continue on the next page, this field equals **undefined**.
- **groupContinuedMessage**        
If the current group is continued from the previous page, this field contains a corresponding message. The value of this field equals the value of the **grouping**.[groupContinuedMessage](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#groupContinuedMessage) property. If the current group is not continued from the previous page, this field equals **undefined**.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [Default Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/05%20Default%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Default_Templates')