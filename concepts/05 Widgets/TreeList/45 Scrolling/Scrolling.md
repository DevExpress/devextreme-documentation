Scrolling enables a user to browse data that lies outside the widget's viewport. The following scrolling modes are available in the **TreeList**:

- **Standard**      
Loads all rows simultaneously.

- **Virtual**       
Rows are loaded when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data jumping swiftly from one row to another. Scrolling in this mode becomes smoother if the widget preloads the adjacent pages. You can enable this feature by setting the **scrolling**.[preloadEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/preloadEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#preloadEnabled') option to **true**, but note that it may cause lags on low-performing devices.

Use the **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#mode') option to specify the current scrolling mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            scrolling: {
                mode: "standard" // or "virtual"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-scrolling
            mode="standard"> <!-- or "virtual" -->
        </dxo-scrolling>
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

The **TreeList** adapts its scrolling mechanism to the current platform. It utilizes native scrolling on most platforms, except non-Mac desktops and Android 4.0 below devices, where the widget simulates scrolling. You can force the **TreeList** to use native or simulated scrolling on all platforms by setting the [useNative](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/useNative.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#useNative') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            scrolling: {
                useNative: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-scrolling
            [useNative]="true">
        </dxo-scrolling>
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

The current platform determines the native scrolling settings and you cannot adjust them, but you can control the simulated scrolling. Particularly, you can specify whether a user scrolls the content with a swipe gesture or the scrollbar by setting the [scrollByContent](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/scrollByContent.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#scrollByContent') and [scrollByThumb](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/scrollByThumb.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#scrollByThumb') options. Also, set the [showScrollbar](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/showScrollbar.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/scrolling/#showScrollbar') option to specify when the scrollbar should appear.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            scrolling: {
                useNative: false,
                scrollByContent: true,
                scrollByThumb: true,
                showScrollbar: "onHover" // or "onClick" | "always" | "never"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-scrolling
            [useNative]="false"
            [scrollByContent]="true"
            [scrollByThumb]="true"
            showScrollbar="onHover"> <!-- or "onClick" | "always" | "never" -->
        </dxo-scrolling>
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
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
