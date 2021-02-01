---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
Sets custom column values used to group grid records.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value used to create and sort groups.

---
This property accepts the name of the data source field that provides values by which to group grid records...

    {
        dataField: "Country",
        groupIndex: 0,
        calculateGroupValue: "groupDataField"
    }

... or a function that creates custom groups:

    // groups records by date
    calculateGroupValue: function(rowData){
        const convertDateToString = date => {
            return date.toISOString().split('T')[0].replaceAll('-', '/');
        };

        const date = rowData.HireDate;
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);

        const today = convertDateToString(new Date());
        const yesterday = convertDateToString(yesterdayDate);

        if(date === today) {
            return "Today";
        }
        if(date === yesterday) {
            return "Yesterday";
        }
        //...
        return "Older";
    }

Group captions and appearance can be customized. To do this, define the [groupCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate) ([groupCellRender](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellRender) in React). Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>.

**calculateGroupValue** is also used to sort groups when the column is grouped.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}
