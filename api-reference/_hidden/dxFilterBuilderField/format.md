---
id: dxFilterBuilderField.format
type: format
default: ''
---
---
##### shortDescription
Formats a value before it is displayed.

---
This option also controls the user input in cells that use the [DateBox](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/') widget for editing. For cells that use other widgets, you can specify the [editorOptions](/api-reference/_hidden/dxFilterBuilderField/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#editorOptions').**format** option.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#filterBuilderContainer").dxFilterBuilder({
            fields: [{
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

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fields = [{
            dataField: "SaleAmount",
            format: "currency",
            editorOptions: {
                format: "$ #,##0.##"
            }
        }, 
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })
    <!--HTML-->
    <dx-filter-builder
        [fields]="fields">
    </dx-filter-builder>

---

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')