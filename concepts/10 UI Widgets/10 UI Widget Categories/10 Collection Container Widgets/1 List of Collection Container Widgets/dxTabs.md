<article data-show="Content/Applications/16_1/UIWidgets/dxTabs/markup.html,
        Content/Applications/16_1/UIWidgets/dxTabs/script.js,
        Content/Applications/16_1/UIWidgets/dxTabs/styles.css">

The [Tabs](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/') widget is a tab strip used to switch between pages. This widget is used as a part of the [TabPanel](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/') widget, which includes also the [MultiView](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/') widget used to display the selected tab contents. However, you can use the **Tabs** widget separately.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabstabstabs/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify the icon and caption of a tab**

In most cases, a tab item includes an icon and a caption specified by the appropriate properties of the corresponding data source item object.
The item caption is specified by the [text](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/text.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/#text') property. The item icon can be specified by the [icon](/api-reference/10%20UI%20Widgets/dxTabs/5%20Default%20Item%20Template/icon.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/#icon') property.

If the [icon library](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') contains the required icon, assign the icon name to the **icon** property.

    <!--JavaScript-->
    var tabItems = [
        { text: "Home", icon: "home" },
        { text: "About", icon: "info" }
    ]

The **icon** property also accepts a path to a custom image file.

    <!--JavaScript-->
    var tabItems = [
        { text: "Home", icon: "images/icons/home.png" },
        { text: "About", icon: "images/icons/info.png" }
    ];

**Keyboard support**

An end-user can use the Left/Right arrow key to move focus to the previous/next tab.
</article>