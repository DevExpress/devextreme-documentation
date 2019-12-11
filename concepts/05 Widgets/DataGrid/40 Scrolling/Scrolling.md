Scrolling allows browsing data outside the widget's viewport. The following scrolling modes are available in the **DataGrid**:

- **Standard**      
Loads all rows simultaneously. A user scrolls within one page if [paging](/concepts/05%20Widgets/DataGrid/35%20Paging '/Documentation/Guide/Widgets/DataGrid/Paging/') is enabled.

- **Virtual**       
Pages are loaded when entering the viewport and removed once they leave. This mode allows users to scroll data by jumping swiftly from one row to another. Scrolling in this mode becomes smoother if the widget preloads the adjacent pages. You can enable this feature by setting the **scrolling**.[preloadEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/preloadEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#preloadEnabled') option to **true**, but note that it may cause lags on low-performing devices.

- **Infinite**      
The next page is loaded once the scrollbar reaches the end of its scale. Use this mode if a user should scroll data gradually, from the first to the last page.

    [note]Set the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing') option to **false** when using infinite scrolling in conjunction with grouping.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/InfiniteScrolling/",
    name: "Infinite Scrolling"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/VirtualScrolling/",
    name: "Local Virtual Scrolling"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RemoteVirtualScrolling/",
    name: "Remote Virtual Scrolling"
}

Use the **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode') option to specify the current scrolling mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            scrolling: {
                mode: "standard" // or "virtual" | "infinite"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-scrolling
            mode="standard"> <!-- or "virtual" | "infinite" -->
        </dxo-scrolling>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

The **DataGrid** adapts its scrolling mechanism to the current platform. It utilizes native scrolling on most platforms, except non-Mac desktops and Android 4.0 below devices, where the widget simulates scrolling. You can force the **DataGrid** to use native or simulated scrolling on all platforms by setting the [useNative](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/useNative.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#useNative') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            scrolling: {
                useNative: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-scrolling
            [useNative]="true">
        </dxo-scrolling>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

The current platform determines the native scrolling settings and you cannot adjust them, but you can control the simulated scrolling. Particularly, you can specify whether a user scrolls the content with a swipe gesture or scrollbar by setting the [scrollByContent](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/scrollByContent.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#scrollByContent') and [scrollByThumb](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/scrollByThumb.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#scrollByThumb') options. The [showScrollbar](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/showScrollbar.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#showScrollbar') option specifies when the scrollbar should appear.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ... >
        <dxo-scrolling
            [useNative]="false"
            [scrollByContent]="true"
            [scrollByThumb]="true"
            showScrollbar="onHover"> <!-- or "onClick" | "always" | "never" -->
        </dxo-scrolling>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

If you need to access and customize other scrolling settings, get the instance of the widget's scrollable part by calling the [getScrollable()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getScrollable().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getScrollable') method.

#####See Also#####
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)
