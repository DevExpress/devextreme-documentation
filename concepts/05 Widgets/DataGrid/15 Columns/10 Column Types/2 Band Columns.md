Unlike [data columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Data_Columns'), band columns do not hold any data. Instead, they collect two or more data columns under one column header. 

![DevExtreme HTML5 JavaScript DataGrid BandColumns MultiRowHeaders BandedLayout](/images/DataGrid/BandColumns.png)

To set up this layout, describe the hierarchy of columns directly in an object of the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. For example, the following code bands three columns under the *"Contacts"* header.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: "Contacts",
                columns: ["Email", "Mobile_Phone", "Skype"]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="Contacts">
            <dxi-column dataField="Email"></dxi-column>
            <dxi-column dataField="Mobile_Phone"></dxi-column>
            <dxi-column dataField="Skype"></dxi-column>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultiRowHeadersBands/"
}

If you use the [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns') function to configure columns, the hierarchy cannot be described declaratively. To band columns in this case, use the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation//ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand') and [ownerBand](/api-reference/_hidden/GridBaseColumn/ownerBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand') options. Using the same options, you can distinguish band and nested columns from other columns in code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeColumns: function(columns) {
                columns.push({ // Pushes the "Contacts" band column into the "columns" array
                    caption: "Contacts",
                    isBand: true
                });
        
                var contactsFields = ["Email", "Mobile_Phone", "Skype"];
                for (var i = 0; i < columns.length - 1; i++) {
                    if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                        columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns.push({ // Pushes the "Contacts" band column into the "columns" array
                caption: "Contacts",
                isBand: true
            });
    
            var contactsFields = ["Email", "Mobile_Phone", "Skype"];
            for (var i = 0; i < columns.length - 1; i++) {
                if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                    columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---

[note] Nested columns have every [data column option](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') except [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed'), [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition'), [type](/api-reference/_hidden/dxDataGridColumn/type.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#type'), and [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/'). Band columns only support the options listed in the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand') option's description.

Band columns support hierarchies of any nesting level and enables you to use the following structure:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: 'A',
                columns: [ 'A1', 'A2', {
                    caption: 'A3',
                    columns: ['A31', 'A32', {
                        caption: 'A33',
                        columns: ['A331', 'A332', 'A333']
                    }]
                }]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="A">
            <dxi-column dataField="A1"></dxi-column>
            <dxi-column dataField="A2"></dxi-column>
            <dxi-column caption="A3">
                <dxi-column dataField="A31"></dxi-column>
                <dxi-column dataField="A32"></dxi-column>
                <dxi-column caption="A33">
                    <dxi-column dataField="A331"></dxi-column>
                    <dxi-column dataField="A332"></dxi-column>
                    <dxi-column dataField="A333"></dxi-column>
                </dxi-column>
            </dxi-column>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

[tags] dataGrid, data grid, column types, band columns, banded layout, multi-row headers
