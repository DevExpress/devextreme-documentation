The **RangeSlider** can display labels for the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#max') values. To configure the labels, use the [label](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/label '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/') object.

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            label: {
                visible: true,
                position: "bottom", // or "top"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

The **RangeSlider** can also display a tooltip for the slider handles. To configure it, use the [tooltip](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/') object.

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            tooltip: {
                enabled: true,
                position: "bottom", // or "top"
                showMode: "always", // or "onHover"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

To specify whether or not the selected range should be highlighted, use the **showRange** option.

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            showRange: false
        });
    });

#####See Also#####
- [RangeSlider - Handle the Value Change Event](/concepts/05%20Widgets/RangeSlider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RangeSlider/Handle_the_Value_Change_Event')
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview)
- [RangeSlider API Reference](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/')

[tags]range slider, rangeSlider, editor, label, tooltip, showRange