<article data-show="Content/Applications/16_1/UIWidgets/dxProgressBar/markup.html,
        Content/Applications/16_1/UIWidgets/dxProgressBar/script.js,
        Content/Applications/16_1/UIWidgets/dxProgressBar/styles.css">

The [ProgressBar](/api-reference/10%20UI%20Widgets/dxProgressBar '/Documentation/ApiReference/UI_Widgets/dxProgressBar/') widget displays the current progress within the specified range. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the required range**

The range boundaries are specified by the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') options.

    <!--JavaScript-->
    var progressBarOptions = {
        min: 0,
        max: 100
    }

**Show/hide progress status**

The widget displays the current progress status if the [showStatus](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/showStatus.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#showStatus') option is set to *true*. The status format is specified using the [statusFormat](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/statusFormat.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#statusFormat') option, which takes on a string holding a Globalize format pattern, or a function that returns a status string. The function should take on the following arguments.

- **ratio**  
 Specifies the ratio of the current progress to the entire range. (From 0 to 1)

- **value**  
 The current widget value, which can also be accessed using the [value](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value') option.

<!---->

    <!--JavaScript-->
    var progressBarOptions = {
        min: 0,
        max: 1000,
        showStatus: true,
        statusFormat: function(ratio, value) {
            return ratio * 100 + "% (" + value + ")";
        }
    }

If the widget has the same options as illustrated in the example above, it will show the "35% (350)" status if the current value is 350.
</article>