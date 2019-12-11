<article data-show="Content/Applications/16_1/UIWidgets/dxSwitch/markup.html,
        Content/Applications/16_1/UIWidgets/dxSwitch/script.js,
        Content/Applications/16_1/UIWidgets/dxSwitch/styles.css">

The [Switch](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/') widget is a switch that can have an **on** or **off** state. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsswitchswitchswitch/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the text for "enabled" and "disabled" states**

The [onText](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/onText.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#onText') and [offText](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/offText.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#offText') options specify the text displayed by the widget when it is in the **enabled** and **disabled** states respectively.

    <!--JavaScript-->
    var switchOptions = {
        onText: 'On',
        offText: 'Off'
    }

Note that the widget does not use text values to identify the state in the iOS and Windows Phone themes.

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Left/right arrow  
 decreases/increases the handle value by a [step](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step').

- Home/End  
 Sets the handle to the minimum/maximum value.
</article>