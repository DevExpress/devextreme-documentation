The **NavBar** is a widget that navigates the application views. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7"
}

The following code adds the **NavBar** to your page. All navigation items have icons and one of them has a [badge](/api-reference/10%20UI%20Widgets/dxNavBar/5%20Default%20Item%20Template/badge.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#badge'). 

---
##### jQuery

    <!--HTML-->
    <div id="navBarContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find" },
                { text: "Favorites", icon: "favorites", badge: "New" },
                { text: "About", icon: "info" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar>
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find"></dxi-item>
        <dxi-item text="Favorites" icon="favorites" badge="New"></dxi-item>
        <dxi-item text="About" icon="info"></dxi-item>
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

Note that all data source items follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxNavBar/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/') pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
#include common-link-configurewidget
- [NavBar - Customize Item Appearance](/concepts/05%20Widgets/NavBar/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/NavBar/Customize_Item_Appearance')
- [NavBar - Items Selection](/concepts/05%20Widgets/NavBar/10%20Items%20Selection.md '/Documentation/Guide/Widgets/NavBar/Items_Selection')
- [NavBar API Reference](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/')

[tags]dxnavbar, nav bar, navBar, navigation bar, collection container, collection widget, navigation, overview