Regardless of the data source you use, the **TreeList** always wraps it in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). To get a **DataSource** instance, call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getDataSource') method.

---
##### jQuery

    <!--JavaScript-->
    var ds = $("#treeListContainer").dxTreeList("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.treeList.instance.getDataSource();
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

You can now call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') exposed by the **DataSource**. For example, you can reload data using the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method.

    <!--JavaScript-->
    ds.reload();

#####See Also#####
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
- [TreeList API Reference](/api-reference/10%20UI%20Widgets/dxTreeList '/Documentation/ApiReference/UI_Widgets/dxTreeList/')

[tags]treeList, data binding, access data source, getDataSource, reload data
