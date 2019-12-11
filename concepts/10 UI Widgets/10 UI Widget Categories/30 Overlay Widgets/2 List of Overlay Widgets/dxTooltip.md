<article data-show="Content/Applications/16_1/UIWidgets/dxTooltip/markup.html,
        Content/Applications/16_1/UIWidgets/dxTooltip/script.js,
        Content/Applications/16_1/UIWidgets/dxTooltip/styles.css">

The [Tooltip](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/') widget displays a tooltip for the specified element. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstooltiptooltiptooltip/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/0%20Control%20The%20Widget%20Visibility.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility')  
- [Position a widget](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/1%20Position%20a%20Widget.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget')  
- [Adjust animation options](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/2%20Adjust%20Animation%20Options.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options')  
- [Specify display mode](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/0%20Common%20Tasks/3%20Display%20Modes.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes')  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify the target element**

Use the [target](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#target') option to specify the element for which the tooltip should be displayed. You can specify the target element in any of the following ways.

- CSS selector  

        <!--JavaScript-->
        var tooltipOptions = {
            target = '#targetElement'
        }

- jQuery wrapper  

        <!--JavaScript-->
        var tooltipOptions = {
            target = $('#targetElement');
        }

- DOM element  

        <!--JavaScript-->
        var tooltipOptions = {
            target = document.getElementById('targetElement')
        }

**Specify tooltip contents**

The widget displays the elements located within its container tag.

    <!--HTML-->
    <div id="tooltip">
        <p>Tooltip content</p>
    </div>
</article>