---
id: dxTreeList.Options.columns
type: Array<dxTreeListColumn, String>
default: undefined
inheritsType: dxTreeListColumn
---
---
##### shortDescription
Configures columns.

---
This option accepts an array of objects, where each object configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
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

#####See Also#####
- [Columns Overview](/concepts/05%20Widgets/TreeList/10%20Columns/00%20Overview.md '/Documentation/Guide/Widgets/TreeList/Columns/Overview/')
- [columnOption(id, options)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_options')
- [customizeColumns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#customizeColumns')