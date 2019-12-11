<article data-show="Content/Applications/16_1/UIWidgets/dxSlider/markup.html,
        Content/Applications/16_1/UIWidgets/dxSlider/script.js,
        Content/Applications/16_1/UIWidgets/dxSlider/styles.css">

The [Slider](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/') widget allows a user to specify a numeric value within a specified range. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeslidersliderslider/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the range of available values**

The boundaries of the available value range are specified by the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#max') options.

    <!--JavaScript-->
    var sliderOptions = {
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

The **Slider** widget can display labels for the boundary values. The label options are specified using the label option, which takes on an object containing the following properties.

- [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/#format')  
 Specifies a format for labels. For more information, refer to the [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/format.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/#format') option description.

- [position](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/position.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/#position')  
 Takes on the 'top' or 'bottom' values, which specify whether labels are located over or under the scale respectively.

- [visible](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/label/visible.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/#visible')  
 Specifies whether or not slider labels are visible.

<!---->

    <!--JavaScript-->
    var sliderOptions = {
        label: {
            visible: true,
            position: 'bottom',
            format: function(value) {
                return value + ' units';
            }
        }
    }

**Show/hide slider tooltip**

The widget can also display a tooltip for the slider. Tooltip options are specified using the tooltip option, which takes on an object containing the following properties.

- [enabled](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/#enabled')  
Specifies whether or not the tooltip is enabled.

- [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/#format')  
 Specifies a format for the tooltip. For more information, refer to the [format](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/#format') option description.

- [position](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/position.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/#position')  
 Takes on the 'top' or 'bottom' values, which specify whether the tooltip is located over or under the slider respectively.

- [showMode](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/tooltip/showMode.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/#showMode')  
 Takes on the 'onHover' or 'always' values, which specify whether the widget shows the tooltip only when the pointer is over the slider or always respectively.

<!---->

    <!--JavaScript-->
    var sliderOptions = {
        tooltip: {
            enabled: true,
            position: 'bottom',
            showMode: 'onhover',
            format: function(value) {
                return value + ' units';
            }
        }
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Left/right arrow  
 Decreases/increases the handle value by a [step](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step').

- Home/End  
 Sets the handle to the minimum/maximum value.
 
- Page up/Page down  
 Decreases/increases the handle value by a value specified using the [keyStep](/api-reference/10%20UI%20Widgets/dxSlider/1%20Configuration/keyStep.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#keyStep') option.
</article>