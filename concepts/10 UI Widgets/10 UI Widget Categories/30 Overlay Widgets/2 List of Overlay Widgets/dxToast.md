<article data-show="Content/Applications/16_1/UIWidgets/dxToast/markup.html,
        Content/Applications/16_1/UIWidgets/dxToast/script.js,
        Content/Applications/16_1/UIWidgets/dxToast/styles.css">

The [Toast](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/') widget displays a toast with a specified message.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstoasttoasttoast/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/0%20Control%20The%20Widget%20Visibility.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility')  
- [Position a widget](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/1%20Position%20a%20Widget.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget')  
- [Adjust animation options](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/2%20Adjust%20Animation%20Options.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options')  
- [Specify display mode](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/3%20Display%20Modes.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes')  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify a message text**

The message text is specified using the [message](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/message.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#message') option.

    <!--JavaScript-->
    var toastOptions = {
        message: "Toast is displayed"
    }

**Hiding the toast**

By default, the toast message disappears after 2 seconds. You can change this behavior using the [displayTime](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/displayTime.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#displayTime') option, which specifies the display time in milliseconds.

    <!--JavaScript-->
    var toastOptions = {
        displayTime: 5000
    }

An end-user can drag the toast away from the screen to hide it before the specified display time is elapsed. To disable this functionality, set the [closeOnSwipe](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/closeOnSwipe.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnSwipe') option to *false*.

In addition, the **Toast** widget includes the following options that can enable additional ways to hide the widget before the display time elapses.

- [closeOnBackButton](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/closeOnBackButton.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnBackButton')  
 Specifies whether or not the widget is closed if a user presses the **Back** hardware button.

- [closeOnClick](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/closeOnClick.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnClick')  
 Specifies whether or not the toast is closed if a user clicks it.

- [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnOutsideClick')  
 Specifies whether or not the widget is closed if a user clicks outside of it.

- [closeOnSwipe](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/closeOnSwipe.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnSwipe')  
 Specifies whether or not the toast is closed if a user swipes it out of the screen boundaries.

**Specify the toast type**

You can also specify the toast type using the [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type') option, which takes on one of the following values: "info", "warning", "error", "success" and "custom". This option affects the toast color and the icon displayed in the message.

    <!--JavaScript-->
    var toastOptions = {
        type: "info"
    }

The "custom" type enables you to specify a custom toast appearance. In this case, the toast will display the contents of the widget container element.

    <!--HTML-->
    <div id="toastContainer">
        <p>Custom toast message</p>
        <div class="dx-icon dx-icon-toolbox"></div>
    </div>
</article>