The initial and runtime filtering API depends on the UI element and is described in the topics above. This API is designed to filter data the data source returns. If you need to pre-filter data in the data source, call the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#filterfilterExpr') method by passing a [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') as an argument. Note that this filter can only be cleared [programmatically](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/8%20Clear%20Filtering%20Settings.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Clear_Filtering_Settings').

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("filter", [
        [ "Cost", ">", 1000 ],
        "and",
        [ "Cost", "<=", 2000 ]
    ]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        filterByCost () {
            this.treeList.instance.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
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

You can create a filter that combines all the applied filters by calling the [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getCombinedFilter') method. It returns a filter with [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') by default. Call it by passing **true** as the argument to get the combined filter with [data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField').

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("getCombinedFilter", true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getCombinedFilter () {
            return this.treeList.instance.getCombinedFilter(true);
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
- [Filtering API - Clear Filtering Settings](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/8%20Clear%20Filtering%20Settings.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Clear_Filtering_Settings')