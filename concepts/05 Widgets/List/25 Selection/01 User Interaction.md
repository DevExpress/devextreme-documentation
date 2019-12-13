In the **List** widget, selection is disabled by default. To enable it, choose one of selection modes using the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            selectionMode: "single" // or "multiple" | "all" | "none" (disables selection)
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        selectionMode="single"> <!-- or "multiple" | "all" | "none" (disables selection) -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

To select a **List** item, an end user simply clicks or taps it. Selected items become shaded. If you want to indicate selected items more manifestly, set the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#showSelectionControls') option to **true**. This setting adds a check box to each item on the **List**. Also, make this setting if you use the *"all"* **selectionMode**. Otherwise, the *"Select All"* check box will be missing.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            showSelectionControls: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        [showSelectionControls]="true"> 
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

When data in the **List** is [paginated](/concepts/05%20Widgets/List/08%20Paging.md '/Documentation/Guide/Widgets/List/Paging/'), you can choose whether the *"Select All"* check box will select all items on all pages or items on the currently rendered pages only. To make this choice, specify the [selectAllMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode') option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            selectAllMode: "allPages" // or "page"
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        selectAllMode="allPages"> <!-- or "page" -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

#####See Also#####
#include common-link-configurewidget
- [List - Localization](/concepts/05%20Widgets/List/50%20Localization.md '/Documentation/Guide/Widgets/List/Localization/')