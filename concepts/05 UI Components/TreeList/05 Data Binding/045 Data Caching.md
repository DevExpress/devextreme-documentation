The **TreeList** caches data by default. This allows the UI component to decrease the loading time when a user sorts and filters data or expands a row the second time. To update data in cache, call the [refresh()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#refresh') method of the UI component or the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("refresh");
    // ===== or =====
    var treeListDataSource = $("#treeListContainer").dxTreeList("getDataSource");
    treeListDataSource.reload();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        refreshData () {
            this.treeList.instance.refresh();
            // ===== or =====
            let treeListDataSource = this.treeList.instance.getDataSource();
            treeListDataSource.reload();
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

[note]When data processing operations are [delegated to the server](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/'), data is loaded every time these operations are performed even if caching is enabled. 

If your data source changes frequently, disable caching by assigning **false** to the **cacheEnabled** option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            cacheEnabled: false
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [cacheEnabled]="false">
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
#include common-link-callmethods
- [TreeList - Access the DataSource](/concepts/05%20UI%20Components/TreeList/05%20Data%20Binding/040%20Access%20the%20DataSource.md '/Documentation/Guide/UI_Components/TreeList/Data_Binding/Access_the_DataSource/')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
- [TreeList API Reference](/api-reference/10%20UI%20Components/dxTreeList '/Documentation/ApiReference/UI_Components/dxTreeList/')