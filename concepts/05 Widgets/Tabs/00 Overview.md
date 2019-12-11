The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') widget, but you can use the **Tabs** separately as well.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tabs-overview"
}

The following code adds the **Tabs** widget to your page. One of the tabs has an icon, another has a [badge](/api-reference/10%20UI%20Widgets/dxTabs/5%20Default%20Item%20Template/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/#badge').

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

Note that all data source items in the code above follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTabs/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/') pattern. This provides a default appearance for tabs, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Tabs - Customize Item Appearance](/concepts/05%20Widgets/Tabs/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Tabs/Customize_Item_Appearance')
- [Tabs - Control the Behavior](/concepts/05%20Widgets/Tabs/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/Tabs/Control_the_Behavior')
- [Tabs - Keyboard Support](/concepts/05%20Widgets/Tabs/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Tabs/Keyboard_Support')
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, collection container, collection widget, navigation, overview