Data columns are the most common type of columns used in the **TreeList** widget. They are generated for all members of the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') array that do not configure [band columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Band_Columns'). Usually, a data column displays values from a [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField') to which it is bound, but you can populate a data column with custom values (see [Customize Cells](/concepts/05%20Widgets/TreeList/10%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/')).

![DevExtreme HTML5 JavaScript TreeList DataColumns](/images/treelist/visual_elements/column-types_data.png)

If data column values should be cast to another type (for example, date values stored as strings), specify the target type using the [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataType') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "HireDate",
                dataType: "date"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="HireDate" dataType="date"></dxi-column>
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
- [Customize Cells](/concepts/05%20Widgets/TreeList/10%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/')
- [Lookup Columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Lookup_Columns')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)

[tags] treelist, tree list, column types, data columns
