An end user can select NavBar items in two different modes: *'single'* (by default) or *'multiple'*.  You can use the [selectionMode](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxNavBar/Configuration/#selectionMode') property to change the mode. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectionMode: "multiple"
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar ...
        selectionMode="multiple">
        <dxi-item text="User" icon="user"></dxi-item>
        <!-- ... -->
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

If you need an item to be preselected, pass its index in the data source array to the [selectedIndex](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Components/dxNavBar/Configuration/#selectedIndex') property.

---
##### jQuery

    <!--JavaScript-->
    var navBarItems = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectedIndex: 1
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar [selectedIndex]="1">
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find"></dxi-item>
        <dxi-item text="Favorites" icon="favorites"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

As an alternative, you can use the [selectedItem](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Components/dxNavBar/Configuration/#selectedItem') (for *"single"* **selectionMode**) or [selectedItems](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Components/dxNavBar/Configuration/#selectedItems') (for *"multiple"* **selectionMode**) properties. This approach is suitable if the NavBar items are specified using an array rather than the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') markup component.

---
##### jQuery

    <!--JavaScript-->
    var navBarItems = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" },
        { text: "About", icon: "info" },
        { text: "Home", icon: "home" },
        { text: "URI", icon: "tips" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectedItem: navBarItems[3],
            // ========== or ==========
            selectionMode: 'multiple',
            selectedItems: [ navBarItems[3], navBarItems[4] ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar
        [items]="navBarItems"
        [selectedItem]="navBarItems[3]">
        <!-- ========== or ========== 
        selectionMode="multiple"
        [selectedItems]="[ navBarItems[3], navBarItems[4] ]"> -->
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        navBarItems = [
            { text: "User", icon: "user" },
            { text: "Find", icon: "find" },
            { text: "Favorites", icon: "favorites" },
            { text: "About", icon: "info" },
            { text: "Home", icon: "home" },
            { text: "URI", icon: "tips" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

#####See Also#####
- [NavBar - Customize Item Appearance](/concepts/05%20UI%20Components/NavBar/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/NavBar/Customize_Item_Appearance')
- [NavBar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Navbar/Overview)
- [NavBar API Reference](/api-reference/10%20UI%20Components/dxNavBar '/Documentation/ApiReference/UI_Components/dxNavBar/')

[tags]nav bar, navBar, navigation bar, select, selection, item, items, index