<article data-show="Content/Applications/16_1/UIWidgets/dxRangeSlider/markup.html,
        Content/Applications/16_1/UIWidgets/dxRangeSlider/script.js,
        Content/Applications/16_1/UIWidgets/dxRangeSlider/styles.css">

The [RangeSlider](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/') widget allows a user to specify a range of numeric values.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangesliderrangesliderrangeslider/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

Although the **RangeSlider** widget is an editor widget, [common Editor widget tasks](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks') described at the beginning of this article are carried out slightly differently for this widget.

**Get and Set the widget value**

As the widget is intended to specify a range, it does not contain the **value** option, but it contains the [start](/api-reference/10%20UI%20Widgets/dxRangeSlider/1%20Configuration/start.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#start') and [end](/api-reference/10%20UI%20Widgets/dxRangeSlider/1%20Configuration/end.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#end') options, which are used to specify the selected range.

    <!--JavaScript-->
    var rangeSliderOptions = {
        start: 30,
        end: 70
    }

**Handle the value change event**

The event handling function of the value changed event has other fields in the function parameter.  

    <!--JavaScript-->
    var valueChangeHandler = function(e){
        alert("The selected range is from " + e.start + " to " + e.end);
    }
    var rangeSliderOptions = {
        onValueChanged: valueChangeHandler
    };

As for the rest, the value event handling follows the same principles described in the [Handle the Value Change Event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event') topic.


**Specify the range of available values**

The boundaries of the available value range are specified by the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#max') options.

    <!--JavaScript-->
    var rangeSliderOptions = {
        min: 0,
        max: 100
    }


**Specify the slider step**

The [step](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step') option specifies the difference between neighboring widget values.

    <!--JavaScript-->
    var sliderOptions = {
        step: 10
    }

**Show/hide labels**

The **RangeSlider** widget can display labels for the boundary values. The label options are specified using the [label](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/') option, which takes an object containing the following properties.

- [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/#format')  
 Specifies a format for labels. For more information, refer to the [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/#format') option description.

- [position](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/position.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/#position')  
 Takes on the 'top' or 'bottom' values, which specify whether labels are located over or under the scale respectively.

- [visible](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/visible.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/#visible')  
 Specifies whether or not range slider labels are visible.

<!---->

    <!--JavaScript-->
    var rangeSliderOptions = {
        label: {
            visible: true,
            position: 'bottom',
            format: function(value) {
                return value + ' units';
            }
        }
    }

**Show/hide slider tooltip**

The widget can also display a tooltip for the slider. The Tooltip options are specified using the [tooltip](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/') option, which takes an object containing the following properties.

- [enabled](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/#enabled')  
Specifies whether or not the tooltip is enabled.

- [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/#format')  
 Specifies a format for the tooltip. For more information, refer to the [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/#format') option description.

- [position](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/position.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/#position')  
 Takes on the 'top' or 'bottom' values, which specify whether the tooltip is located over or under the slider, respectively.

- [showMode](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/showMode.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/#showMode')  
 Takes on the 'onHover' or 'always' values, which specify whether the widget shows the tooltip only when the pointer is over the slider or always, respectively.

<!---->

    <!--JavaScript-->
    var rangeSliderOptions = {
        tooltip: {
            enabled: true,
            position: 'bottom',
            showMode: 'always',
            format: function(value) {
                return value + ' units';
            }
        }
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Left/right arrow  
 Decreases/increases the current handle value by a [step](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#step').

- Home/End  
 Sets the current handle to the minimum/maximum value.

- Tab/Shift+Tab  
 Switches between handles.
 
- Page up/Page down  
 Decreases/increases the focused handle value by a value specified using the [keyStep](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/keyStep.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#keyStep') option.
</article>