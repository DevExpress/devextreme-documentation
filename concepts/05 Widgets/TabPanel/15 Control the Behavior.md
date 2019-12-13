An end user can switch the views by swiping them or selecting tabs. Note that tab navigation is always enabled, while swiping is active only on touch devices by default. To enable it on all types of devices, assign **true** to the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#swipeEnabled') option. Otherwise, assign **false**.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            swipeEnabled: false
        });
    });

You can switch the views progrmmatically using the [selectedIndex](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#selectedIndex') or [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#selectedItem') option. 

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            selectedIndex: 1
        });
    });


The **TabPanel** can loop the views, which enables an end user to swipe through the last view to the first and vice versa. Views are looped by default. To disable looping, assign **false** to the [loop](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#loop') option.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            loop: false
        });
    });

To specify whether or not to animate switching between views, use the [animationEnabled](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#animationEnabled/') option.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            animationEnabled: true
        });
    });

#####See Also#####
- [TabPanel - Customize Item Appearance](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance')
- [TabPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview)
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/')

[tags]tab panel, tabPanel, switch views, animate switching, swipe
