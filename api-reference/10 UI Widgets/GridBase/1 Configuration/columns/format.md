---
default: ''
type: format
---
---
##### shortDescription
Formats a value before it is displayed in a column cell.

---
This option also controls the user input in cells that use the [DateBox](/concepts/05%20Widgets/DateBox/00%20Overview.md '/Documentation/Guide/Widgets/DateBox/Overview/') widget for editing. For cells that use other widgets, you can specify the [editorOptions](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions').**format** option.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: orders,
            editing: {
                allowUpdating: true
            },
            columns: [{
                dataField: "SaleAmount",
                format: "currency",
                editorOptions: {
                    format: "$ #,##0.##"
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name}
        [dataSource]="orders">
        <dxo-editing [allowUpdating]="true"></dxo-editing>
        <dxi-column
            dataField="SaleAmount"
            format="currency"
            [editorOptions]="{ format: '$ #,##0.##' }">
        </dxi-column>
    </dx-{widget-name}>

---

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')