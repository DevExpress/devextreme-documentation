The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') widget, but you can use the **Tabs** separately as well.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview/"
}

The following code adds the **Tabs** widget to your page. One of the tabs has an icon, another has a [badge](/api-reference/_hidden/dxTabsItem/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/#badge').

    <!--HTML-->
    <div id="tabsContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find" }
            ]
        });
    });

Note that field names in these data source items are [conventional](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/'). This provides a default appearance for tabs, which can be customized later.

#####See Also#####
#include common-link-configurewidget
- [Tabs - Customize Item Appearance](/concepts/05%20Widgets/Tabs/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Tabs/Customize_Item_Appearance')
- [Tabs - Control the Behavior](/concepts/05%20Widgets/Tabs/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/Tabs/Control_the_Behavior')
- [Tabs - Keyboard Support](/concepts/05%20Widgets/Tabs/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Tabs/Keyboard_Support')
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, collection container, collection widget, navigation, overview