A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visible') option is **false**. You can change this option programmatically using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method. For example, the following code hides an *"Email"* column:

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "Email", "visible", false);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        hideEmails() () {
            this.treeList.instance.columnOption("Email", "visible", false);
        }
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
- [Column Chooser](/concepts/05%20Widgets/TreeList/10%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Chooser/')