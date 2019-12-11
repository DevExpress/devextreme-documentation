<article data-show="Content/Applications/16_1/UIWidgets/dxLoadPanel/markup.html,
        Content/Applications/16_1/UIWidgets/dxLoadPanel/script.js,
        Content/Applications/16_1/UIWidgets/dxLoadPanel/styles.css">

The [LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/') widget is an overlaying element indicating that loading is in progress.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/0%20Control%20The%20Widget%20Visibility.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility')  
- [Position a widget](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/1%20Position%20a%20Widget.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget')  
- [Adjust animation options](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/2%20Adjust%20Animation%20Options.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options')  
- [Specify display mode](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/3%20Display%20Modes.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes')  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify the load panel appearance**

You can specify the message displayed by the load panel using the [message](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/message.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#message') option.

By default, the widget displays a load indicator that looks like a turning circle in addition to the specified message. You can assign false to the [showIndicator](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/showIndicator.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showIndicator') option to disable the load indicator, which can help to avoid problems with animation on a slow device.

    <!--JavaScript-->
    var loadPanelOptions = {
        message: "Loading...",
        showIndicator: false
    }

**Specify the display delay**

You can display the load panel immediately after a loading process has been started or after the delay specified by the [delay](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/delay.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#delay') option.

    <!--JavaScript-->
    var loadPanelOptions = {
        message: "Loading...",
        delay: 1000
    }

**Use a custom loading indicator**

If you need to use a custom image instead the standard indicator icon, specify the required image URL using the [indicatorSrc](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#indicatorSrc') option.

    <!--JavaScript-->
    var loadPanelOptions = {
        message: "Loading...",
        indicatorSrc: "images/indicator.png"
    }

**Show/hide the pane**

The widget can display only the load indicator without the surrounding pane. This can help you avoid the use of excess visual elements when indicating the loading process. Set the [showPane](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/showPane.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showPane') option to *false* to hide the pane.

    <!--JavaScript-->
    var loadPanelOptions = {
        showPane: false
    }
</article>