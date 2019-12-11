Columns represent sets of data values that have the same type. To configure columns, assign an array of objects to the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') option. Each object in it configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                caption: "Position"
            }, {
                dataField: "FullName",
                width: 300
            }, 
                "CompanyName",
                "City"
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Title" caption="Position"></dxi-column>
        <dxi-column dataField="FullName" [width]="300"></dxi-column>
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

The **TreeList** generates a column per data field if you do not specify the **columns** array. You can make minor adjustments to these columns with the [customizeColumns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#customizeColumns') function. Use the function's parameter to access the column configurations.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        [customizeColumns]="customizeColumns">
    </dx-tree-list>
    
---

This topic has outlined the ways to configure columns in the **TreeList** widget. For a detailed overview of column features, refer to other topics in this section.

#####See Also#####
- **Column Types**: [Data Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Data_Columns/') | [Band Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Band_Columns/') | [Lookup Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Lookup_Columns/') | [Command Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/')
