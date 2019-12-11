The **TabPanel** is a widget consisting of the [Tabs](/concepts/05%20Widgets/Tabs/00%20Overview.md '/Documentation/Guide/Widgets/Tabs/Overview/') and [MultiView](/concepts/05%20Widgets/MultiView/00%20Overview.md '/Documentation/Guide/Widgets/MultiView/Overview/') widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview"
}

The following code adds a simple **TabPanel** to your page.

    <!--HTML-->
    <div id="tabPanelContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: [{
                title: 'Info',
                text: 'This is Info Tab'
            }, {
                title: 'Contacts',
                text: 'This is Contacts Tab'
            }, {
                title: 'Address',
                text: 'This is Address Tab'
            }]
        });
    });

Note that all data source items in the code above follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTabPanel/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/') pattern. This provides a default appearance for tabs and views; that is, **title** goes to the tab, and **text** goes to the view. But more often, the data source object structure does not follow this pattern. For correct rendering in these cases, specify a [custom template](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance'). 

#####See Also#####
#include common-link-configurewidget
- [TabPanel - Customize Item Appearance](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance')
- [TabPanel - Control the Behavior](/concepts/05%20Widgets/TabPanel/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TabPanel/Control_the_Behavior')
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/')

[tags]tab panel, tabPanel, collection container, collection widget, navigation, overview