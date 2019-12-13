An end user can select **Tabs** items in two different modes: *'single'* (by default) or *'multiple'*. You can use the [selectionMode](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectionMode') option to change the mode. 

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabItems,
            selectionMode: "multiple"
        });
    });

If you need a tab to be preselected or to select it programmatically, pass its index in the data source array to the [selectedIndex](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedIndex') option.

    <!--JavaScript-->
    var tabs = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            // Preselects the tab with index 1
            selectedIndex: 1
        });
    });

<!---->

    <!--JavaScript-->// Selects the tab with index 0
    $("#tabsContainer").dxTabs("option", "selectedIndex", 0);

As an alternative, you can use the [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedItem') (for *"single"* **selectionMode**) or [selectedItems](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedItems') (for *"multiple"* **selectionMode**) options.

    <!--JavaScript-->
    var tabs = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            selectedItem: tabs[1],
            // === or ===
            selectionMode: 'multiple',
            selectedItems: [ tabs[1], tabs[2] ]
        });
    });

When the total length of all tabs exceeds the **Tabs** container, the widget shows navigation buttons that help an end user scroll the tab strip. This behavior is default only for desktops. To enable it on all types of devices, assign **true** to the [showNavButtons](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/showNavButtons.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#showNavButtons') option. Otherwise, assign **false**.

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            showNavButtons: true
        });
    });

#####See Also#####
- [Tabs - Customize Item Appearance](/concepts/05%20Widgets/Tabs/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Tabs/Customize_Item_Appearance')
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, select item, selection mode, nav buttons, navigation buttons, index
