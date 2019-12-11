The search panel allows searching for values in several columns at once. Search is case-insensitive.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList SearchPanel](/images/treelist/visual_elements/search_panel.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingSearchPanel/jQuery/Light/"
}

To make the search panel visible, assign **true** to the [searchPanel](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/filterRow/').**visible** option. You can set a column's [allowSearch](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowSearch.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowSearch') option to **false** if it should be excluded from searching. Note that this option inherits the value of the [allowFiltering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowFiltering') option by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule } from 'devextreme-angular';
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

Search is performed differently depending on a column's [data type](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataType'). Numeric, Boolean, and date columns require that a user enters a full value into the search panel. For columns that contain string values, entering only a part of a value is enough to find it.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/5%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
