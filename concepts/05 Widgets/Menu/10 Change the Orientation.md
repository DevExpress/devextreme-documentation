To arrange items on the menu panel in a row (horizontally) or in a column (vertically), use the [orientation](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#orientation') option.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            orientation: "horizontal" // or "vertical"
        });
    });

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems"
        orientation="horizontal"> <!-- or "vertical" -->
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [ ... ];
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

---

If you need to shift the menu panel towards the bottom or the left side, specify <a href="http://www.w3schools.com/css/css_padding.asp" target="_blank">padding</a> for the `<div>` that contains the widget. For example, the following code shifts the widget towards the bottom.

    <!--HTML--><div id="menuContainer" style="padding-top:500px"></div>

When the widget is positioned at the bottom or at the left side, you may want to change the direction in which the drop-down menus open. For this purpose, set the [submenuDirection](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/submenuDirection.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#submenuDirection') option to _"rightOrTop"_.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            orientation: "horizontal", // or "vertical"
            submenuDirection: "rightToTop"
        });
    });

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems"
        submenuDirection="rightToTop"
        orientation="horizontal"> <!-- or "vertical" -->
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [ ... ];
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

---

#####See Also#####
- [Menu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview)
- [Menu API Reference](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/')

[tags]menu, orientation, direction, position, padding