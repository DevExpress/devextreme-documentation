---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
Sets custom values for the column by which to group grid's records.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value used to create and sort groups.

---
This property accepts the name of the data source field that provides these values...

    {
        dataField: "Country",
        groupIndex: 0,
        calculateGroupValue: "groupDataField"
    }

... or a function that calculates them:

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

Group headers display the values of **calculateGroupValue**. The DataGrid also uses them to sort groups. To preserve a custom sort order and apply a custom template for the group headers, define the [groupCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate) ([groupCellRender](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellRender) in React). Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}