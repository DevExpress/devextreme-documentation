A column is considered hidden when its [visible](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/visible.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visible') option is **false**. You can change this option programmatically using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method. For example, the following code hides an *"Email"* column:

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "Email", "visible", false);

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        isVisible: boolean = true;
        hideEmails() {
            this.isVisible = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxButtonModule
        ],
        // ...
    })
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Email" [visible]="isVisible"></dxi-column>
    </dx-tree-list>
    <dx-button text="Hide Emails" (onClick)="hideEmails()"></dx-button>

---

#####See Also#####
- [Column Chooser](/concepts/05%20Widgets/TreeList/10%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Chooser/')