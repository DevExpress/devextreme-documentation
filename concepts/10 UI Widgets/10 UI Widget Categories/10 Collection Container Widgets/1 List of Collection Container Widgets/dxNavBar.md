<article data-show="Content/Applications/16_1/UIWidgets/dxNavBar/markup.html,
        Content/Applications/16_1/UIWidgets/dxNavBar/script.js,
        Content/Applications/16_1/UIWidgets/dxNavBar/styles.css">

The [NavBar](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/') widget contains items used to navigate through application views.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify an item caption and icon**

In most cases, a NavBar item includes an icon and a caption specified by the relevant properties of the corresponding data source item object.
The item caption is specified by the [text](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/text.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#text') property. The item icon can be specified by the [icon](/api-reference/10%20UI%20Widgets/dxTabs/5%20Default%20Item%20Template/icon.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#icon') property.

If the [icon library](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') contains the required icon, assign the icon name to the **icon** property.

    <!--JavaScript-->
    var navItems = [
        { text: "Home", icon: "home" },
        { text: "About", icon: "info" }
    ]

The **icon** property also accepts a path to a custom image file.

    <!--JavaScript-->
    var navItems = [
        { text: "Home", icon: "images/icons/home.png" },
        { text: "About", icon: "images/icons/info.png" }
    ];

**Display an item badge**

You can also display a badge for a NavBar item. If the item object includes the [badge](/api-reference/10%20UI%20Widgets/dxNavBar/5%20Default%20Item%20Template/badge.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#badge') property, the widget displays the text assigned to this property as a badge.

    <!--JavaScript-->
    var navItems = [
        { text: "Home", icon: "home" },
        { text: "About", icon: "info" },
        { text: "favorites", icon: "favorites", badge: "new" }
    ];

**Keyboard support**

An end-user can use the Left/Right arrow key to move focus to the previous/next item.
</article>