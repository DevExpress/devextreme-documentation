An end user can select **NavBar** items in two different modes: *'single'* (by default) or *'multiple'*.  You can use the [selectionMode](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectionMode') option to change the mode. 

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectionMode: "multiple"
        });
    });

If you need an item to be preselected, pass its index in the data source array to the [selectedIndex](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedIndex') option.

    <!--JavaScript-->
    var navBarItems = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectedIndex: 1,
            maxIndex: 2
        });
    });

As an alternative, you can use the [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedItem') (for *"single"* **selectionMode**) or [selectedItems](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedItems') (for *"multiple"* **selectionMode**) options.

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
            maxIndex: 5
            selectedItem: navBarItems[3],
            // ---------- or ----------
            selectionMode: 'multiple',
            selectedItems: [ navBarItems[3], navBarItems[4] ]
        });
    });

#####See Also#####
- [NavBar - Customize Item Appearance](/concepts/05%20Widgets/NavBar/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/NavBar/Customize_Item_Appearance')
- [NavBar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7)
- [NavBar API Reference](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/')

[tags]nav bar, navBar, navigation bar, select, selection, item, items, index