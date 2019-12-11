Use the [clearFilter(filterName)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter(filterName).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearFilterfilterName') method to clear filtering settings. You can call it with one of the following parameters:

- *"row"*       
Clears the [filter row](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row').
- *"header"*        
Clears the [header filter](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter').
- *"search"*        
Clears the [search panel](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Search_Panel').
- *"dataSource"*        
Clears the data source filter, whether defined [in the configuration](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') or applied by the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#filterfilterExpr') method.
- *Without any parameter*         
Clears all filters at once.

<!---->

---
##### jQuery

    <!--JavaScript-->// Clears the search panel
    $("#treeListContainer").dxTreeList("clearFilter", "search");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        clearSearchPanel () {
            this.treeList.instance.clearFilter("search");
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