The **TreeList** caches data by default. This allows the widget to decrease the loading time when a user sorts and filters data or expands a row the second time. To update data in cache, call the [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#refresh') method of the widget or the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("refresh");
    // ===== or =====
    var treeListDataSource = $("#treeListContainer").dxTreeList("getDataSource");
    treeListDataSource.load();

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
            treeListDataSource.load();
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

[note]When data processing operations are [delegated to the server](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/035%20Custom%20Sources '/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/'), data is loaded every time these operations are performed even if caching is enabled. 

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
- [TreeList - Access the DataSource](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/040%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Access_the_DataSource/')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
- [TreeList API Reference](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Widgets/dxTreeList/')