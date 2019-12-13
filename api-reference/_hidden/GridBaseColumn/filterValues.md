---
id: GridBaseColumn.filterValues
type: Array<any>
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies values selected in the column's [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter').

---
If the **headerFilter**.[groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option is set, each value in the **filterValues** array specifies the beginning of an interval instead of an exact value:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "ID",
                dataType: "number",
                headerFilter: { groupInterval: 100 },
                filterValues: [500, 700], // Filter intervals are 500-600 and 700-800
            },
            // ...
            ]
        })
    });

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        columns = [{
            dataField: "ID",
            dataType: "number",
            headerFilter: { groupInterval: 100 },
            filterValues: [500, 700], // Filter intervals are 500-600 and 700-800
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        [columns]="columns">
    </dx-{widget-name}>

---
#include datagrid-filtering-rowandheaderconflicts

#####See Also#####
- [Filtering - Header Filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter')