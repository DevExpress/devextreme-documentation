A lookup column is a special case of [data columns](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Data_Columns'). A lookup column contains a restricted set of values. It is useful for filtering and, often, editing.

![DevExtreme HTML5 JavaScript TreeList LookupColumns](/images/treelist/visual_elements/column-types_lookup.png)

Each lookup column has an individual [data source](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/#dataSource') - a collection of objects that map the column's actual values to display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: orders,
            columns: [{
                dataField: 'statusId', // provides actual values
                lookup: {
                    dataSource: [
                        { id: 1, name: 'Not Started' },
                        { id: 2, name: 'Need Assistance' },
                        { id: 3, name: 'In Progress' },
                        // ...
                    ],
                    valueExpr: 'id', // contains the same values as the "statusId" field provides
                    displayExpr: 'name' // provides display values
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list [dataSource]="orders">
        <dxi-column
            dataField="statusId"> <!-- provides actual values -->
            <dxo-lookup
                [dataSource]="lookupData"
                valueExpr="id" <!-- contains the same values as the "statusId" field provides -->
                displayExpr="name"> <!-- provides display values -->
            </dxo-lookup>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        orders = [ ... ];
        lookupData = [
            { id: 1, name: 'Not Started' },
            { id: 2, name: 'Need Assistance' },
            { id: 3, name: 'In Progress' },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

... or simply an array of column values if actual and display values are the same.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: orders,
            columns: [{
                dataField: 'status', // provides column values
                lookup: {
                    dataSource: [ // contains the same values as the "status" field provides
                        'Not Started',
                        'Need Assistance',
                        'In Progress',
                        // ...
                    ]
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list [dataSource]="orders">
        <dxi-column
            dataField="status"> <!-- provides column values -->
            <dxo-lookup
                [dataSource]="lookupData"> <!-- contains the same values as the "status" field provides -->
            </dxo-lookup>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        orders = [ ... ];
        lookupData = [
            'Not Started',
            'Need Assistance',
            'In Progress',
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

If your data source accepts **null** values, set the [allowClearing](/api-reference/_hidden/GridBaseColumn/lookup/allowClearing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/#allowClearing') option to **true**. In editing state, each of the lookup column's cells will have a button that nullifies the value.

Each cell in the lookup column is based on the [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') widget. Use [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editorOptions') to customize it. See the [Customize Editors](/concepts/05%20Widgets/TreeList/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/TreeList/Editing/#Customize_Editors') topic for more details.

#####See Also#####
- [Bind a Lookup Column to a Custom Data Source](/concepts/05%20Widgets/TreeList/99%20How%20To/Bind%20a%20Lookup%20Column%20to%20a%20Custom%20Data%20Source.md '/Documentation/Guide/Widgets/TreeList/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/')
- [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingFilterRow)

[tags] treelist, tree list, column types, lookup columns
