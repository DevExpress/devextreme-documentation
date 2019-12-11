The **NavBar** is a widget that navigates the application views. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7"
}

The following code adds the **NavBar** to your page. All navigation items have icons and one of them has a [badge](/api-reference/10%20UI%20Widgets/dxNavBar/5%20Default%20Item%20Template/badge.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#badge'). 

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

Note that all data source items follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxNavBar/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/') pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [NavBar - Customize Item Appearance](/concepts/05%20Widgets/NavBar/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/NavBar/Customize_Item_Appearance')
- [NavBar - Items Selection](/concepts/05%20Widgets/NavBar/10%20Items%20Selection.md '/Documentation/Guide/Widgets/NavBar/Items_Selection')
- [NavBar API Reference](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/')

[tags]nav bar, navBar, navigation bar, collection container, collection widget, navigation, overview