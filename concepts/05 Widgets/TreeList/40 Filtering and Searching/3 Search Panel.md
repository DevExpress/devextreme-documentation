The search panel allows searching for values in several columns at once. Search is case-insensitive.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList SearchPanel](/images/treelist/visual_elements/search_panel.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingSearchPanel/"
}

To make the search panel visible, assign **true** to the [searchPanel](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/searchPanel/').**visible** option. You can set a column's [allowSearch](/api-reference/_hidden/GridBaseColumn/allowSearch.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowSearch') option to **false** if it should be excluded from searching. Note that this option inherits the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowFiltering') option's value by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            searchPanel: { visible: true },
            columns: [{
                // ...
                allowSearch: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-search-panel [visible]="true"></dxo-search-panel>
        <dxi-column [allowSearch]="false" ... ></dxi-column>
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

Use the **searchPanel**.[text](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel/text.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/searchPanel/#text') option to predefine the search value. You can also change it at runtime by calling the [searchByText(text)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/searchByText(text).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#searchByTexttext') method:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            searchPanel: {
                visible: true,
                text: "4/1/2015"
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("searchByText", "1/29/2016");

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-search-panel 
            [visible]="true" 
            [(text)]="searchText">
        </dxo-search-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        searchText: string = "4/1/2015";
        setSearchValue (searchText) {
            this.searchText = searchText;
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

Searching is performed differently depending on a column's [data type](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataType'). Numeric, Boolean, and date columns require that a user enters a full value into the search panel. Searching columns containing string values and specifying the search value using the API requires entering only a part of a value.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/')
