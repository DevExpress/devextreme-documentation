The **TabPanel** is a widget consisting of the [Tabs](/concepts/05%20Widgets/Tabs/00%20Overview.md '/Documentation/Guide/Widgets/Tabs/Overview/') and [MultiView](/concepts/05%20Widgets/MultiView/00%20Overview.md '/Documentation/Guide/Widgets/MultiView/Overview/') widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=SyGIlFZY_S0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=38" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **TabPanel** to your page.

    <!--HTML-->
    <div id="tabPanelContainer"></div>

<!---->

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
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [TabPanel - Customize Item Appearance](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance')
- [TabPanel - Control the Behavior](/concepts/05%20Widgets/TabPanel/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TabPanel/Control_the_Behavior')
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/')

[tags]tab panel, tabPanel, collection container, collection widget, navigation, overview