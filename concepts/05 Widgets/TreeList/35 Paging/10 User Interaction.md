This section describes how to configure the pager - a component that allows users to navigate through pages and change their size at runtime. The pager consists of the page navigator and several optional elements: the page size selector, navigation buttons, and page information. 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Pager](/images/TreeList/visual_elements/pager.png)

Set the [showNavigationButtons](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/showNavigationButtons.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/pager/#showNavigationButtons') and the [showPageSizeSelector](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/showPageSizeSelector.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/pager/#showPageSizeSelector') options to **true** to show the navigation buttons and the page size selector. The set of available page sizes depends on the size of the [data source](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource'). You can change this set using the [allowedPageSizes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/allowedPageSizes.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/pager/#allowedPageSizes') option.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 50],
                showNavigationButtons: true
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-pager
            [showPageSizeSelector]="true"
            [allowedPageSizes]="[10, 20, 50]"
            [showNavigationButtons]="true">
        </dxo-pager>
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

Assign **true** to the [showInfo](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/showInfo.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/pager/#showInfo') option to show the page information. You can change the default text by specifiyng the [infoText](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/infoText.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/pager/#infoText').


---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            paging: { enabled: true }
            pager: {
                showInfo: true,
                infoText: "Page #{0}. Total: {1} ({2} items)" 
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-paging 
            [enabled]="true">
        </dxo-paging>
        <dxo-pager
            [showInfo]="true"
            infoText="Page #{0}. Total: {1} ({2} items)">
        </dxo-pager>
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


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Paging/"
}
