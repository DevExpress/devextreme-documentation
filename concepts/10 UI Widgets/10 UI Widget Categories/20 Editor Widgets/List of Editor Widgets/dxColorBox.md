<article>
The [ColorBox](/api-reference/10%20UI%20Widgets/dxColorBox '/Documentation/ApiReference/UI_Widgets/dxColorBox/') widget allows a user to specify a color value manually or pick it out from the drop-down editor. 

In addition to common Editor functionality, the **ColorBox** widget supports options common for [Overlay widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/'), which affect popup window behavior.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscolorboxcolorboxcolorbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Access the selected color**

You can get or set the selected color using the [value](/api-reference/10%20UI%20Widgets/dxColorBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#value') option. You can use any CSS compatible color format ("#FF0000", "Red", "rgb(255, 0, 0)") to specify the current color. If a user selects a color using the popup window, the selected color is displayed in the hexadecimal format ("#FF0000").

    <!--JavaScript-->
    var colorBoxOptions = {
        value: "#FF9000"
    }

**Enable alpha channel support**

By default, the widget enables an end-user to select non-transparent colors. Set the [editAlphaChannel](/api-reference/10%20UI%20Widgets/dxColorBox/1%20Configuration/editAlphaChannel.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#editAlphaChannel') option to *true* to enable an end-user to specify a color containing the alpha channel component.

    <!--JavaScript-->
    var colorBoxOptions = {
        value: "rgba(255, 144, 0, 0.3)",
        editAlphaChannel: true
    }

If this option is set to true, the widget displays the selected color in the "rgba(255, 144, 0, 0.3)" format.

**Specify button text**

The widget enables you to specify a custom text for the **OK** and **Cancel** buttons displayed at the bottom of the popup window using the [applyButtonText](/api-reference/10%20UI%20Widgets/dxColorBox/1%20Configuration/applyButtonText.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#applyButtonText') and [cancelButtonText](/api-reference/10%20UI%20Widgets/dxColorBox/1%20Configuration/cancelButtonText.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#cancelButtonText') options respectively.

    <!--JavaScript-->
    var colorBoxOptions = {
        applyButtonText: "Apply color",
        cancelButtonText: "Close window"
    }

The string representation of the selected color can be accessed using the [value](/api-reference/10%20UI%20Widgets/dxColorBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#value') option.

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Up/down/left/right arrow  
 Move the central color handler.

- Ctrl + up/down arrow  
 Move RGB handler at up/down.

- Ctrl + left/right arrow  
 Move alpha channel handler left/right.

- Enter
 Select the highlighted day.

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxColorBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxColorBox/script.js,
        Content/Applications/16_1/UIWidgets/dxColorBox/styles.css"></div>
</article>