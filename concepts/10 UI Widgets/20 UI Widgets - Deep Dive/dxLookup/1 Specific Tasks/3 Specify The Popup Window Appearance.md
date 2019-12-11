<article data-show="Content/Applications/16_1/UIWidgets/dxLookup/DisplayModes/markup.html,
        Content/Applications/16_1/UIWidgets/dxLookup/DisplayModes/script.js,
        Content/Applications/16_1/UIWidgets/dxLookup/DisplayModes/styles.css">

The **Lookup** widget can display the popup window as a standard overlay window (by default) or a popover pointing at the lookup input element. To display the popup window as a popover, set the [usePopover](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/usePopover.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#usePopover') option to *true*. The popover mode is available if the [full-screen mode](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/3%20Display%20Modes.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes') is disabled.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        fullScreen: false,
        usePopover: true
    }

The widget enables you to specify the title text for the popup window using the [title](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#title') option.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        title: "Available values"
    }

You can also specify a custom template for the popup window title using the [titleTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/titleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#titleTemplate') option. For detailed information on using templates, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') topic.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/') 

</article>