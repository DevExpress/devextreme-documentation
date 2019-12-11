<article data-show="Content/Applications/16_1/UIWidgets/dxDateBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxDateBox/script.js,
        Content/Applications/16_1/UIWidgets/dxDateBox/styles.css">

The [DateBox](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/') widget displays the date and time value in a specified format, and enables a user to pick the required date/time value within the specified range.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsdateboxdateboxdatebox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the date range**

The date time range is specified by the [min](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#max') options, which take on a [Date](https://www.w3schools.com/js/js_dates.asp) object representing the earliest and latest date and time respectively.

    <!--JavaScript-->
    var dateBoxOptions = {
        min: new Date(2000,1,1),
        max: new Date(2020,12,31)
    }

**Specify the format of the data displayed by the widget**

Besides the date information displayed by default, the **DateBox** widget can display time information, and the date and time simultaneously depending on the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option, which can take on one of the following values.

- **date**  
 The widget displays only the date.
 
- **time**  
 The widget displays only the time.
 
- **datetime**  
 The widget displays both the date and the time.

<!---->

    <!--JavaScript-->
    var dateBoxOptions = {
        format: "datetime"
    }

**Specify the date/time picker type**

The widget enables an end-user to pick date/time using a drop-down calendar, rollers or a value list depending on the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') option. In addition to the desired picker type, the option accepts the "native" value, which makes the date box use the picker native for the current platform.

**Specify the value format string**

The [displayFormat](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/displayFormat.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#displayFormat') option specifies the Globalize date format used to display data picked from the calendar.

    <!--JavaScript-->
    var dateBoxOptions = {
        displayFormat: "D"
    }

**Adjust widget behavior**

You can specify whether the widget value is applied instantly or when a user clicks the apply button using the [applyValueMode](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#applyValueMode') option.

    <!--JavaScript-->
    var dateBoxOptions = {
        pickerType: calendar,
        applyValueMode: "instantly"
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget, which are available when a popup window is displayed.

- Tab/Shift+Tab  
 Moves focus to the next/previous date or time part.

- Up/down arrow  
 Changes the focused value by 1 step.

- Page up/down  
 Changes the focused value by 5 steps.

- Enter (Space)  
 Applies the current values and closes the popup window.
</article>