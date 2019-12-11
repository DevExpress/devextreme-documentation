Headers are used to annotate numeric values in the widget. There are three headers in **PivotGrid**: row, column and data. The row and column headers occupy the row and column area correspondingly and are always present. The data header may be located either in the row or column area depending on the value of the [dataFieldArea](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/dataFieldArea.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataFieldArea') option.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataFieldArea: 'column' // 'row'    
    };
    
The data header appears only if there are several data fields in the pivot grid. In the image below, the data header belongs to the column area.

![DevExtreme PivotGrid Headers](/images/DataGrid/PivotGridHeaders.png)

Headers depend on field configuration. The values of those fields whose [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') property equals to *'row'* or *'column'* appear in the corresponding header. Fields that have the **area** property set to *'data'* slightly differ. These fields provide not their values, but [captions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption') to the data header as their values are used to calculate [summary values](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values').

If items in the row header represent a hierarchical structure, they can have two different layouts. By default, each child item adjoins its parent item thus forming a line. This layout occupies a significant amount of space, which may be limited. In that case, use a more compact tree layout. To specify the layout for row header items, use the [rowHeaderLayout](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/rowHeaderLayout.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#rowHeaderLayout') option.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        rowHeaderLayout: 'tree' // 'standard'    
    };

When the user right-clicks a header, a context menu appears. There is a number of options related to that context menu.

* [allowExpandAll](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowExpandAll') &#8212; allows the user to expand/collapse all header items within a header level;
* [allowFiltering](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering') &#8212; allows the user to change filtering options;
* [allowSorting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting') &#8212; allows the user to change sorting options;
* [allowSortingBySummary](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSortingBySummary.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSortingBySummary') &#8212; allows the user to sort columns by summary values.