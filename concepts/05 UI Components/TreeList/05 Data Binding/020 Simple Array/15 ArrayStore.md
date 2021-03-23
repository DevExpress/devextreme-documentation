If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.ArrayStore({
                data: employees,
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        employees = [
            // ...
        ];
        employeeStore = new ArrayStore({
            data: this.employees,
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="employeeStore">
    </dx-tree-list>

---

Data kept in the **ArrayStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can sort data.

---
##### jQuery

    <!--JavaScript-->
    var employees = [
        { id: '1', fullName: "John Heart", position: "CEO" }, 
        { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" }, 
        { id: '1_2', parentId: '1', fullName: "Arthur Miller",  position:"CTO" },
        { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { id: '2', fullName: "Greta Sims", position: "HR Manager" }
    ];
    
    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.DataSource({
                store: employees,
                sort: { getter: "fullName", desc: true }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        employees = [
            // ...
        ];
        employeeDataSource = new DataSource({
            store: this.employees,
            sort: { getter: "fullName", desc: true }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="employeeDataSource">
    </dx-tree-list>

---

[note]Even if you have [passed a JavaScript array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/') to the **dataSource** property, the TreeList automatically places it into an **ArrayStore** wrapped in the **DataSource** that you can get using the [getDataSource()](/api-reference/10%20UI%20Components/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#getDataSource') method.

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - DataSource Examples | In-memory Data](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#In-memory_Data')

[tags]treeList, data binding, provide data, ArrayStore, DataSource, process data