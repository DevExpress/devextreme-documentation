Menu items are displayed using templates. In a common case, you can use a default item template. This template displays text with an icon based on the **text** and **icon** item data source fields. In addition, the default item template supports the **beginGroup** field that specifies whether or not a group separator is displayed over the item. Set this field to *true* to display a separator.

    <!--JavaScript-->
    var menuItems = [
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/VSIntegration.png',
            text: 'VS Integration',
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/SPAFramework.png',
            text: 'SPA Framework',
            beginGroup: true,
        },
        {
            icon: '/Content/images/doc/16_1/PhoneJS/menus/UIWidgets.png',
            text: 'UI Widgets',
        },
        . . .
    ]

You can define a custom item template. It can also be based on specific fields of an item data source. 

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') 
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')