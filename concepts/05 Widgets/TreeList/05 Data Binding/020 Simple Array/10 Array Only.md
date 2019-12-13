To bind the **TreeList** to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource') option.

---
##### jQuery

    <!--JavaScript-->
    var employees = [
        { id: '1', fullName: "John Heart", position: "CEO" }, 
        { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" }, 
        { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { id: '2', fullName: "Greta Sims", position: "HR Manager" }
    ];

    $(function(){
        $("#treeListContainer").dxTreeList({
            dataSource: employees
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employees = [
            { id: '1', fullName: "John Heart", position: "CEO" }, 
            { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" }, 
            { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" }, 
            { id: '2', fullName: "Greta Sims", position: "HR Manager" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="employees">
    </dx-tree-list>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayPlainStructure/"
}

If objects in the array need to be processed (sorted or filtered), you can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'). For example, in the following code, a Query sorts objects in the `employees` array in the descending order by the `fullName` field.

---
##### jQuery

    <!--JavaScript-->
    var employees = [
        { id: "1", parentId: "0", fullName: "Samantha Bright",  position: "COO" },
        // ...
    ];

    $(function(){
        $("#treeListContainer").dxTreeList({
            dataSource: DevExpress.data.query(employees)
                            .sortBy("fullName", true)
                            .toArray()
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        employees = [
            { id: "1", parentId: "0", fullName: "Samantha Bright",  position: "COO" },
            // ...
        ];
        getSortedEmployees () {
            return query(this.employees).sortBy("fullName", true).toArray();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="getSortedEmployees()">
    </dx-tree-list>

---

#####See Also#####
- [Data Layer - Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')
- [TreeList | Data Binding - ArrayStore](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/020%20Simple%20Array/15%20ArrayStore.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Simple_Array/ArrayStore/')

[tags]treeList, data binding, provide data, array, process data, query