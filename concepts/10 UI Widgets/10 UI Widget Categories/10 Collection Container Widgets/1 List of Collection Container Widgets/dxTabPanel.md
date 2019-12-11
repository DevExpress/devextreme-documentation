<article data-show="Content/Applications/16_1/UIWidgets/dxTabPanel/markup.html,
        Content/Applications/16_1/UIWidgets/dxTabPanel/script.js,
        Content/Applications/16_1/UIWidgets/dxTabPanel/styles.css">

The [TabPanel](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/') widget consists of the [Tabs](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/') and [MultiView](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/') widgets. It automatically synchronizes the selected tab and the currently displayed view. If a user switches a tab, the widget displays the appropriate view and when a user switches a view by swiping, the widget selects the appropriate tab.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabpaneltabpaneltabpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

The set of items displayed by the widget is [specified by the dataSource option](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source'). The widget creates a tab and a view for each item. 

The widget includes the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemTemplate') and [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#titleTemplate) options, which enable you to customize the appearance of an item view and item tab respectively.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') - principles of item title appearance customization are the same as those of widget appearance customization
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/') - principles of item title appearance customization are the same as those of widget appearance customization


You can specify whether or not the widget enables a user to switch items by swiping a view. Assign *true* to the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#swipeEnabled') option to enable this feature, otherwise assign *false*.

    <!--JavaScript-->
    var tabPanelOptions = {
        swipeEnabled: true
    }

The widget can display views in a loop. If this mode is enabled, it scrolls back to the first item if an end-user navigates forward from the last item, or goes to the last item if an end-user navigates backward from the first item. The loop mode is enabled by default. To disable it, assign *false* to the [loop](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#loop') configuration option.

    <!--JavaScript-->
    var tabPanelOptions = {
        loop: false
    }

To specify whether or not to animate switching between items, use the [animationEnabled](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#animationEnabled') option.

    <!--JavaScript-->
    var tabPanelOptions = {
        animationEnabled: true
    }

**Keyboard support**

An end-user can use the Left/Right arrow key to display the previous/next view.
</article>