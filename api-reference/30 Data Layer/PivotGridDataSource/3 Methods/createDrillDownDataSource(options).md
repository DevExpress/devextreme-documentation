---
##### shortDescription
Provides access to a list of records ([facts](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values')) that were used to calculate a specific summary.

##### param(options): object
Configuration object.

##### field(options.columnPath): array
A path to the cell in the 'column' area.

##### field(options.rowPath): array
A path to the cell in the 'row' area.

##### field(options.dataIndex): number
An index of the summary value in the 'data' area.

##### field(options.maxRowCount): number
Maximum items count in the resulting list.

##### field(options.customColumns): array
A list of field names that will be included in each fact.

##### return: DataSource
A drill-down data source.

---
Use this method if you need to get information on what facts were involved in the calculation of a specific summary value. To get a drill-down data source that provides such information, you need to specify a full path to a summary value (including the **rowPath**, **columnPath** and **dataIndex**). You can also specify a list of fields to display for each fact (**customColumns**) and the maximum number of acquired facts (**maxRowCount**).

[note]By default, data in the returned data source is paginated. This means that when trying to load items from it, you will get only the items of the first page. To get all items, use the following code.

    <!--JavaScript-->drillDownDataSource.paginate(false);
    drillDownDataSource.load().done(function (items) {
        // the "items" array contains all items
    });