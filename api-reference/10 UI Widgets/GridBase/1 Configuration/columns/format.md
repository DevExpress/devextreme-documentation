---
default: ''
type: format
---
---
##### shortDescription
Formats a value before it is displayed in a column cell.

---
[note]

Specify the **editorOptions.format** option to format a value being edited.

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

[/note]

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')